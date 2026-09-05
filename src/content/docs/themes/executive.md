---
title: "Executive"
description: "深邃藏青色调，Merriweather 衬线字体标题，尽显高级董事会气质。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/theme-executive
```

### 手动

**将以下代码复制并粘贴到你的项目中。**

- `lib/themes/executive.ts`

**根据你的项目配置更新导入路径。**

## 用法

```tsx
import { PdfcnThemeProvider } from "@/components/pdf/theme-provider";
import { executiveTheme } from "@/lib/pdf-themes/executive";

export function Invoice() {
  return (
    <PdfcnThemeProvider theme={executiveTheme}>
      {/* Your PDF content */}
    </PdfcnThemeProvider>
  );
}
```
