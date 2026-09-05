---
title: "Invoice Creative"
description: "创意风格发票文档模板。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/takumi/invoice-creative
```

### 手动

**安装以下依赖：**

```bash
npm install takumi-pdf @takumi-rs/helpers
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/blocks/invoice-creative/invoice-creative.tsx`

- `components/pdf/theme-provider.tsx`

- `lib/resolve-color.ts`

- `lib/pdf-primitives.tsx`

- `lib/pdf-svg.tsx`

- `lib/pdf-themes/professional.ts`

- `lib/pdf-themes/primitives.ts`

- `types/pdf-themes.ts`

- `types/pdf-components.ts`

**更新导入路径以匹配你的项目配置。**

## 用法

```tsx
import { InvoiceCreativeDocument } from "@/components/pdf/invoice-creative";
```

```tsx
<InvoiceCreativeDocument />
```
