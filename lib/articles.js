import articles from "@/data/articles.json";
import categories from "@/data/categories.json";

export const allArticles = articles; // newest first
export const categoryInfo = categories;

export function getArticle(category, slug) {
  return articles.find((a) => a.category === category && a.slug === slug);
}

export function articlesByCategory(category) {
  return articles.filter((a) => a.category === category);
}

function timeOf(a) {
  const t = new Date(a?.published?.datetime ?? a?.updated?.datetime ?? 0).getTime();
  return Number.isNaN(t) ? 0 : t;
}

export function latestArticles(limit = 6, category) {
  const list = category ? articlesByCategory(category) : articles;
  return [...list].sort((a, b) => timeOf(b) - timeOf(a)).slice(0, limit);
}