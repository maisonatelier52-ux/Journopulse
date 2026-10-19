import pillars from "@/data/pillars.json";
import { allArticles } from "@/lib/articles";

export const allPillars = pillars;
export const getPillar = (slug) => pillars.find((p) => p.slug === slug);
export const pillarArticles = (p) => p.related.map((r) => allArticles.find((a) => a.route === r)).filter(Boolean);
export const pillarsForArticle = (route) => pillars.filter((p) => p.related.includes(route));
export const ORIGIN = "https://www.journopulse.com";
