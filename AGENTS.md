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

## Git 注意

- `Gemfile.lock` 和 `package-lock.json` 均被 gitignore
- `_site/`, `.sass-cache/`, `vendor/` 被 gitignore
- 无测试 / 无 lint / 无 typecheck — 验证方式为 `jekyll build` 或浏览器预览
