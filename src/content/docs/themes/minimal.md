---
title: "Minimal"
description: "Courier 字体标题、锌灰中性色、大量留白。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/theme-minimal
```

### 手动

**将以下代码复制并粘贴到你的项目中。**

- `lib/themes/minimal.ts`

**根据你的项目配置更新导入路径。**

## 用法

```tsx
import { PdfcnThemeProvider } from "@/components/pdf/theme-provider";
import { minimalTheme } from "@/lib/pdf-themes/minimal";

export function Invoice() {
  return (
    <PdfcnThemeProvider theme={minimalTheme}>
      {/* Your PDF content */}
    </PdfcnThemeProvider>
  );
}
```
