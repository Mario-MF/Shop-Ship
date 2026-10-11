/**
 * Writes a labelled placeholder SVG for every asset in src/lib/assets.ts that
 * doesn't exist yet in /public. Real exports are never overwritten.
 *
 *   npm run placeholders
 */
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, basename } from "node:path";
import { assets, brandLogos, categoryImages, extraLogos, type Asset } from "../src/lib/assets.ts";

const all: Asset[] = [...Object.values(assets), ...brandLogos, ...categoryImages, ...extraLogos];
const root = join(import.meta.dirname, "..", "public");

let made = 0;
for (const { src, w, h, alt } of all) {
  const file = join(root, src);
  if (existsSync(file)) continue;
  mkdirSync(dirname(file), { recursive: true });
  const label = (alt || basename(src).replace(/\.\w+$/, "")).replace(/&/g, "&amp;");
  const fs = Math.max(7, Math.min(h / 5, (w * 1.7) / Math.max(label.length, 4)));
  writeFileSync(
    file,
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect x="0.5" y="0.5" width="${w - 1}" height="${h - 1}" rx="${Math.min(w, h) / 8}" fill="#f1efec" stroke="#d9d4cd" stroke-dasharray="4 3"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="${fs}" fill="#9a928a">${label}</text>
</svg>
`,
  );
  made++;
}
console.log(`placeholders: wrote ${made}, ${all.length - made} already present`);
