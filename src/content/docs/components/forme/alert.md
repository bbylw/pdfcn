---
title: "Alert"
description: "提示框，包含信息、成功、警告和错误变体。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/forme/alert
```

### 手动

**安装以下依赖：**

```bash
npm install @formepdf/react @formepdf/core
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/alert/alert.tsx`

- `components/pdf/theme-provider.tsx`

- `lib/resolve-color.ts`

- `lib/pdf-themes/professional.ts`

- `lib/pdf-themes/primitives.ts`

- `types/pdf-themes.ts`

- `types/pdf-components.ts`

**更新导入路径以匹配你的项目配置。**

## 用法

```tsx
import { PdfAlert } from "@/components/pdf/alert";
```

```tsx
<PdfAlert variant="info" title="Info">
  Alert body
</PdfAlert>
```

## API 参考

### PdfAlert

| 属性         | 类型                                          | 默认值  |
| ------------ | --------------------------------------------- | ------- |
| `variant`    | `'info' \| 'success' \| 'warning' \| 'error'` | 'info'  |
| `title`      | `string`                                      | -       |
| `children`   | `ReactNode`                                   | -       |
| `showIcon`   | `boolean`                                     | true    |
| `showBorder` | `boolean`                                     | true    |
