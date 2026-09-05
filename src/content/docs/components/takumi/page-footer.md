---
title: "Page Footer"
description: "每页重复出现的页脚。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/takumi/page-footer
```

### 手动

**安装以下依赖：**

```bash
npm install takumi-pdf @takumi-rs/helpers
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/page-footer/page-footer.tsx`

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
import { PageFooter } from "@/components/pdf/page-footer";
```

```tsx
<PageFooter leftText="pdfcn" rightText="Confidential" />
```

## API 参考

### PageFooter

| 属性          | 类型                                                                               | 默认值     |
| ------------- | ---------------------------------------------------------------------------------- | ---------- |
| `leftText`    | `string`                                                                           | -          |
| `rightText`   | `string`                                                                           | -          |
| `centerText`  | `string`                                                                           | -          |
| `variant`     | `'simple' \| 'centered' \| 'branded' \| 'minimal' \| 'three-column' \| 'detailed'` | `'simple'` |
| `background`  | `string`                                                                           | -          |
| `textColor`   | `string`                                                                           | -          |
| `marginTop`   | `number`                                                                           | -          |
| `address`     | `string`                                                                           | -          |
| `phone`       | `string`                                                                           | -          |
| `email`       | `string`                                                                           | -          |
| `website`     | `string`                                                                           | -          |
| `fixed`       | `boolean`                                                                          | `false`    |
| `sticky`      | `boolean`                                                                          | `false`    |
| `pagePadding` | `number`                                                                           | `0`        |
| `noWrap`      | `boolean`                                                                          | `true`     |
