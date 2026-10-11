# 图片完善与验收 — 2026-10-12

## 本次改动

- 原首页没有呈现主视觉；现采用两列桌面布局与手机纵向布局，展示原创校园插画。
- 四篇文章改用校园、百科与象征性箭头、空白日历与时钟、社区连接布告板四套不同插画。原文字封面文件保留，但不再被页面引用；新版无旧 pages.dev 字样。
- 首页、分类/标签/近期列表、相关文章使用原生 ArticleCover 响应式缩略图；正文在 Quick Answer 之后显示封面和明确图注，先回答玩家问题。
- Stand 获取新增可读、可选中文字的 HTML 流程图。只复述 E17 已记录的规则，保留未实测概率与未知位置/时长说明；没有增加新游戏机制。
- 默认 OG/Organization/Article fallback 图片统一读取 site.ogImage，采用独立版本 hero-v2.webp；原图保留。
- 四幅图用内置 image_gen 生成；提示词：research/image-prompts-2026-10-12.json。仅用 Sharp 做尺寸/格式压缩，未调用付费 CLI/API。最终资源：src/assets/covers/*-v2.webp、public/images/hero-v2.webp。原始 PNG 保存在本地 .tools/image-originals/，生成工具原件也保留。
- 插画为原创编辑视觉，不是实际游戏画面、地图或道具模型。页面图注、ALT 与版权说明均明确区分；未复制 Roblox/JoJo 官方图或玩家截图。

## 本地验证（已完成/已验证）

- check: 137 files，0 errors/warnings/hints。lint 通过。test: 18 suites，244 passed /1 skipped。
- check-config、check-content（4 MDX）、check-i18n、check-links、build 通过；Pagefind 仍索引4篇文章。
- check-sitemap against http://127.0.0.1:4322: 11/11 HTTP200。
- build SEO audit:21HTML /11indexable /11sitemap /0failure。
- 图片专项 audit-images.mjs:21HTML /26资源 /0failure；每张可见图片有描述 ALT/尺寸，所有分享图尺寸与真实资源一致。
- 真实 IAB 本地浏览器桌面1280×720：首页5张图片均加载，scrollWidth1265<=1280；手机390×844：首页主视觉加载，scrollWidth375<=390；Stand手机图注与双路径纵向流程可读，scrollWidth375<=390。
- 截图：reports/screenshots/images-home-desktop.png、images-home-mobile.png、images-stand-diagram-desktop.png、images-stand-diagram-mobile.png。手机截图是浏览器视口，不是实际手机或 Lighthouse/CWV 测量。

## 线上验证

新版尚待部署，不能以本地通过代替线上完成。保留现有域名、邮箱、GSC/GA4配置与各自尚待验证状态。
