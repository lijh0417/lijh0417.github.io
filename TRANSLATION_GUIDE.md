# Translation Guide — Academic Pages Bilingual System

## System Overview

This site uses a `ref`-based bilingual system with **no plugins**:

| Language | URL Prefix | `lang` field |
|----------|-----------|--------------|
| English (default) | `/:year/:month/:ref/` | `en` |
| Chinese | `/zh/:year/:month/:ref/` | `zh` |

- **All pages default to English** — switch to Chinese via the toggle button
- Each post has a sibling translation paired by a shared `ref` value
- The toggle button adds/removes `/zh/` prefix from the current URL — no page reload needed

## File Naming

| Post Type | Filename Convention | Example |
|-----------|-------------------|---------|
| English original (ZH→EN translation target) | Original name, no suffix | `2024-06-09-杆模型确定边界条件的方法.md` |
| Chinese original (EN→ZH translation target) | Original name, no suffix | `2025-04-04-Perturbation-Theory-Kirchhoff-Rod.md` |
| English translation | Original name + `-en` suffix | `2024-06-09-杆模型确定边界条件的方法-en.md` |
| Chinese translation | Original name + `-zh` suffix | `2025-04-04-perturbation-theory-kirchhoff-rod-zh.md` |

## Front Matter Rules

Every post **must** have these fields:

```yaml
---
title: "Your Title"           # Translated title in target language
date: YYYY-MM-DD              # Same date as the original
tags:
  - Tag1                      # Keep tags identical to original
  - Tag2
lang: en                      # "en" or "zh"
ref: your-unique-ref-slug     # Same value for both language versions
permalink: /2025/04/your-unique-ref-slug/   # EN: /:year/:month/:ref/
                                  # ZH: /zh/:year/:month/:ref/
---
```

### Critical Rules

1. **`ref` must be identical** in both EN and ZH versions — this is how the toggle pairs them
2. **`permalink`** — EN uses `/:year/:month/:ref/` (no `/zh`), ZH uses `/zh/:year/:month/:ref/`
3. **`date`** must match between paired posts (from the filename date)
4. **`tags`** should be kept in English regardless of post language, for consistency in tag archives
5. **`title`** must be translated to the target language

## Translation Steps

### Step 1 — Create the translation file

Copy the original post to a new file with the appropriate suffix:

```bash
# Translating an English original → Chinese
cp _posts/2025-04-04-Perturbation-Theory-Kirchhoff-Rod.md _posts/2025-04-04-perturbation-theory-kirchhoff-rod-zh.md

# Translating a Chinese original → English
cp "_posts/2024-06-09-杆模型确定边界条件的方法.md" "_posts/2024-06-09-杆模型确定边界条件的方法-en.md"
```

### Step 2 — Update front matter

Edit the new file:

- **EN→ZH**: change `lang: en` → `lang: zh`, translate `title`, set `permalink: /zh/:year/:month/:ref/`
- **ZH→EN**: change `lang: zh` → `lang: en`, translate `title`, set `permalink: /:year/:month/:ref/`

Keep `ref` the same as the original. Keep `date` and `tags` unchanged.

### Step 3 — Translate the body content

Translate all visible text between `<!-- more -->` tags (if present) and after.

### Step 4 — Fix image paths

All image paths must be **absolute** from the site root (`/assets/images/...`).
Relative paths (`../assets/images/...`) will break on `/zh/...` pages.

```markdown
<!-- WRONG — will 404 on /zh/ pages -->
![](../assets/images/foo.png)

<!-- CORRECT -->
![](/assets/images/foo.png)
```

### Step 5 — Update the original if needed

- If translating **ZH→EN**: update the original Chinese file to add `ref` and `permalink: /zh/.../` if missing
- If translating **EN→ZH**: update the original English file to add `ref` if missing

## LaTeX Rules

Math rendering uses MathJax via kramdown. Follow these rules to avoid broken formulas:

### Do's

```latex
$$                                  ← Use $$ for display math
\begin{aligned}                     ← Always wrap multi-line formulas
  a &= b \\
  c &= d
\end{aligned}
$$

$$                                  ← Separate blocks for unrelated formulas
\begin{cases}
  x + y = 1 \\
  x - y = 2
\end{cases}
$$

$$                                  ← stands alone
F = ma                             ← no \\ needed for single-line math
$$
```

### Don'ts

| Anti-pattern | Why | Fix |
|---|---|---|
| `\\` inside `$$` without `\begin{aligned}` | kramdown treats each line as a new paragraph inside math | Wrap in `\begin{aligned}...\end{aligned}` |
| `$` wrapping `\begin{array}` | `$` is inline; `\begin{array}` is display-level | Use `$$` |
| `$...$` with `\\` line breaks | Inline math does not support line breaks | Use `$$` + `\begin{aligned}` |
| `\rm{...}` | Deprecated LaTeX | Use `\mathrm{...}` |
| `\mathbf{^T}` | Invalid — `^T` needs an atom to superscript | Use `^{\mathsf{T}}` |
| `\\` between `\end{cases}` and `\begin{cases}` inside one `$$` | Causes LaTeX error | Split into two `$$` blocks |

### Single-line formulas

Use `$$` (not `$`) for displayed equations:

```latex
$$\kappa(s) = \frac{M(s)}{EI}$$
```

Use `$...$` only for inline math like `$\mathbf{d}_3$` in a sentence.

## Image Path Rules

1. **Always use absolute paths**: `/assets/images/...`
2. Never use `../assets/images/...` or `images/...`
3. Organize images by post slug in `/assets/images/<post-ref>/`

## Verification Checklist

After creating a translation, verify:

- [ ] Both EN and ZH files exist with matching `ref`
- [ ] `lang` is correct (`en` or `zh`)
- [ ] `permalink` follows the convention (EN: no `/zh`, ZH: starts with `/zh/`)
- [ ] EN permalink = ZH permalink with `/zh` prefix removed
- [ ] All image paths use absolute paths (`/assets/images/...`)
- [ ] No `\\` outside `\begin{aligned}` / `\begin{cases}` / etc. inside `$$`
- [ ] No `$` wrapping `\begin{array}` or `\begin{matrix}`
- [ ] No `\rm{...}` (use `\mathrm{...}`)
- [ ] No `\mathbf{^T}` (use `^{\mathsf{T}}`)
- [ ] Run `bundle exec jekyll build --safe` or `docker compose up` — no errors
- [ ] Toggle button works: click from EN page → ZH page and back

## Verifying Pairs

To list all pairs with their URLs:

```bash
python3 -c "
import os, re
p = '_posts'
for f in sorted(os.listdir(p)):
    if not f.endswith('.md') or f == 'notes.md': continue
    with open(os.path.join(p,f)) as fh:
        c = fh.read()
    lang = re.search(r'^lang:\s*(\S+)', c, re.MULTILINE)
    ref = re.search(r'^ref:\s*(\S+)', c, re.MULTILINE)
    print(f'{f}: lang={lang.group(1) if lang else \"?\":5s} ref={ref.group(1) if ref else \"?\":40s}')
"
```

## Quick create a new translation

```bash
# Save as script, then edit
python3 << 'PYEOF'
import sys, re

src = sys.argv[1]
target_lang = sys.argv[2]  # "en" or "zh"

with open(src) as f:
    content = f.read()

# Determine suffix
if target_lang == "zh":
    out = src.replace('.md', '-zh.md')
else:
    out = src.replace('.md', '-en.md')

# ... (edit front matter, write output)
PYEOF
```
