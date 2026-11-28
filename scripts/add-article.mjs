// Add (or replace) an article safely.
//   node scripts/add-article.mjs new-articles/my-article.json
// Uses the SAME category registry and rules as the site build (lib/categoryRegistry.mjs, scripts/validate-content.mjs):
//  - rejects unknown categories, bad slugs, duplicate routes (unless the same route is being intentionally updated)
//  - requires full ISO-8601 dates with timezone; refuses placeholder/default dates
//  - reads the real image size from the file, never trusts declared width/height
//  - writes data/articles.json (newest first). SEO metadata is generated from the article at build time; add an entry to
//    data/seo.json only when you need a hand-written title/description.
import fs from "node:fs";
import path from "node:path";
import { CATEGORY_LABELS, ORIGIN } from "../lib/categoryRegistry.mjs";

const fail = (m) => { console.error("✖ " + m); process.exit(1); };
const file = process.argv[2];
if (!file) fail("Usage: node scripts/add-article.mjs <article.json>");
const a = JSON.parse(fs.readFileSync(file, "utf8"));

for (const k of ["slug", "category", "title", "tagline", "image", "author", "published", "updated", "bodyHtml"]) if (!a[k]) fail(`Missing field: ${k}`);
if (!CATEGORY_LABELS[a.category]) fail(`Unknown category "${a.category}". Use one of: ${Object.keys(CATEGORY_LABELS).join(", ")} (add new ones in lib/categoryRegistry.mjs)`);
if (!/^[A-Za-z0-9-]+$/.test(a.slug)) fail("slug must use letters, numbers and hyphens only");
const ISO = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;
for (const f of ["published", "updated"]) if (!ISO.test(a[f].datetime || "")) fail(`${f}.datetime must be full ISO-8601 with timezone, e.g. 2026-11-28T09:30:00-04:00`);
if (a.published.datetime.startsWith("2021-10-01")) fail("published.datetime is the legacy placeholder date - use the real first-publication time");
if (new Date(a.updated.datetime) < new Date(a.published.datetime)) fail("updated is earlier than published");
if (/:contentReference|oaicite|REPLACE-WITH|<script|<iframe/i.test(JSON.stringify(a))) fail("article contains a placeholder/AI-citation token or unsafe HTML");
if (!a.author.slug) fail("author.slug is required");

const imgPath = path.join("public", a.image.src);
if (!fs.existsSync(imgPath)) fail(`Image not found: ${imgPath}`);

function imageSize(buf) {
  if (buf.toString("ascii", 1, 4) === "PNG") return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  if (buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP") {
    const t = buf.toString("ascii", 12, 16);
    if (t === "VP8 ") return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
    if (t === "VP8L") { const b = buf.readUInt32LE(21); return { width: (b & 0x3fff) + 1, height: ((b >> 14) & 0x3fff) + 1 }; }
    if (t === "VP8X") return { width: 1 + buf.readUIntLE(24, 3), height: 1 + buf.readUIntLE(27, 3) };
  }
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i < buf.length) { if (buf[i] !== 0xff) { i++; continue; } const m = buf[i + 1]; if (m >= 0xc0 && m <= 0xc3) return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) }; i += 2 + buf.readUInt16BE(i + 2); }
  }
  return null;
}
const dims = imageSize(fs.readFileSync(imgPath));
if (dims) { a.image.width = dims.width; a.image.height = dims.height; } else console.warn("⚠ could not read image size; set image.width/height by hand");
if (dims && dims.width < 1200) console.warn(`⚠ hero image is ${dims.width}px wide; 1200px+ is recommended for Google Discover`);
if (!a.sources || !a.sources.length) console.warn("⚠ no sources[] given: add the primary documents/outlets this story relies on (name, url, type)");

const route = `/${a.category}/${a.slug}`;
const entry = { ...a, route, url: ORIGIN + route, categoryName: CATEGORY_LABELS[a.category], categoryHref: `/${a.category}` };

const articlesPath = "data/articles.json";
const articles = JSON.parse(fs.readFileSync(articlesPath, "utf8"));
const existing = articles.findIndex((x) => `/${x.category}/${x.slug}` === route);
const sameSlugElsewhere = articles.find((x) => x.slug === a.slug && x.category !== a.category);
if (sameSlugElsewhere) console.warn(`⚠ the slug already exists under /${sameSlugElsewhere.category}/ - consider a different slug`);
if (existing >= 0) articles[existing] = entry; else articles.unshift(entry);
articles.sort((x, y) => new Date(y.published.datetime) - new Date(x.published.datetime));
fs.writeFileSync(articlesPath, JSON.stringify(articles, null, 1));
console.log(`${existing >= 0 ? "Updated" : "Added"}: ${route}\nNext: npm run validate && npm run build`);
