---
title: "Signature"
description: "包含姓名和标签的签名栏。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/forme/signature
```

### 手动

**安装以下依赖：**

```bash
npm install @formepdf/react @formepdf/core
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/signature/signature.tsx`

- `components/pdf/theme-provider.tsx`

- `lib/resolve-color.ts`

- `lib/pdf-themes/professional.ts`

- `lib/pdf-themes/primitives.ts`

- `types/pdf-themes.ts`

- `types/pdf-components.ts`

**更新导入路径以匹配你的项目配置。**

## 用法

```tsx
import { PdfSignatureBlock } from "@/components/pdf/signature";
```

```tsx
<PdfSignatureBlock name="Jane Doe" label="Authorized Signature" />
```

## API 参考

### PdfSignatureBlock

| 属性      | 类型                                 | 默认值   |
| --------- | ------------------------------------ | -------- |
| `variant` | `'single' \| 'double' \| 'inline'`   | 'single' |
| `label`   | `string`                             | -        |
| `name`    | `string`                             | -        |
| `title`   | `string`                             | -        |
| `date`    | `string`                             | -        |
| `signers` | `[SignatureSigner, SignatureSigner]` | -        |
| `style`   | `Style`                              | -        |
