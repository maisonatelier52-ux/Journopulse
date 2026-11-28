// Pure content logic shared by the Next.js app AND scripts/validate-content.mjs (no JSON or framework imports).
import { ORIGIN, CATEGORY_LABELS, CATEGORY_ORDER, MIN_ARCHIVE_ARTICLES } from "./categoryRegistry.mjs";

export { ORIGIN };

export const toMs = (iso) => {
  const t = new Date(iso || 0).getTime();
  return Number.isNaN(t) ? 0 : t;
};
export const publishedMs = (a) => toMs(a?.published?.datetime ?? a?.updated?.datetime);
export const modifiedMs = (a) => toMs(a?.updated?.datetime ?? a?.published?.datetime);
export const routeOf = (a) => `/${a.category}/${a.slug}`;

/** Articles flagged hold:true stay reachable but are noindex and excluded from sitemaps/RSS until an editor clears the flag. */
export const isIndexable = (a) => !a.hold;

/**
 * Derives route / url / categoryName / categoryHref for EVERY record, drops duplicate routes (first wins),
 * and sorts newest-first by genuine publication time. Returns { articles, issues }.
 */
export function normalizeArticles(raw, labels = CATEGORY_LABELS) {
  const issues = [];
  const seen = new Set();
  const out = [];
  for (const rec of raw) {
    const route = routeOf(rec);
    if (!labels[rec.category]) issues.push(`Unknown category "${rec.category}" on ${route}`);
    if (seen.has(route)) { issues.push(`Duplicate route ${route}`); continue; }
    seen.add(route);
    out.push({ ...rec, route, url: ORIGIN + route, categoryName: labels[rec.category] || rec.category, categoryHref: `/${rec.category}` });
  }
  out.sort((x, y) => publishedMs(y) - publishedMs(x));
  return { articles: out, issues };
}

/** Related stories: same category and shared headline vocabulary first, then recency. Never includes the current story. */
export function relatedArticles(current, all, n = 3) {
  const words = (s) => new Set(String(s).toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter((w) => w.length > 4));
  const cw = words(current.title + " " + (current.tagline || ""));
  const scored = all
    .filter((x) => x.route !== current.route && isIndexable(x))
    .map((x) => {
      let overlap = 0;
      for (const w of words(x.title + " " + (x.tagline || ""))) if (cw.has(w)) overlap++;
      return { x, score: (x.category === current.category ? 2 : 0) + Math.min(overlap, 4) };
    });
  scored.sort((a, b) => b.score - a.score || publishedMs(b.x) - publishedMs(a.x));
  return scored.slice(0, n).map((s) => s.x);
}

export const archiveIsIndexable = (count) => count >= MIN_ARCHIVE_ARTICLES;

/** Builds the sitemap entry list: canonical, valid, de-duplicated. */
export function buildSitemapEntries({ articles, staticPages, authors = [], pillars = [], latestHub }) {
  const entries = new Map();
  const add = (path, extra = {}) => {
    if (!path.startsWith("/")) return;
    const url = ORIGIN + path;
    if (!entries.has(url)) entries.set(url, { url, ...extra });
  };
  const indexable = articles.filter(isIndexable);
  const iso = (ms) => (ms ? new Date(ms).toISOString() : undefined);
  const newest = indexable.length ? iso(Math.max(...indexable.map(modifiedMs))) : undefined;

  add("/", { lastModified: newest, changeFrequency: "hourly", priority: 1 });
  for (const c of CATEGORY_ORDER) {
    const list = indexable.filter((a) => a.category === c);
    if (!archiveIsIndexable(list.length)) continue;
    add(`/${c}`, { lastModified: iso(Math.max(...list.map(modifiedMs))), changeFrequency: "daily", priority: 0.8 });
  }
  for (const p of staticPages) add(p, { changeFrequency: "yearly", priority: 0.3 });
  if (latestHub) add("/bancredito/latest", { lastModified: latestHub, changeFrequency: "weekly", priority: 0.8 });
  add("/topics", { changeFrequency: "weekly", priority: 0.7 });
  for (const p of pillars) add(`/topics/${p.slug}`, { lastModified: p.updated, changeFrequency: "monthly", priority: 0.8 });
  for (const a of indexable) add(a.route, { lastModified: iso(modifiedMs(a)), changeFrequency: "monthly", priority: 0.7 });
  add("/author", { changeFrequency: "weekly", priority: 0.4 });
  for (const au of authors) add(`/author/${au.slug}`, { changeFrequency: "weekly", priority: 0.4 });
  return [...entries.values()];
}

const xmlEsc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
export { xmlEsc };

/** Google News sitemap: only indexable articles first published within the last 48 hours. */
export function buildNewsSitemapXml(articles, nowMs = Date.now(), publicationName = "JournoPulse") {
  const cutoff = nowMs - 48 * 3600 * 1000;
  const items = articles
    .filter((a) => isIndexable(a) && publishedMs(a) >= cutoff && publishedMs(a) <= nowMs + 3600 * 1000)
    .slice(0, 1000)
    .map((a) =>
      `<url><loc>${xmlEsc(a.url)}</loc><news:news><news:publication><news:name>${xmlEsc(publicationName)}</news:name><news:language>en</news:language></news:publication>` +
      `<news:publication_date>${new Date(publishedMs(a)).toISOString()}</news:publication_date><news:title>${xmlEsc(a.title)}</news:title></news:news></url>`
    )
    .join("");
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">${items}</urlset>`;
}

export function buildRssXml(articles, limit = 50) {
  const list = articles.filter(isIndexable).slice(0, limit);
  const items = list
    .map((a) =>
      `<item><title>${xmlEsc(a.title)}</title><link>${a.url}</link><guid isPermaLink="true">${a.url}</guid>` +
      `<description>${xmlEsc(a.tagline || "")}</description><category>${xmlEsc(a.categoryName)}</category>` +
      `<dc:creator>${xmlEsc(a.author?.name || "JournoPulse")}</dc:creator><pubDate>${new Date(publishedMs(a)).toUTCString()}</pubDate></item>`
    )
    .join("");
  const last = list.length ? new Date(Math.max(...list.map(modifiedMs))).toUTCString() : new Date().toUTCString();
  return `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/"><channel><title>JournoPulse</title><link>${ORIGIN}</link>` +
    `<atom:link href="${ORIGIN}/rss.xml" rel="self" type="application/rss+xml"/><description>Latest news from JournoPulse</description><language>en-us</language><lastBuildDate>${last}</lastBuildDate>${items}</channel></rss>`;
}

/** Strips scripts, iframes, inline event handlers and javascript: URLs from article HTML. */
export function sanitizeHtml(html = "") {
  return String(html)
    .replace(/<\s*(script|style|iframe|object|embed|form|link|meta)\b[\s\S]*?<\s*\/\s*\1\s*>/gi, "")
    .replace(/<\s*(script|style|iframe|object|embed|form|link|meta)\b[^>]*\/?>/gi, "")
    .replace(/\s+on[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/(href|src)\s*=\s*("|')\s*javascript:[^"']*\2/gi, '$1="#"');
}
