---
title: "Elegant"
description: "温润的奶油白，琥珀与金色点缀，经典编辑排版组合。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/theme-elegant
```

### 手动

**将以下代码复制并粘贴到你的项目中。**

- `lib/themes/elegant.ts`

**根据你的项目配置更新导入路径。**

## 用法

```tsx
import { PdfcnThemeProvider } from "@/components/pdf/theme-provider";
import { elegantTheme } from "@/lib/pdf-themes/elegant";

export function Invoice() {
  return (
    <PdfcnThemeProvider theme={elegantTheme}>
      {/* Your PDF content */}
    </PdfcnThemeProvider>
  );
}
```
