# 域名与成本核验

查询：2026-10-11。未执行任何购买。报价币种为 USD，以下是注册商标准后缀公开价，**不是具体名称结账价**。换算仅作预算参考：2026-10-09 CFETS USD/CNY 中间价 6.7330；税、银行卡转换和实际结算仍未验证。

| 名称 | 注册商 / 证据 | 首年公开价 | 正常续费 | Premium | 可注册状态 | 预算判断 |
|---|---|---:|---:|---|---|---|
| moriohhigh.wiki | [Spaceship .wiki](https://www.spaceship.com/en-GB/domains/gtld/wiki/) / [Registry RDAP](https://rdap.nic.wiki/domain/moriohhigh.wiki) | 标准价 $1.55，实际该名未报价 | $25.88 标准价，约 ¥174.25 | 未核实 | RDAP 已注册；2026-10-11T04:32:37Z，不能按新注册购买，也未确认用户所有权 | 正常续费超预算 |
| moriohhighguide.wiki | [Spaceship .wiki](https://www.spaceship.com/en-GB/domains/gtld/wiki/) / [RDAP](https://rdap.nic.wiki/domain/moriohhighguide.wiki) | 标准价 $1.55 | $25.88 | 未核实 | RDAP 404，不等于注册商可注册 | 续费超预算 |
| moriohhighhub.wiki | [Porkbun .wiki](https://porkbun.com/tld/wiki) | 标准促销 $2.06 | $26.26，约 ¥176.81 | 未核实 | 未实查具体名称 | 续费超预算 |
| moriohhigh-wiki.wiki | [Namecheap .wiki](https://www.namecheap.com/domains/registration/gtld/wiki/) | 标准公开 $2.98 | $43.98，附加费需结账核对 | 未核实 | 未实查具体名称 | 续费超预算 |
| moriohhighwiki.net | [Spaceship 价格](https://www.spaceship.com/domain-search/?tab=pricing) | $11.20 + $0.20，约 ¥76.75 | $11.20 + $0.20 | 未核实 | 未实查具体名称 | 首年超预算 |
| moriohhighwiki.org | [Spaceship .org](https://www.spaceship.com/domains/gtld/org/) / [RDAP](https://rdap.publicinterestregistry.org/rdap/domain/moriohhighwiki.org) | $6.65 + $0.20，约 ¥46.12 | $11.39 + $0.20，约 ¥78.03 | 未核实 | RDAP 404；注册商结账 availability 未核实 | 标准价满足两年约束，税前 |
| moriohhighwiki.site | [Spaceship .site](https://www.spaceship.com/domains/gtld/site/) | $0.98 + $0.20，约 ¥7.94 | $15.08 + $0.20，约 ¥102.88 | 未核实 | 未实查具体名称 | 续费略超预算，税前 |
| 同名候选 / Cloudflare Registrar | [官方 TLD 与注册说明](https://developers.cloudflare.com/registrar/top-level-domains/) | 未取得实际报价 | 未取得 | 未核实 | 未进入授权购买结账流程 | 无法判断 |

**条件首选：moriohhighwiki.org / Spaceship。** 自然表达 Wiki 意图，标准报价同时符合首年和续费约束；只有注册商确认可注册、非溢价和税费后，才可称最终推荐。

目前没有一个“具体名称可注册 + Premium + 实际总价”全部通过的候选。不给出两个虚假合格备选。`.wiki` 在所查注册商的正常续费明显超预算，不能仅以促销首年便宜而推荐购买。

RDAP 原始非个人字段记录：raw/domain-rdap.json、raw/moriohhigh-wiki-rdap.json。已注册名称的 Cloudflare nameservers 不证明本项目所有权。Cloudflare Token 查询同名 zone 没有返回结果，也不能排除 Token 无该 Zone 权限。

名称包含游戏名称及 JoJo 语义关联，存在混淆风险；本站全站标示 unofficial / independent，未冒用官方 Logo 或声称认可。这是明显混淆风险识别，不是商标法律审查或注册权保证。公开联系邮箱需在域名确定并实际可用后填写。

## 增量记录：用户已购买正式域名

2026-10-11 22:28 Asia/Shanghai：用户明确提供已在 Spaceship 购买的 `moriohhighguide.wiki`，并要求使用域名邮箱转发至其提供的 Gmail。以上早期查询及报价保留为历史，不能继续把该名称的早期 RDAP 404 当作当前状态。

- Registry RDAP 已确认注册时间 `2026-10-11T14:03:13Z`，到期 `2027-10-11`，注册商 Spaceship；非个人字段保存于 `raw/moriohhighguide-wiki-rdap.json`。
- 本项目采用用户已购买域名；没有执行购买或付款。实际付款总价、Premium 状态、订单续费价格仍未取得，不把标准公开价当成订单价格。
- Cloudflare Free zone 已创建，分配 `armfazh.ns.cloudflare.com` / `laura.ns.cloudflare.com`；Pages custom domain 已关联，apex CNAME 已配置。
- 22:28 核验 public NS 仍为 `launch1.spaceship.net` / `launch2.spaceship.net`，Cloudflare zone 为 pending；Spaceship 内置浏览器未登录，等待用户本机登录或自行切换 nameservers。
- `contact@moriohhighguide.wiki` 精确转发规则已保存并读回验证；私有目标是用户提供的已验证 Gmail，没有在公开代码/报告中写出该私人地址。服务启用返回 `Active zone required`，收信尚未生效，也未做投递测试。

## 2026-10-12接入完成增量

用户已购moriohhighguide.wiki在Spaceship完成NS切换；Cloudflare zone、Pages域名和HTTPS已验证active，正式站已部署，公开域名邮箱转发服务已启用。实际订单首年/税费/Premium/续费仍未知，不用标准促销价冒充实付价。此增量不覆盖历史候选/价格研究。实收测试按用户要求跳过。证据：reports/domain-binding.json、email-routing.json、online-acceptance.json。
