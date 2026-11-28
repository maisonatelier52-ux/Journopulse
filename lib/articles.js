import rawArticles from "@/data/articles.json";
import { CATEGORY_LABELS } from "@/lib/categoryRegistry.mjs";
import { normalizeArticles, publishedMs, isIndexable } from "@/lib/contentCore.mjs";

// Every record gets route/url/categoryName/categoryHref derived here, duplicates are dropped,
// and the list is sorted newest-first by genuine publication time.
const { articles } = normalizeArticles(rawArticles, CATEGORY_LABELS);

export const allArticles = articles; // newest first
export const categoryInfo = CATEGORY_LABELS;

export function getArticle(category, slug) {
  return articles.find((a) => a.category === category && a.slug === slug);
}

export function articlesByCategory(category) {
  return articles.filter((a) => a.category === category); // already newest first
}

export function latestArticles(limit = 6, category) {
  const list = (category ? articlesByCategory(category) : articles).filter(isIndexable);
  return [...list].sort((a, b) => publishedMs(b) - publishedMs(a)).slice(0, limit);
}
