import { allArticles } from "@/lib/articles";

const ORIGIN = "https://www.journopulse.com";
const esc = (s = "") => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const dynamic = "force-static";

export function GET() {
  const items = allArticles
    .map((a) => {
      const d = (a.published || a.updated || {}).datetime;
      return `<item><title>${esc(a.title)}</title><link>${ORIGIN}${a.route}</link><guid>${ORIGIN}${a.route}</guid>` +
        `<description>${esc(a.tagline)}</description><category>${esc(a.categoryName)}</category>` +
        (d ? `<pubDate>${new Date(d).toUTCString()}</pubDate>` : "") + `</item>`;
    })
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>JournoPulse</title><link>${ORIGIN}</link>` +
    `<description>Latest news from JournoPulse</description>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
