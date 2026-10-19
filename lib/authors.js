import { allArticles } from "@/lib/articles";

export const CATEGORY_LABELS = {
  bancredito: "Bancredito", business: "Business", fashion: "Fashion", politics: "Politics",
  puertorico: "Puerto Rico", sports: "Sports", technology: "Technology", us: "U.S News", world: "World",
};

const BIOS = {
  "ryan-sillers":
    "Ryan Sillers covers breaking news, politics, business, and major global developments for JournoPulse. Known for clear, fact-driven reporting, he focuses on delivering timely news and meaningful context that helps readers understand the stories shaping the world today.",
};

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function getAuthors() {
  const map = new Map();
  for (const a of allArticles) {
    const slug = a.author.slug || slugify(a.author.name);
    if (!map.has(slug)) map.set(slug, { slug, name: a.author.name, job: a.author.job, avatar: a.author.avatar, bio: BIOS[slug] || "", articles: [] });
    map.get(slug).articles.push(a);
  }
  return [...map.values()];
}

export function getAuthor(slug) {
  return getAuthors().find((x) => x.slug === slug);
}

export function formatDate(a) {
  const iso = (a.updated || a.published || {}).datetime;
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "2-digit", year: "numeric", timeZone: "UTC" });
}
