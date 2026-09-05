---
title: "Table"
description: "底层表格基础组件。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/takumi/table
```

### 手动

**安装以下依赖：**

```bash
npm install takumi-pdf @takumi-rs/helpers
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/table/table.tsx`

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
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text,
} from "@/components/pdf/table";
```

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableCell>
        <Text>Item</Text>
      </TableCell>
    </TableRow>
  </TableHeader>
</Table>
```

### 变体

```tsx
<Table variant="striped" zebraStripe>
  {/* header, body, rows, and cells */}
</Table>
```

## API 参考

### Table

| 属性          | 类型                                                                                        | 默认值   |
| ------------- | ------------------------------------------------------------------------------------------- | -------- |
| `variant`     | `'line' \| 'grid' \| 'minimal' \| 'striped' \| 'compact' \| 'bordered' \| 'primary-header'` | `'line'` |
| `zebraStripe` | `boolean`                                                                                   | `false`  |
| `noWrap`      | `boolean`                                                                                   | `false`  |
| `children`    | `ReactNode`                                                                                 | -        |
| `style`       | `Style`                                                                                     | -        |

### TableRow

| 属性      | 类型                                                                                        | 默认值    |
| --------- | ------------------------------------------------------------------------------------------- | --------- |
| `header`  | `boolean`                                                                                   | `false`   |
| `footer`  | `boolean`                                                                                   | `false`   |
| `stripe`  | `boolean`                                                                                   | `false`   |
| `variant` | `'line' \| 'grid' \| 'minimal' \| 'striped' \| 'compact' \| 'bordered' \| 'primary-header'` | inherited |

### TableCell

| 属性      | 类型                                                                                        | 默认值    |
| --------- | ------------------------------------------------------------------------------------------- | --------- |
| `header`  | `boolean`                                                                                   | `false`   |
| `footer`  | `boolean`                                                                                   | `false`   |
| `align`   | `'left' \| 'center' \| 'right'`                                                             | `'left'`  |
| `width`   | `string \| number`                                                                          | -         |
| `variant` | `'line' \| 'grid' \| 'minimal' \| 'striped' \| 'compact' \| 'bordered' \| 'primary-header'` | inherited |
