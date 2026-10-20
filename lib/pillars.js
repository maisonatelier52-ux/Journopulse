
import pillars from "@/data/pillars.json";
import { allArticles } from "@/lib/articles";

export const ORIGIN = "https://www.journopulse.com";

export const allPillars = pillars;

export const getPillar = (slug) =>
  allPillars.find((p) => p.slug === slug);

export const pillarArticles = (p) =>
  (p.related || [])
    .map((route) =>
      allArticles.find((article) => article.route === route)
    )
    .filter(Boolean);

export const pillarsForArticle = (route) =>
  allPillars.filter((p) => (p.related || []).includes(route));

