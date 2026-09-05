---
title: "Page Header"
description: "重复出现的页眉。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/forme/page-header
```

### 手动

**安装以下依赖：**

```bash
npm install @formepdf/react @formepdf/core
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/page-header/page-header.tsx`

- `components/pdf/theme-provider.tsx`

- `lib/resolve-color.ts`

- `lib/pdf-themes/professional.ts`

- `lib/pdf-themes/primitives.ts`

- `types/pdf-themes.ts`

- `types/pdf-components.ts`

**更新导入路径以匹配你的项目配置。**

## 用法

```tsx
import { PageHeader } from "@/components/pdf/page-header";
```

```tsx
<PageHeader title="Company" subtitle="Invoice" />
```

## API 参考

### PageHeader

| 属性           | 类型                                                                                              | 默认值   |
| -------------- | ------------------------------------------------------------------------------------------------- | -------- |
| `title`        | `string`                                                                                          | -        |
| `subtitle`     | `string`                                                                                          | -        |
| `rightText`    | `string`                                                                                          | -        |
| `rightSubText` | `string`                                                                                          | -        |
| `variant`      | `'simple' \| 'centered' \| 'minimal' \| 'branded' \| 'logo-left' \| 'logo-right' \| 'two-column'` | 'simple' |
| `background`   | `string`                                                                                          | -        |
| `titleColor`   | `string`                                                                                          | -        |
| `marginBottom` | `number`                                                                                          | -        |
| `address`      | `string`                                                                                          | -        |
| `phone`        | `string`                                                                                          | -        |
| `email`        | `string`                                                                                          | -        |
| `logo`         | `ReactNode`                                                                                       | -        |
| `fixed`        | `boolean`                                                                                         | false    |
| `noWrap`       | `boolean`                                                                                         | true     |
