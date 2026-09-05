---
title: "Corporate"
description: "蓝灰色调，Lato 无衬线字体，结构严谨且稳重可靠。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/theme-corporate
```

### 手动

**将以下代码复制并粘贴到你的项目中。**

- `lib/themes/corporate.ts`

**根据你的项目配置更新导入路径。**

## 用法

```tsx
import { PdfcnThemeProvider } from "@/components/pdf/theme-provider";
import { corporateTheme } from "@/lib/pdf-themes/corporate";

export function Invoice() {
  return (
    <PdfcnThemeProvider theme={corporateTheme}>
      {/* Your PDF content */}
    </PdfcnThemeProvider>
  );
}
```
