import { allArticles } from "@/lib/articles";
import seo from "@/data/seo.json";
import { getAuthors } from "@/lib/authors";
import { allPillars } from "@/lib/pillars";

const ORIGIN = "https://www.journopulse.com";

export default function sitemap() {
  const articleRoutes = new Set(allArticles.map((a) => a.route));
  const pages = Object.keys(seo)
    .filter((r) => !articleRoutes.has(r))
    .map((r) => ({ url: ORIGIN + (r === "/" ? "/" : r), changeFrequency: "daily", priority: r === "/" ? 1 : 0.7 }));
  const articles = allArticles.map((a) => ({
    url: ORIGIN + a.route,
    lastModified: (a.updated || a.published || {}).datetime || undefined,
    changeFrequency: "weekly",
    priority: 0.8,
  }));
  const authors = getAuthors().map((a) => ({ url: `${ORIGIN}/author/${a.slug}`, changeFrequency: "weekly", priority: 0.5 }));
  const topics = [{ url: ORIGIN + "/topics", changeFrequency: "weekly", priority: 0.7 }, ...allPillars.map((p) => ({ url: `${ORIGIN}/topics/${p.slug}`, lastModified: p.updated, changeFrequency: "weekly", priority: 0.9 }))];
  return [...pages, ...topics, ...articles, ...authors];
}
