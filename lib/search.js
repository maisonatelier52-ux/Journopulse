import { allArticles } from "@/lib/articles";
import { allPillars } from "@/lib/pillars";
import { CATEGORY_LABELS } from "@/lib/categories";

const strip = (html) => (html || "").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();

// Compact, serialisable index served from /search-index.json
export function buildSearchIndex() {
  const articles = allArticles.map((a) => ({
    t: a.title,
    d: a.tagline || "",
    c: CATEGORY_LABELS[a.category] || a.category,
    u: a.route,
    i: a.image && a.image.src,
    dt: ((a.updated || a.published || {}).datetime || "").slice(0, 10),
    k: "article",
    b: strip(a.bodyHtml).slice(0, 1800),
  }));
  const topics = allPillars.map((p) => ({
    t: p.h1,
    d: p.desc || p.summary || "",
    c: "Topic",
    u: `/topics/${p.slug}`,
    i: p.image,
    dt: p.updated || "",
    k: "topic",
    b: [p.summary, ...(p.sections || []).map((s) => s.body)].join(" ").slice(0, 1800),
  }));
  const latest = {
    t: "Bancrédito Latest News",
    d: "The latest Bancrédito and Julio Herrera Velutini news, timeline and background in one place.",
    c: "Bancrédito",
    u: "/bancredito/latest",
    i: "/img/illustrations/bancreditointernationalbank.webp",
    dt: "2026-10-24",
    k: "topic",
    b: "Bancredito latest news FinCEN penalty liquidation Herrera Velutini pardon timeline",
  };
  return [...articles, latest, ...topics];
}
