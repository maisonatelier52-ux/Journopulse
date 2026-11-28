// Content gate: node scripts/validate-content.mjs   (also runs automatically before `npm run build`)
// Fails (exit 1) on anything that previously caused SEO damage: duplicate routes, legacy/invalid dates, stray AI tokens,
// missing images, stale metadata keys, bad sitemap URLs, redirects that collide with live pages.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { CATEGORY_LABELS, CATEGORY_ORDER, ORIGIN, MIN_ARCHIVE_ARTICLES } from "../lib/categoryRegistry.mjs";
import { normalizeArticles, buildSitemapEntries, buildNewsSitemapXml, buildRssXml, publishedMs, isIndexable } from "../lib/contentCore.mjs";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const read = (p) => JSON.parse(fs.readFileSync(path.join(root, p), "utf8"));
const raw = read("data/articles.json");
const seo = read("data/seo.json");
const pillars = read("data/pillars.json");

const errors = [], warnings = [];
const err = (m) => errors.push(m), warn = (m) => warnings.push(m);

const { articles, issues } = normalizeArticles(raw, CATEGORY_LABELS);
issues.forEach(err);
if (articles.length !== raw.length) err(`${raw.length - articles.length} record(s) dropped as duplicates/invalid`);

const ISO = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;
const BAD_TOKENS = /:contentReference|oaicite|turn\d+(search|view)\d+|REPLACE-WITH|\bundefined\b|\[object Object\]/i;
const STATIC_KEYS = new Set(["/", "/about", "/advertising-policy", "/contact", "/corrections-policy", "/editorial-policy", "/legal", "/our-team", "/ownership", "/privacy", "/right-of-reply", "/source-methodology", "/terms"]);

const slugCount = new Map();
for (const a of articles) {
  const r = a.route;
  for (const k of ["slug", "category", "title", "tagline", "image", "author", "published", "updated", "bodyHtml"]) if (!a[k]) err(`${r}: missing field "${k}"`);
  if (!/^[A-Za-z0-9-]+$/.test(a.slug)) err(`${r}: slug has invalid characters`);
  slugCount.set(a.slug.toLowerCase(), (slugCount.get(a.slug.toLowerCase()) || 0) + 1);

  // dates
  for (const f of ["published", "updated"]) {
    const d = a[f]?.datetime;
    if (!d || !ISO.test(d)) err(`${r}: ${f}.datetime "${d}" is not full ISO-8601 with timezone`);
  }
  if (a.published?.datetime?.startsWith("2021-10-01")) err(`${r}: legacy 2021-10-01 placeholder timestamp`);
  if (publishedMs(a) > Date.now() + 36 * 3600 * 1000) err(`${r}: published date is in the future`);
  if (new Date(a.updated?.datetime) < new Date(a.published?.datetime)) err(`${r}: updated precedes published`);
  const yr = a.published?.datetime?.slice(0, 4);
  if (yr && !String(a.published.text).includes(yr)) err(`${r}: published.text "${a.published.text}" does not show year ${yr}`);

  // content hygiene
  if (BAD_TOKENS.test(a.bodyHtml) || BAD_TOKENS.test(a.title) || BAD_TOKENS.test(a.tagline || "")) err(`${r}: contains placeholder/AI-citation token`);
  if (/<\s*(script|iframe)\b/i.test(a.bodyHtml)) err(`${r}: body contains <script>/<iframe>`);
  if (a.netWorth) warn(`${r}: has netWorth block - make sure it is independently sourced`);
  const words = a.bodyHtml.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  if (words < 150) warn(`${r}: very short (${words} words)`);

  // image
  if (!a.image?.src || !fs.existsSync(path.join(root, "public", a.image.src))) err(`${r}: hero image missing: ${a.image?.src}`);
  else if (a.image.missingOriginal) warn(`${r}: using TEMPORARY hero image - upload the intended illustration`);
  if (a.image && !(a.image.width > 0 && a.image.height > 0)) err(`${r}: hero image has no width/height`);
  if (a.image?.width && a.image.width < 1200) warn(`${r}: hero image only ${a.image.width}px wide (Discover prefers >=1200px)`);

  // author
  if (!a.author?.slug) err(`${r}: author has no slug`);
  if (a.hold) warn(`${r}: HOLD - noindex and excluded from sitemaps until "hold" is removed`);
}
for (const [s, n] of slugCount) if (n > 1) warn(`slug "${s}" is used in ${n} categories`);

