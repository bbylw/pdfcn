---
title: "Data Table"
description: "包含列和行的表格数据。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/takumi/data-table
```

### 手动

**安装以下依赖：**

```bash
npm install takumi-pdf @takumi-rs/helpers
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/data-table/data-table.tsx`

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
import { DataTable } from "@/components/pdf/data-table";
```

```tsx
<DataTable
  columns={[{ key: "name", header: "Name" }]}
  data={[{ name: "Widget" }]}
/>
```

### 变体

你可以使用任意 `TableVariant` 来设置表格样式，并使用 `size="compact"` 生成更紧凑的报表。

```tsx
<DataTable columns={columns} data={rows} variant="striped" size="compact" />
```

## API 参考

### DataTable

| 属性      | 类型                                                                                        | 默认值      |
| --------- | ------------------------------------------------------------------------------------------- | ----------- |
| `columns` | `DataTableColumn<T>[]`                                                                      | -           |
| `data`    | `T[]`                                                                                       | -           |
| `variant` | `'line' \| 'grid' \| 'minimal' \| 'striped' \| 'compact' \| 'bordered' \| 'primary-header'` | `'grid'`    |
| `footer`  | `Partial<Record<keyof T, string \| number>>`                                                | -           |
| `stripe`  | `boolean`                                                                                   | `false`     |
| `size`    | `'default' \| 'compact'`                                                                    | `'default'` |
| `noWrap`  | `boolean`                                                                                   | `false`     |
| `style`   | `Style`                                                                                     | -           |

### DataTableColumn

`key` 是行字段的取值访问器，例如 `key: "name"` 会读取 `row.name`。它不是 React 中保留的 `key` prop。

| 属性           | 类型                            | 默认值   |
| -------------- | ------------------------------- | -------- |
| `key`          | `keyof T & string`              | -        |
| `header`       | `string`                        | -        |
| `align`        | `'left' \| 'center' \| 'right'` | `'left'` |
| `width`        | `string \| number`              | -        |
| `render`       | `(value, row) => ReactNode`     | -        |
| `renderFooter` | `(value) => ReactNode`          | -        |
