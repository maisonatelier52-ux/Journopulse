export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/search-index.json"] }],
    sitemap: ["https://www.journopulse.com/sitemap.xml", "https://www.journopulse.com/news-sitemap.xml"],
  };
}