// SEO records
const routes = new Set(articles.map((a) => a.route));
for (const [k, v] of Object.entries(seo)) {
  const isCat = CATEGORY_ORDER.includes(k.slice(1));
  if (!routes.has(k) && !STATIC_KEYS.has(k) && !isCat) err(`seo.json: stale key ${k} (no such page)`);
  if (routes.has(k) && v.canonical !== ORIGIN + k) err(`seo.json: canonical mismatch for ${k}`);
  if (BAD_TOKENS.test(JSON.stringify(v))) err(`seo.json: placeholder token in ${k}`);
}
const titles = new Map();
for (const [k, v] of Object.entries(seo)) { if (!v.title) continue; (titles.get(v.title) || titles.set(v.title, []).get(v.title)).push(k); }
for (const [t, ks] of titles) if (ks.length > 1) err(`seo.json: duplicate <title> "${t}" on ${ks.join(", ")}`);
const descs = new Map();
for (const [k, v] of Object.entries(seo)) { const d = v.meta?.description; if (d) (descs.get(d) || descs.set(d, []).get(d)).push(k); }
for (const [d, ks] of descs) if (ks.length > 2) warn(`seo.json: description shared by ${ks.length} pages (${ks.slice(0, 3).join(", ")}...)`);
for (const a of articles) if (!seo[a.route]) warn(`${a.route}: no seo.json entry - metadata is generated automatically from the article`);

// Pillars point at live articles
for (const p of pillars) for (const r of p.related || []) if (!routes.has(r)) err(`pillar ${p.slug}: related route ${r} does not exist`);

// Category archives
for (const c of CATEGORY_ORDER) {
  const n = articles.filter((a) => a.category === c && isIndexable(a)).length;
  if (n === 0) warn(`category /${c} has no articles`);
  else if (n < MIN_ARCHIVE_ARTICLES) warn(`category /${c} has ${n} article(s): served as noindex until it has ${MIN_ARCHIVE_ARTICLES}`);
}

// Sitemap / RSS / news sitemap
const staticPages = [...STATIC_KEYS].filter((k) => k !== "/");
const entries = buildSitemapEntries({ articles, staticPages, authors: [...new Set(articles.map((a) => a.author.slug))].map((slug) => ({ slug })), pillars, latestHub: "2026-10-25" });
const seen = new Set();
for (const e of entries) {
  if (!/^https:\/\/www\.journopulse\.com\/[A-Za-z0-9\-_/%.()]*$/.test(e.url) || /undefined|null/.test(e.url)) err(`sitemap: invalid URL ${e.url}`);
  if (seen.has(e.url)) err(`sitemap: duplicate ${e.url}`);
  seen.add(e.url);
}
for (const a of articles.filter(isIndexable)) if (!seen.has(a.url)) err(`sitemap: missing article ${a.url}`);
if (seen.has(ORIGIN + "/search")) err("sitemap: /search must not be listed");
const rss = buildRssXml(articles, 50);
if (/undefined/.test(rss)) err("rss: contains 'undefined'");
const news = buildNewsSitemapXml(articles, Date.now());
if (/undefined/.test(news)) err("news-sitemap: contains 'undefined'");

// Redirects must not shadow live pages and must land on live pages
try {
  const cfg = (await import(pathToFileURL(path.join(root, "next.config.mjs")).href)).default;
  for (const r of await cfg.redirects()) {
    if (routes.has(r.source)) err(`redirect source ${r.source} is a LIVE article`);
    if (r.destination.startsWith("/") && !r.destination.startsWith("/topics") && !routes.has(r.destination)) err(`redirect destination ${r.destination} is not a live article`);
  }
} catch (e) { warn("could not evaluate next.config.mjs redirects: " + e.message); }

console.log(`Articles: ${articles.length} | indexable: ${articles.filter(isIndexable).length} | sitemap URLs: ${entries.length} | news-sitemap (48h): ${(news.match(/<url>/g) || []).length}`);
warnings.forEach((w) => console.log("  warn  " + w));
errors.forEach((e) => console.log("  ERROR " + e));
console.log(errors.length ? `\nFAILED: ${errors.length} error(s), ${warnings.length} warning(s)` : `\nOK: 0 errors, ${warnings.length} warning(s)`);
process.exit(errors.length ? 1 : 0);
