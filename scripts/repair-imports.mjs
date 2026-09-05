// Repair: restore import lines stripped from inside code fences during MDX->MD transform.
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const SRC = new URL("../.pdfcn-src/content/docs/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const OUT = new URL("../src/content/docs/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (name.endsWith(".mdx")) out.push(p);
  }
  return out;
}

function parseFences(text) {
  // returns array of { lines: [...] } in order; fence = ```lang ... ```
  const lines = text.split(/\r?\n/);
  const fences = [];
  let cur = null;
  for (const line of lines) {
    if (cur === null) {
      const m = line.match(/^```(\w+)?\s*$/);
      if (m) cur = { lang: m[1] || "", lines: [] };
    } else {
      if (/^```\s*$/.test(line)) { fences.push(cur); cur = null; }
      else cur.lines.push(line);
    }
  }
  return fences;
}

function repairFence(origLines, transLines) {
  // walk orig; if trans line matches orig, keep; if orig line is an import missing in trans, insert.
  const out = [];
  let ti = 0;
  let changed = false;
  for (let oi = 0; oi < origLines.length; oi++) {
    const ol = origLines[oi];
    if (ti < transLines.length && transLines[ti] === ol) { out.push(transLines[ti]); ti++; continue; }
    if (/^import\s/.test(ol.trim())) {
      // import line stripped from trans: reinsert at current position if not present anywhere in trans
      if (!transLines.some((l) => l === ol)) { out.push(ol); changed = true; continue; }
      // present later in trans: pull it forward
      const idx = transLines.indexOf(ol, ti);
      if (idx >= 0) { out.push(...transLines.slice(ti, idx + 1)); ti = idx + 1; continue; }
    }
    // mismatch: keep trans line if available
    if (ti < transLines.length) { out.push(transLines[ti]); ti++; }
  }
  if (ti < transLines.length) out.push(...transLines.slice(ti));
  return { lines: out, changed };
}

let repaired = 0;
const problems = [];

for (const origPath of walk(SRC)) {
  const rel = relative(SRC, origPath).replace(/\\/g, "/").replace(/\.mdx$/, ".md").replace(/^\(root\)\//, "");
  const transPath = join(OUT, rel);
  let transText;
  try { transText = readFileSync(transPath, "utf8"); } catch { continue; }
  const origFences = parseFences(readFileSync(origPath, "utf8"));
  const transFences = parseFences(transText);
  if (origFences.length !== transFences.length) {
    problems.push(`${rel}: fence count ${transFences.length} vs orig ${origFences.length}`);
    continue;
  }
  const transLines = transText.split(/\r?\n/);
  // rebuild file replacing fence contents
  const outLines = [];
  let fi = 0, cur = null;
  for (const line of transLines) {
    if (cur === null) {
      if (/^```(\w+)?\s*$/.test(line)) { cur = { lines: [] }; outLines.push(line); continue; }
      outLines.push(line);
    } else {
      if (/^```\s*$/.test(line)) {
        const { lines: fixed, changed } = repairFence(origFences[fi].lines, cur.lines);
        if (changed) repaired++;
        outLines.push(...fixed, line);
        fi++; cur = null;
      } else cur.lines.push(line);
    }
  }
  if (repaired && outLines.join("\n") !== transText) writeFileSync(transPath, outLines.join("\n"), "utf8");
}

console.log(`Repaired ${repaired} fences.`);
problems.forEach((p) => console.log("PROBLEM: " + p));
