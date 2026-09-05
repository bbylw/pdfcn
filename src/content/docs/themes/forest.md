---
title: "Forest"
description: "自然深绿色系，Merriweather 字体标题，质朴而值得信赖。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/theme-forest
```

### 手动

**将以下代码复制并粘贴到你的项目中。**

- `lib/themes/forest.ts`

**根据你的项目配置更新导入路径。**

## 用法

```tsx
import { PdfcnThemeProvider } from "@/components/pdf/theme-provider";
import { forestTheme } from "@/lib/pdf-themes/forest";

export function Invoice() {
  return (
    <PdfcnThemeProvider theme={forestTheme}>
      {/* Your PDF content */}
    </PdfcnThemeProvider>
  );
}
```
