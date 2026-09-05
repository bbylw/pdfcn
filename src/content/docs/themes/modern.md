---
title: "Modern"
description: "全 Helvetica 字体排印，冷调石板中性色，辅以淡雅的紫罗兰点缀。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/theme-modern
```

### 手动

**将以下代码复制并粘贴到你的项目中。**

- `lib/themes/modern.ts`

**根据你的项目配置更新导入路径。**

## 用法

```tsx
import { PdfcnThemeProvider } from "@/components/pdf/theme-provider";
import { modernTheme } from "@/lib/pdf-themes/modern";

export function Invoice() {
  return (
    <PdfcnThemeProvider theme={modernTheme}>
      {/* Your PDF content */}
    </PdfcnThemeProvider>
  );
}
```
