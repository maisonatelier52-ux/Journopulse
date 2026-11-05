// Add a new article to the site.
//   node scripts/add-article.mjs new-articles/my-article.json
// - validates the entry and its image
// - adds it to the TOP of data/articles.json (newest first)
// - creates its SEO entry in data/seo.json (title, meta tags, canonical, JSON-LD)
import fs from "node:fs";
import path from "node:path";

const ORIGIN = "https://www.journopulse.com";
const LABELS = { bancredito: "Bancrédito", business: "Business", fashion: "Fashion", politics: "Politics", puertorico: "Puerto Rico", sports: "Sports", technology: "Technology", us: "U.S. News", world: "World" };

const file = process.argv[2];
if (!file) { console.error("Usage: node scripts/add-article.mjs <article.json>"); process.exit(1); }
const a = JSON.parse(fs.readFileSync(file, "utf8"));

for (const k of ["slug", "category", "title", "tagline", "image", "author", "published", "updated", "bodyHtml"]) if (!a[k]) { console.error("Missing field:", k); process.exit(1); }
if (!LABELS[a.category]) { console.error("Unknown category:", a.category, "Use one of:", Object.keys(LABELS).join(", ")); process.exit(1); }
if (!/^[a-z0-9-]+$/.test(a.slug)) { console.error("slug must use lowercase letters, numbers and hyphens only"); process.exit(1); }
if (!fs.existsSync(path.join("public", a.image.src))) { console.error("Image not found:", "public" + a.image.src); process.exit(1); }

const route = `/${a.category}/${a.slug}`;
const url = ORIGIN + route;
const label = LABELS[a.category];
const articlesPath = "data/articles.json";
const seoPath = "data/seo.json";
const articles = JSON.parse(fs.readFileSync(articlesPath, "utf8"));
const seo = JSON.parse(fs.readFileSync(seoPath, "utf8"));

const entry = { ...a, route, categoryName: label, categoryHref: `/${a.category}`, url };
const i = articles.findIndex((x) => x.route === route);
if (i >= 0) articles[i] = entry; else articles.unshift(entry);

const clip = (s, n) => (s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, "") + "…");
const title = clip(a.title, 70);
const desc = clip(a.tagline, 155);
const img = ORIGIN + a.image.src;
const w = Number(a.image.width) || 1536, h = Number(a.image.height) || 1024;
const robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
const base = Object.values(seo)[0];
seo[route] = {
  title,
  meta: {
    description: desc, robots, "googlebot-news": robots,
    "og:site_name": "JournoPulse", "og:locale": "en_US", "og:type": "article",
    "og:title": title, "og:description": desc, "og:url": url, "og:image": img,
    "og:image:width": String(w), "og:image:height": String(h),
    "article:published_time": a.published.datetime, "article:modified_time": a.updated.datetime,
    "article:author": a.author.name, "article:section": label,
    "twitter:card": "summary_large_image", "twitter:title": title, "twitter:description": desc, "twitter:image": img,
    viewport: "width=device-width, initial-scale=1.0",
  },
  canonical: url,
  ld: [{
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "NewsMediaOrganization", "@id": `${ORIGIN}/#organization`, name: "JournoPulse", url: ORIGIN + "/", logo: { "@type": "ImageObject", url: `${ORIGIN}/img/Group8%20(1).svg` }, sameAs: ["https://www.facebook.com/journopulse"] },
      { "@type": "WebSite", "@id": `${ORIGIN}/#website`, url: ORIGIN + "/", name: "JournoPulse", inLanguage: "en-US", publisher: { "@id": `${ORIGIN}/#organization` } },
      { "@type": "NewsArticle", "@id": `${url}#article`, mainEntityOfPage: { "@type": "WebPage", "@id": url }, headline: title, description: desc,
        image: { "@type": "ImageObject", url: img, width: w, height: h },
        datePublished: a.published.datetime, dateModified: a.updated.datetime,
        author: { "@type": "Person", name: a.author.name }, publisher: { "@id": `${ORIGIN}/#organization` },
        isAccessibleForFree: true, inLanguage: "en-US", articleSection: label },
      { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: ORIGIN + "/" },
        { "@type": "ListItem", position: 2, name: label, item: `${ORIGIN}/${a.category}` },
        { "@type": "ListItem", position: 3, name: title } ] },
    ],
  }],
};

fs.writeFileSync(articlesPath, JSON.stringify(articles, null, 1));
fs.writeFileSync(seoPath, JSON.stringify(seo, null, 1));
console.log(`${i >= 0 ? "Updated" : "Added"}: ${route}\nNext: npm run build   (or npm run dev)`);
