# Yulan Zeng / 曾钰岚 — Personal Website

基于 Astro 构建的双语个人学术、AI 产品与工程网站。英文是默认主站，中文页面位于 `/zh/`。

当前实现状态与下次续接说明见 `docs/progress.md`。

网站通过 GitHub Pages 发布到 `https://omnizoom.github.io/yulanz.github.io/`。

## 项目位置

```text
~/projects/abigailmounind.github.io
```

进入项目：

```bash
cd ~/projects/abigailmounind.github.io
```

## 本地预览

首次打开项目或依赖发生变化时：

```bash
npm install
```

按照项目约定，在后台启动 Astro：

```bash
./node_modules/.bin/astro dev --background
```

默认访问地址：

- 英文首页：`http://localhost:4321/`
- 中文首页：`http://localhost:4321/zh/`
- 英文完整案例：`http://localhost:4321/projects/enterprise-engineering-copilot/`
- 中文完整案例：`http://localhost:4321/zh/projects/enterprise-engineering-copilot/`

查看、读取日志和停止服务：

```bash
./node_modules/.bin/astro dev status
./node_modules/.bin/astro dev logs
./node_modules/.bin/astro dev stop
```

如果端口被占用，先运行 `dev status`，不要重复启动多个预览进程。

## 修改内容的位置

### 个人信息和首页项目简介

修改：

```text
src/data/site.ts
```

这里包含：

- 姓名和个人定位；
- 左侧导航文字；
- 英文/中文个人简介；
- Overview 个人介绍与时间线；
- Enterprise Engineering Copilot 简介；
- 项目指标和 CTA 文案。

英文内容在 `en` 下，中文内容在 `zh` 下。修改时应同步维护两个版本，避免浏览器自动翻译式文案。

### Experience、Research 与 Skills

修改：

```text
src/data/profile-content.ts
```

这里包含经过简历和研究材料验证的中英文经历、一作 ST-HAR 研究内容、结果表和能力证据。不要添加未经材料支持的经历、论文、指标或技能等级。

### Enterprise Engineering Copilot 完整案例

修改：

```text
src/data/case-study.ts
```

每个章节包含：

- `id`：左侧锚点，不应随意更改；
- `label`：章节编号和类别；
- `title`：章节主标题；
- `paragraphs`：背景和分析；
- `evidence`：真实证据与产出；
- `decision`：产品判断；
- `tradeoff`：取舍和限制。

案例必须继续区分：

- 已完成并有证据的实现；
- 实测 evaluation 结果；
- 产品假设；
- 尚未完成的用户研究；
- 未来计划。

不要补写虚构用户访谈、业务指标、成本或实验结果。

### 页面结构

```text
src/components/Home.astro          首页和左侧 Tab 对应内容
src/components/Experience.astro    详细经历与奖学金
src/components/Research.astro      一作研究、原始图与结果
src/components/Skills.astro        基于证据的能力分组
src/components/CaseStudy.astro     完整案例的展示结构
src/components/Sidebar.astro       左侧个人信息和导航
src/components/ProjectCard.astro   可复用项目卡片
src/components/VideoEmbed.astro    可选视频入口
src/components/Icon.astro          Docs、GitHub 和播放图标
```

### 样式和字体

```text
src/styles/global.css
docs/design-system.md
```

当前 Version 2 视觉使用接近白色的底色，并叠加低对比度的浅粉、浅蓝与浅薄荷绿色径向光晕。英文自托管 Newsreader 与 Inter；中文使用系统宋体和无衬线字体 fallback。

### 图片

Enterprise Agent 图片位于：

```text
public/images/enterprise-agent/
```

网页内使用以 `/images/` 开头的绝对站点路径，例如：

```text
/images/enterprise-agent/workspace.png
```

替换图片时建议保持相同文件名，或者同步修改 `Home.astro` 和 `CaseStudy.astro` 中的引用及 `alt` 文本。

## 新增其他项目

当前 `ProjectCard.astro` 是可复用的项目入口样式。新增项目时建议：

1. 在 `src/data/` 中增加真实项目数据；
2. 在 `src/pages/projects/<project-slug>/` 创建英文案例路由；
3. 在 `src/pages/zh/projects/<project-slug>/` 创建中文案例路由；
4. 在 `Home.astro` 的 Projects 区域增加一个 `ProjectCard`；
5. 同步准备截图、metadata、案例证据和中英文内容；
6. 运行检查和生产构建。

不要为了填满页面加入没有完成或无法证明的项目卡片。

## 加入演示视频

推荐将带字幕的视频上传到 YouTube（可设为 Unlisted）或 Bilibili，网站只保存封面图和视频地址。这样不会让 Git 仓库因大体积视频持续膨胀。

录制完成后需要准备：

- 视频 URL；
- 本地封面图；
- 校对后的英文/中文字幕；
- 视频标题；
- 需要展示的位置：Projects、完整案例或两处。

`src/components/VideoEmbed.astro` 在没有传入 `providerUrl` 时不会输出空播放器。视频接入和隐私约束详见：

```text
docs/content-strategy.md
```

如需自托管，优先使用压缩后的 H.264/AAC MP4、poster 图片和 WebVTT 字幕，不要把未经压缩的原始录屏提交到 Git。

## 修改后的检查

每次修改完成后至少运行：

```bash
npm run check
npm run build
```

预期结果：

- Astro diagnostics 为 0 errors；
- production build 成功生成 4 个或更多静态页面；
- `dist/` 中不出现 `localhost`、`file://` 或本机绝对路径。

检查 Git 状态：

```bash
git status --short
```

`dist/`、`.astro/` 和 `node_modules/` 已被忽略，不应提交。

## 当前目录结构

```text
.
├── README.md
├── astro.config.mjs
├── docs/
│   ├── content-strategy.md
│   ├── deployment.md
│   └── design-system.md
├── public/
│   └── images/enterprise-agent/
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
└── .github/workflows/pages.yml
```

## 公开发布

项目包含 GitHub Pages workflow。推送到 `main` 后会自动检查、构建并部署。发布前应：

1. 完成视觉和文字 review；
2. 补充真实简历、论文、Skills、联系方式和视频；
3. 检查所有 GitHub、PDF 和外部链接；
4. 再次执行 `npm run check` 和 `npm run build`；
5. 检查是否包含个人隐私、secret 或本地路径；
6. 推送 `main`；
7. 验证公开 URL、移动端、中英文路由和缓存后的静态资源。
