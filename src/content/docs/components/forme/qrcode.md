---
title: "QR Code"
description: "根据字符串值生成的二维码。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/forme/qrcode
```

### 手动

**安装以下依赖：**

```bash
npm install @formepdf/react @formepdf/core
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/qrcode/qrcode.tsx`

- `components/pdf/theme-provider.tsx`

- `lib/resolve-color.ts`

- `lib/pdf-themes/professional.ts`

- `lib/pdf-themes/primitives.ts`

- `types/pdf-themes.ts`

- `types/pdf-components.ts`

**更新导入路径以匹配你的项目配置。**

## 用法

```tsx
import { PdfQRCode } from "@/components/pdf/qrcode";
```

```tsx
<PdfQRCode value="https://pdfcn.dev" />
```

## API 参考

### PdfQRCode

| 属性              | 类型                       | 默认值  |
| ----------------- | -------------------------- | ------- |
| `value`           | `string`                   | -       |
| `size`            | `number`                   | -       |
| `color`           | `string`                   | -       |
| `backgroundColor` | `string`                   | -       |
| `errorLevel`      | `'L' \| 'M' \| 'Q' \| 'H'` | -       |
| `margin`          | `number`                   | -       |
| `caption`         | `string`                   | -       |
| `children`        | `never`                    | -       |
