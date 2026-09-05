---
title: "Invoice Minimal"
description: "极简发票文档模板。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/forme/invoice-minimal
```

### 手动

**安装以下依赖：**

```bash
npm install @formepdf/react @formepdf/core
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/blocks/invoice-minimal/invoice-minimal.tsx`

- `components/pdf/theme-provider.tsx`

- `lib/resolve-color.ts`

- `lib/pdf-themes/professional.ts`

- `lib/pdf-themes/primitives.ts`

- `types/pdf-themes.ts`

- `types/pdf-components.ts`

**更新导入路径以匹配你的项目配置。**

## 用法

```tsx
import { InvoiceMinimalDocument } from "@/components/pdf/invoice-minimal";
```

```tsx
<InvoiceMinimalDocument />
```
