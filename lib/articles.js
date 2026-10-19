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
