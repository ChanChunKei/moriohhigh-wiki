# 技术审计

日期：2026-10-11。Node 22.19.0，模板 pnpm 11.1.1，Astro 7.3.2，Wrangler 4.149.0。原模板 AnvilWiki 2.37.0 / MIT / b00859a524a176d60f3982c71b318ac11bc2fd5b。执行日志逐项保存于 reports/logs/。

| 命令 | 当前结果 | 证据 / 限制 |
|---|---|---|
| pnpm check | 已验证通过 | 136 files，0 errors / warnings / hints；检查生产应用，Vitest 测试另行运行 |
| pnpm lint | 已验证通过 | eslint 无错误 |
| pnpm test | 已验证通过 | 18 suites，244 passed / 1 skipped；7 个保留的上游演示/营销测试不适用于已套模板的本站；一个 FORKER warning 测试因该块已删除跳过 |
| pnpm check-config | 已验证通过 | 英语、2 个分类与目录匹配；实际 Pages origin 配置匹配 |
| pnpm check-content | 已验证通过 | 3 MDX schema / H1 / ALT / internal trailing slash 检查 clean |
| pnpm check-links | 已验证通过 | 19 HTML 中 367 internal links 全部解析 |
| pnpm check-sitemap | 本地已验证通过 | 静态预览 9 URLs 全部 200；不是线上验收，部署后需重跑 |
| pnpm build | 已验证通过 | static Astro，19 HTML；Pagefind en，3 indexed articles |
| pnpm check-i18n | 已验证通过 | 附加英语配置检查 |
| node tools/audit-build.mjs | 已验证通过：19 HTML / 9 indexable / 9 sitemap / 0 failures | H1、唯一 Title、Description、Canonical、JSON-LD、ALT、模板残留、noindex / Sitemap 对齐、启用的第三方追踪 |

原始全模板测试第一次执行有 14 套件失败：绝大多数要求 Anvil Quest 示例内容、已移除的 landing 文件或日语演示。已保留测试文件，列入 vitest.config.ts 的 templateOnlySuites，适用的 URL、SEO、i18n、内容、索引策略等仍运行。已修复实际首页 videoId 字段缺失和本站测试中固定演示名称/语言的断言，未通过恢复演示内容来绕过校验。

Windows 初次 pnpm 11.25.0 install 出现 symlink EPERM，改用模板固定 11.1.1 成功。两个 optional native 包下载失败；修复脚本仅从 npm registry 下载，校验 metadata SHA512，再写入受限 node_modules 目标。最终 build 和 Pagefind 实际运行成功。PowerShell npx.ps1 的动态调用解析异常通过调用官方 npx.cmd 解决。

英语唯一实际内容版本；保留模板有效 alternates，没有声明不存在的翻译。分类、recent、tags 和未配置联系邮箱的 contact noindex，并同步排除 Sitemap。没有 Stand / codes / 空壳机制路由。广告组件保留，广告、GA4、Cloudflare Web Analytics、Giscus 和 Cookie banner 未启用。

桌面/移动/搜索的实际浏览器验证见 visual-sample-audit.md。没有 Lighthouse 或真实 Core Web Vitals 分数，不宣称富媒体结果、Google 收录或 SEO 效果。线上 HTTP/HTTPS/404、Sitemap 和 Canonical 以 online-acceptance.json 为准。
