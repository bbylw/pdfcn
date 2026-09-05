---
title: "Keep Together"
description: "使子元素保持在同一 PDF 页面上。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/forme/keep-together
```

### 手动

**安装以下依赖：**

```bash
npm install @formepdf/react @formepdf/core
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/keep-together/keep-together.tsx`

- `components/pdf/theme-provider.tsx`

- `lib/resolve-color.ts`

- `lib/pdf-themes/professional.ts`

- `lib/pdf-themes/primitives.ts`

- `types/pdf-themes.ts`

- `types/pdf-components.ts`

**更新导入路径以匹配你的项目配置。**

## 用法

```tsx
import { KeepTogether } from "@/components/pdf/keep-together";
import { Text } from "@/components/pdf/text";
```

```tsx
<KeepTogether>
  <Text>Keep these lines together.</Text>
</KeepTogether>
```

## API 参考

### KeepTogether

| 属性               | 类型        | 默认值  |
| ------------------ | ----------- | ------- |
| `children`         | `ReactNode` | -       |
| `minPresenceAhead` | `number`    | -       |
| `style`            | `Style`     | -       |
