// Transform pdfcn official MDX docs -> clean Markdown for this Astro site.
// Input:  .pdfcn-src/content/docs/**
// Output: src/content/docs/**  (mdx -> md, "(root)" flattened)
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, relative } from "node:path";

const SRC = new URL("../.pdfcn-src/content/docs/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const OUT = new URL("../src/content/docs/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (name.endsWith(".mdx") || name.endsWith(".json")) out.push(p);
  }
  return out;
}

// registry/bases/<base>/... and registry/themes/* — only used to list file titles
function transformMdx(text) {
  const lines = text.split(/\r?\n/);
  const out = [];
  let inTabsList = false;
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // drop import statements (single line)
    if (/^import\s.+\sfrom\s.+;$/.test(line.trim())) continue;

    // self-closing preview components -> drop
    if (/^<(ComponentPreview|ThemePreview|ThemePreviewGrid|ComponentsList)\b/.test(line.trim())) {
      // consume until "/>" in case multiline
      while (!line.trim().endsWith("/>") && i < lines.length - 1) {
        i++;
        line = lines[i];
      }
      continue;
    }

    if (/^<CodeTabs>/.test(line.trim())) continue;
    if (/^<\/CodeTabs>/.test(line.trim())) continue;

    if (/^<TabsList>/.test(line.trim())) { inTabsList = true; continue; }
    if (inTabsList) {
      if (/^<\/TabsList>/.test(line.trim())) inTabsList = false;
      continue;
    }

    const tc = line.trim().match(/^<TabsContent value="(\w+)">$/);
    if (tc) {
      out.push("", tc[1] === "cli" ? "### 命令" : "### 手动", "");
      continue;
    }
    if (/^<\/TabsContent>/.test(line.trim())) continue;

    if (/^<Steps>/.test(line.trim()) || /^<\/Steps>/.test(line.trim())) continue;
    const step = line.trim().match(/^<Step>(.+)<\/Step>$/);
    if (step) { out.push("", `**${step[1]}**`, ""); continue; }

    // multiline <ComponentSource ... /> blocks
    if (/^<ComponentSource\b/.test(line.trim())) {
      let block = line;
      while (!block.trim().endsWith("/>") && i < lines.length - 1) {
        i++;
        block += "\n" + lines[i];
      }
      const title = block.match(/title="([^"]+)"/);
      out.push("", title ? `- \`${title[1]}\`` : `- \`${block}\``, "");
      continue;
    }

    // FeatureCard -> bullet
    const fc = line.trim().match(/^<FeatureCard\b.*title="([^"]*)".*description="([^"]*)".*\/>$/);
    if (fc) { out.push(`- **${fc[1]}**：${fc[2]}`); continue; }

    out.push(line);
  }

  let text2 = out.join("\n");
  // FeatureCard may span multiple lines in some files — handle greedy single-line already; also strip not-prose wrapper divs
  text2 = text2.replace(/^<div className="not-prose[^"]*">\n/gm, "").replace(/^\s*<\/div>\s*$/gm, "");
  // collapse 3+ blank lines
  text2 = text2.replace(/\n{3,}/g, "\n\n");
  return text2.trim() + "\n";
}

// index pages that only had <ComponentsList/> — generate link lists
function generatedIndex(kind) {
  if (kind === "components") {
    let md = "";
    for (const base of ["takumi", "forme"]) {
      md += `## ${base === "takumi" ? "Takumi" : "Forme"}\n\n`;
      const dir = join(OUT, "components", base);
      const names = readdirSync(dir).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
      for (const n of names) md += `- [${n}](/docs/components/${base}/${n})\n`;
      md += "\n";
    }
    return md.trim() + "\n";
  }
  if (kind === "blocks") {
    let md = "";
    for (const base of ["takumi", "forme"]) {
      md += `## ${base === "takumi" ? "Takumi" : "Forme"}\n\n`;
      const dir = join(OUT, "blocks", base);
      const names = readdirSync(dir).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
      for (const n of names) md += `- [${n}](/docs/blocks/${base}/${n})\n`;
      md += "\n";
    }
    return md.trim() + "\n";
  }
  return "";
}

const files = walk(SRC);
const leftovers = [];
const pendingIndexes = [];

for (const file of files) {
  const rel = relative(SRC, file).replace(/\\/g, "/");
  let destRel = rel.replace(/\.mdx$/, ".md").replace(/^\(root\)\//, "");
  const dest = join(OUT, destRel);
  mkdirSync(dirname(dest), { recursive: true });

  if (file.endsWith(".json")) {
    writeFileSync(dest, readFileSync(file, "utf8"));
    continue;
  }

  const raw = readFileSync(file, "utf8");
  let text = transformMdx(raw);

  // generated link lists for index pages whose body became empty
  if (destRel === "components/index.md" || destRel === "blocks/index.md") {
    const body = text.replace(/^---[\s\S]*?---\n/, "").trim();
    if (!body || body.length < 30) {
      const kind = destRel.startsWith("components") ? "components" : "blocks";
      pendingIndexes.push({ text, kind, dest });
      continue;
    }
  }

  writeFileSync(dest, text, "utf8");

  // scan for leftover JSX
  const kept = text.split(/^---$/m).slice(-1)[0];
  kept.split("\n").forEach((l, n) => {
    if (/<\/?[A-Z][A-Za-z]+/.test(l) || /<Component|<Tabs|<Step|<Feature/.test(l)) {
      leftovers.push(`${destRel}:${n}: ${l.trim().slice(0, 100)}`);
    }
  });
}

for (const { text, kind, dest } of pendingIndexes) {
  const out = text.replace(/^---[\s\S]*?---\n/, "") + "\n" + generatedIndex(kind);
  writeFileSync(dest, out.trim() + "\n", "utf8");
  console.log(`Generated index: ${relative(OUT, dest)}`);
}

console.log(`Transformed ${files.length} files.`);
if (leftovers.length) {
  console.log("LEFTOVER JSX LINES:");
  leftovers.forEach((l) => console.log("  " + l));
} else {
  console.log("No leftover JSX.");
}
