---
title: "Form"
description: "用于 PDF 输入项的带标签表单分组。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/takumi/form
```

### 手动

**安装以下依赖：**

```bash
npm install takumi-pdf @takumi-rs/helpers
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/form/form.tsx`

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
import { PdfForm } from "@/components/pdf/form";
```

```tsx
<PdfForm title="Contact" groups={[{ fields: [{ label: "Email" }] }]} />
```

### 变体

```tsx
<PdfForm
  variant="outlined"
  labelPosition="left"
  groups={[{ title: "Contact", layout: "two-column", fields }]}
/>
```

## API 参考

### PdfForm

| 属性            | 类型                                            | 默认值        |
| --------------- | ----------------------------------------------- | ------------- |
| `title`         | `string`                                        | -             |
| `subtitle`      | `string`                                        | -             |
| `groups`        | `PdfFormGroup[]`                                | -             |
| `variant`       | `'underline' \| 'box' \| 'outlined' \| 'ghost'` | `'underline'` |
| `labelPosition` | `'above' \| 'left'`                             | `'above'`     |
| `noWrap`        | `boolean`                                       | `false`       |
| `style`         | `Style`                                         | -             |

分组支持 `single`、`two-column` 和 `three-column` 布局。
