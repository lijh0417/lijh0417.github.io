# AGENTS.md

## 仓库身份

- 李嘉豪 (JiaHao Li) 个人学术主页，托管于 `https://lijh0417.github.io`
- 基于 Academic Pages Jekyll 主题（衍生自 Minimal Mistakes）
- 使用 GitHub Pages 自动部署，无 CI 配置文件以外的额外构建步骤

## 本地开发

```bash
# 安装依赖（权限问题时先运行第一行）
bundle config set --local path 'vendor/bundle'
bundle install

# 启动本地开发服务器
bundle exec jekyll serve -l -H localhost
# 或使用 Docker
docker compose up
```

- 本地访问地址：`http://localhost:4000`
- `_config.yml` 变动需重启 jekyll serve

## 内容管理

| 目录 | 用途 | 说明 |
|------|------|------|
| `_posts/` | 博客文章 | 中英文混合，YAML frontmatter 含 `tags` |
| `_publications/` | 论文条目 | 命名格式 `YYYY-MM-DD-title-slug.md` |
| `_pages/` | 站点页面 | about, cv, publications 列表等 |
| `_talks/` | 报告条目 | 含 `location` 字段用于 talkmap |
| `_teaching/` / `_portfolio/` | 教学/作品集 | 使用较少 |
| `_data/navigation.yml` | 主导航配置 | 控制 header 链接 |

- `_config.yml`: `locale: zh-CN`, `future: true`（未来日期的文章可见）

### 双语系统

详见 [TRANSLATION_GUIDE.md](./TRANSLATION_GUIDE.md)。简而言之：

- EN 文章：`lang: en`, `permalink: /:year/:month/:ref/`
- ZH 文章：`lang: zh`, `permalink: /zh/:year/:month/:ref/`
- 配对靠 `ref` 字段（同一篇文章两个语言版本 `ref` 相同）
- 图片路径必须是绝对路径 `/assets/images/...`（不能用 `../assets/images/...`）
- 语言切换按钮通过 URL 前缀 `/zh/` 有无来跳转

## 维护脚本

### CV 更新
编辑 `_pages/cv.md` → 运行脚本更新 `_data/cv.json`:
```bash
bash scripts/update_cv_json.sh
# 或手动:
python3 scripts/cv_markdown_to_json.py --input _pages/cv.md --output _data/cv.json --config _config.yml
```

### Talkmap 生成
抓取 `_talks/*.md` 中 `location` 字段 → 地理编码 → 输出到 `talkmap/`:
- Python: `python3 talkmap.py`
- Jupyter: `talkmap.ipynb`
- GitHub Actions 在 push 到 `talks/**` 或 `talkmap.ipynb` 时自动执行

### JS 压缩
编辑 `assets/js/_main.js` 等源文件后需手动压缩:
```bash
npm run uglify
```
生成 `assets/js/main.min.js`

## 公式引擎

站点使用 **KaTeX**（由 `_includes/head/custom.html` 加载），`_config.yml` 中 `math_engine: mathjax`（kramdown 的 HTML 输出格式，与客户端渲染引擎无关）。

KaTeX 相关文件：
- `_includes/head/custom.html` — KaTeX CSS + JS + auto-render（唯一生效的配置）
- `_includes/head.html` — 曾包含已废弃的 MathJax v2 脚本（2026-06 已移除）
- `_includes/latex.html` — 旧的 MathJax v2 配置，未在任何 layout 中引用，已删除

### 工作流程

1. kramdown 识别 `$...$` / `$$...$$`，输出 `\(...\)` / `\[...\]`（受 `math_engine: mathjax` 控制）
2. `input: Kramdown` 确保 `_` 在公式内不被解析为 `<em>`
3. KaTeX auto-render 扫描页面中的 `\(...\)` / `\[...\]`（以及 `$...$` / `$$...$$` 作为 fallback）进行渲染

> **坑：** `_config.yml` 中 `kramdown: input: GFM` 会导致 `_` 在 `$...$` 内被解析成 `<em>`，破坏公式渲染。必须使用 `input: Kramdown`（默认值），让 kramdown 在解析斜体之前先识别数学公式，保护 `_`。

## 公式乱码修复

当笔记中公式出现乱码时，按下述规则处理：

