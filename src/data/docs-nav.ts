// 文档侧栏导航（对照官方 meta.json 结构）
export type NavItem = { label: string; en: string; href: string };
export type NavGroup = { title: string; items: NavItem[] };

export const components: NavItem[] = [
  { label: "警告框", en: "alert", href: "/docs/components/takumi/alert" },
  { label: "徽章", en: "badge", href: "/docs/components/takumi/badge" },
  { label: "卡片", en: "card", href: "/docs/components/takumi/card" },
  { label: "数据表", en: "data-table", href: "/docs/components/takumi/data-table" },
  { label: "分隔线", en: "divider", href: "/docs/components/takumi/divider" },
  { label: "表单", en: "form", href: "/docs/components/takumi/form" },
  { label: "图表", en: "graph", href: "/docs/components/takumi/graph" },
  { label: "标题", en: "heading", href: "/docs/components/takumi/heading" },
  { label: "防拆分", en: "keep-together", href: "/docs/components/takumi/keep-together" },
  { label: "键值对", en: "key-value", href: "/docs/components/takumi/key-value" },
  { label: "链接", en: "link", href: "/docs/components/takumi/link" },
  { label: "列表", en: "list", href: "/docs/components/takumi/list" },
  { label: "分页符", en: "page-break", href: "/docs/components/takumi/page-break" },
  { label: "页脚", en: "page-footer", href: "/docs/components/takumi/page-footer" },
  { label: "页眉", en: "page-header", href: "/docs/components/takumi/page-header" },
  { label: "页码", en: "page-number", href: "/docs/components/takumi/page-number" },
  { label: "图片", en: "pdf-image", href: "/docs/components/takumi/pdf-image" },
  { label: "二维码", en: "qrcode", href: "/docs/components/takumi/qrcode" },
  { label: "区段", en: "section", href: "/docs/components/takumi/section" },
  { label: "签名", en: "signature", href: "/docs/components/takumi/signature" },
  { label: "层叠", en: "stack", href: "/docs/components/takumi/stack" },
  { label: "表格", en: "table", href: "/docs/components/takumi/table" },
  { label: "文本", en: "text", href: "/docs/components/takumi/text" },
  { label: "水印", en: "watermark", href: "/docs/components/takumi/watermark" },
];

export function engineComponents(base: "takumi" | "forme"): NavItem[] {
  return components.map((c) => ({
    ...c,
    href: c.href.replace("/takumi/", `/${base}/`),
  }));
}

export const blocks: NavItem[] = [
  { label: "经典发票", en: "invoice-classic", href: "/docs/blocks/takumi/invoice-classic" },
  { label: "顾问发票", en: "invoice-consultant", href: "/docs/blocks/takumi/invoice-consultant" },
  { label: "企业发票", en: "invoice-corporate", href: "/docs/blocks/takumi/invoice-corporate" },
  { label: "创意发票", en: "invoice-creative", href: "/docs/blocks/takumi/invoice-creative" },
  { label: "极简发票", en: "invoice-minimal", href: "/docs/blocks/takumi/invoice-minimal" },
  { label: "现代发票", en: "invoice-modern", href: "/docs/blocks/takumi/invoice-modern" },
  { label: "财务报告", en: "report-financial", href: "/docs/blocks/takumi/report-financial" },
  { label: "市场报告", en: "report-marketing", href: "/docs/blocks/takumi/report-marketing" },
  { label: "运营报告", en: "report-operations", href: "/docs/blocks/takumi/report-operations" },
  { label: "安全报告", en: "report-security", href: "/docs/blocks/takumi/report-security" },
];

export function engineBlocks(base: "takumi" | "forme"): NavItem[] {
  return blocks.map((b) => ({
    ...b,
    href: b.href.replace("/takumi/", `/${base}/`),
  }));
}

export const themes: NavItem[] = [
  { label: "专业", en: "professional", href: "/docs/themes/professional" },
  { label: "现代", en: "modern", href: "/docs/themes/modern" },
  { label: "极简", en: "minimal", href: "/docs/themes/minimal" },
  { label: "高管", en: "executive", href: "/docs/themes/executive" },
  { label: "企业", en: "corporate", href: "/docs/themes/corporate" },
  { label: "雅致", en: "elegant", href: "/docs/themes/elegant" },
  { label: "鲜明", en: "vivid", href: "/docs/themes/vivid" },
  { label: "森林", en: "forest", href: "/docs/themes/forest" },
  { label: "蓝图", en: "blueprint", href: "/docs/themes/blueprint" },
];

export const sidebar: NavGroup[] = [
  {
    title: "开始",
    items: [
      { label: "介绍", en: "introduction", href: "/docs" },
      { label: "安装", en: "installation", href: "/docs/installation" },
      { label: "MCP", en: "mcp", href: "/docs/mcp" },
      { label: "注册表", en: "registry", href: "/docs/registry" },
    ],
  },
  {
    title: "主题",
    items: [{ label: "总览", en: "overview", href: "/docs/themes" }, ...themes],
  },
  {
    title: "主题定制",
    items: [
      { label: "Takumi", en: "takumi", href: "/docs/theming/takumi" },
      { label: "Forme", en: "forme", href: "/docs/theming/forme" },
    ],
  },
  {
    title: "组件",
    items: [
      { label: "总览", en: "overview", href: "/docs/components" },
      ...engineComponents("takumi"),
      ...engineComponents("forme"),
    ],
  },
  {
    title: "区块",
    items: [
      { label: "总览", en: "overview", href: "/docs/blocks" },
      ...engineBlocks("takumi"),
      ...engineBlocks("forme"),
    ],
  },
  {
    title: "更新日志",
    items: [{ label: "全部更新", en: "changelog", href: "/docs/changelog" }],
  },
];
