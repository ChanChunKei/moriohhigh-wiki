# 站点架构

英语、静态 Astro/MDX、原生 AnvilWiki 导航/Sidebar/TOC/Pagefind。

- /：品牌与入口。
- /guides/how-to-play/：游戏链接和平台启动步骤。
- /resources/release-information/：历史发布信息和观察边界。
- /resources/community-links/：开发者群组、Discord 和 Trello 证据边界。
- /faq/：快速答疑。
- /about/、/privacy-policy/、/terms-of-service/、/copyright/：说明与政策。
- /contact/：域名邮箱待用户实际提供；当前 noindex，未虚构邮箱。
- /guides/、/resources/、/recent/、/tags/ 与标签子页：真实导航，无索引，不作为新增 SEO 精品页。
- /404.html：原生 404。

所有内部 URL 保持尾斜线。未核实的机制路由没有创建，也不会出现在 Sitemap。广告组件保留、广告与分析默认关闭。域名未确定，localhost 仅用于本地；发布时必须使用 Cloudflare 实际分配的网址重建 Canonical、Sitemap、robots 和分享图 URL。