1. 识别乱码模式：常见于 **KaTeX 行内公式 `$...$`** 被过度转义，例如 `\$...\$`、`​$...$`（含零宽字符）、或 `$...$` 内 latex 命令被 HTML entity 编码（如 `&lt;`→`<`）
2. 修复方法：
   - 移除多余的 `\` 转义（`\$` → `$`）
   - 移除零宽字符（`&ZeroWidthSpace;`、`​`、`&#8203;` 等）
   - 将 HTML entity 解码回原文（`&lt;` → `<`, `&gt;` → `>`, `&amp;` → `&`）
   - 确保公式两侧只有一对 `$`（行内）或 `$$`（块级），无多余空格或零宽字符干扰
3. 验证：修复后 `jekyll build` 不应报错，且公式在浏览器中正确渲染
4. 常见问题文件：`_posts/` 和 `_pages/` 下的 `.md` 文件

## 密码保护

部分文章可使用 AES-256-GCM 加密保护，只有输入正确密码才能查看内容。

### 文件说明

| 文件 | 作用 |
|------|------|
| `scripts/encrypt-site.js` | Node.js 构建后加密脚本，扫描 `_site/` 加密受保护页面的 HTML |
| `.github/workflows/deploy.yml` | GitHub Actions 部署流程：jekyll build → 加密 → 部署 |
| `_layouts/single.html` | 添加 `page.password_protected` 判断 + `<!--ENCRYPT-->` 标记 |
| `assets/js/_main.js` | Web Crypto API 解密逻辑（PBKDF2 + AES-GCM）+ client-side marked 渲染 |

### 工作机制

```
本地编辑                       部署 (GitHub Actions)
─────────────                 ─────────────────────
源文件为可读                   jekyll build (正常渲染)
markdown                      ↓
                              encrypt-site.js 扫描 _site/
                              ↓
                              找到受保护页面的 <!--ENCRYPT:start-->
                              ↓
                              AES-256-GCM 加密 HTML 内容
                              ↓
                              替换为密码框 + 加密数据
                              ↓
                              部署到 GitHub Pages
```

- **本地** `jekyll serve`：内容正常显示，可随意编辑 markdown
- **正式站**：内容加密，需输入密码才能查看

### 如何使用

1. 在文章 frontmatter 添加 `password_protected: true`
2. 正常写 markdown，确保有 `<!-- more -->` 分隔摘要和正文
3. 提交推送即可

```bash
# 本地开发正常编辑，无需加密步骤
vim _posts/2026-07-01-my-post.md

# 本地预览（内容可见，无加密）
bundle exec jekyll serve -l -H localhost

# 提交后 GitHub Actions 自动加密并部署
git add . && git commit -m "add protected post"
git push
```

### 首次设置

1. 在 GitHub 仓库 Settings → Secrets and variables → Actions → 添加 `POST_PASSWORD` 密钥
2. 在 GitHub 仓库 Settings → Pages → Source → 选择 **GitHub Actions**
3. 推送代码即可触发自动构建+加密+部署

### 效果

- 列表页：显示标题、日期、摘要，标题旁带 🔒 图标
- 文章页（本地预览）：内容正常显示（无密码限制）
- 文章页（正式站）：标题/日期/标签正常显示，内容区域显示密码框
- 输入正确密码后：解密 markdown → `marked` 浏览器端渲染 HTML → 注入 DOM → KaTeX 自动渲染数学公式

### 更换密码

在 GitHub Secrets 中更新 `POST_PASSWORD` 的值即可。下次部署时所有受保护页面会用新密码重新加密。

### 注意事项

- 密码通过 GitHub Actions Secrets 传入，不在仓库中存储
- 所有保护文章使用同一密码
- 解密依赖 Web Crypto API，需要现代浏览器（Chrome 60+, Firefox 60+, Safari 15+, Edge 79+）
- 客户端渲染使用 `marked`（从 CDN 加载，仅受保护页面加载）

## Git 注意

- `Gemfile.lock` 和 `package-lock.json` 均被 gitignore
- `_site/`, `.sass-cache/`, `vendor/` 被 gitignore
- 无测试 / 无 lint / 无 typecheck — 验证方式为 `jekyll build` 或浏览器预览
