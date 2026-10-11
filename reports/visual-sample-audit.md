# 视觉样板审计

2026-10-11，真实 Codex IAB 浏览器，静态预览 http://127.0.0.1:4322/。1440×900 桌面及 390×844 移动视口。截图位于 reports/screenshots/。

已检查：首页、how-to-play 指南、community-links 数据表；桌面导航、文章 Sidebar、TOC、Quick Answer、FAQ、表格、相关文章、内链；移动菜单实际打开，移动目录实际展开。

Pagefind 实际输入 Discord，返回 2 篇对应文章，并点击社区文章成功。搜索弹窗可滚动，未记录搜索控制台错误。移动 how-to-play 的 document.scrollWidth=375、innerWidth=390，无整页横向溢出。

首页留白经实查缩短；桌面与移动截图保留。未使用受保护的游戏图。封面用于社交分享，正文以文本和表格为主。广告和 Cookie banner 未启用。

**限制：**指定的 How to Get a Stand 样板因事实证据不足没有生成，用可靠的 how-to-play 页面验证共享文章组件；这不代表 Stand 内容门禁通过。移动体验是浏览器视口测试，不是真实手机或游戏支持测试。Lighthouse / 真实 Core Web Vitals 尚未测量，不声明性能分数。

## Incremental Stand sample and live checks — 2026-10-11

The earlier Stand deferral is historical. After E17/E18 were obtained, the actual How to Get a Stand page was created and checked in the real browser at 1440×900 and 390×844. The mobile TOC was expanded successfully; both tables and the Quick Answer were readable. Mobile document scrollWidth 375 <= innerWidth 390, one H1, two tables and no recorded browser error logs. Screenshots: stand-desktop.jpg and stand-mobile.jpg. This passes the requested Stand visual sample for the documented methods, without claiming a live Roblox client test. A community-links data page supplies the third sample; a complete Stand roster remains deferred.

The first production edition was also checked in the real browser: desktop/mobile home, Pagefind Discord results and a successful community article click, mobile community TOC and table. Live screenshots are saved separately. The new six-page edition needs its own upload and final live confirmation.
