import seo from "@/data/seo.json";
import { allArticles, articlesByCategory } from "@/lib/articles";
import { ORIGIN, MIN_ARCHIVE_ARTICLES, CATEGORY_LABELS } from "@/lib/categoryRegistry.mjs";
import { isIndexable } from "@/lib/contentCore.mjs";

const LOGO = `${ORIGIN}/img/Group8%20(1).svg`;
const ROBOTS_INDEX = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
const ROBOTS_HOLD = "noindex, follow";

const clip = (s = "", n) => (s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, "") + "…");
const clone = (o) => JSON.parse(JSON.stringify(o));
const byRoute = new Map(allArticles.map((a) => [a.route, a]));

function* ldNodes(ld) {
  for (const blk of ld || []) for (const n of blk["@graph"] || [blk]) yield n;
}

/** Builds a complete SEO record for an article that has none in data/seo.json. */
function generateArticleEntry(a) {
  const title = a.metaTitle || clip(a.title, 70);
  const desc = a.metaDescription || clip(a.tagline || "", 155);
  const img = ORIGIN + a.image.src;
  const w = a.image.width || undefined, h = a.image.height || undefined;
  const author = { "@type": "Person", name: a.author.name, url: `${ORIGIN}/author/${a.author.slug}` };
  return {
    title,
    canonical: a.url,
    meta: {
      description: desc,
      robots: ROBOTS_INDEX,
      "og:site_name": "JournoPulse", "og:locale": "en_US", "og:type": "article",
      "og:title": title, "og:description": desc, "og:url": a.url,
      "og:image": img, "og:image:width": String(w || ""), "og:image:height": String(h || ""), "og:image:alt": a.image.alt || a.title,
      "article:published_time": a.published.datetime, "article:modified_time": a.updated.datetime,
      "article:author": a.author.name, "article:author:url": `${ORIGIN}/author/${a.author.slug}`, "article:section": a.categoryName,
      "twitter:card": "summary_large_image", "twitter:title": title, "twitter:description": desc, "twitter:image": img, "twitter:image:alt": a.image.alt || a.title,
    },
    ld: [{
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "NewsArticle", "@id": `${a.url}#article`, mainEntityOfPage: { "@type": "WebPage", "@id": a.url }, headline: clip(a.title, 110), description: desc,
          image: { "@type": "ImageObject", url: img, width: w, height: h }, datePublished: a.published.datetime, dateModified: a.updated.datetime,
          author, publisher: { "@type": "NewsMediaOrganization", name: "JournoPulse", url: ORIGIN + "/", logo: { "@type": "ImageObject", url: LOGO } },
          isAccessibleForFree: true, inLanguage: "en-US", articleSection: a.categoryName },
        { "@type": "BreadcrumbList", "@id": `${a.url}#breadcrumb`, itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: ORIGIN + "/" },
          { "@type": "ListItem", position: 2, name: a.categoryName, item: `${ORIGIN}/${a.category}` },
          { "@type": "ListItem", position: 3, name: a.title } ] },
      ],
    }],
  };
}

/** Returns the SEO record for a route, forced to agree with the article record (dates, canonical, image size, author). */
export function seoFor(route) {
  const a = byRoute.get(route);
  if (!a) return seo[route] ? clone(seo[route]) : undefined;
  const s = seo[route] ? clone(seo[route]) : generateArticleEntry(a);
  const m = s.meta;
  s.canonical = a.url;
  m["og:url"] = a.url;
  m["article:published_time"] = a.published.datetime;
  m["article:modified_time"] = a.updated.datetime;
  m["article:author"] = a.author.name;
  m["article:author:url"] = `${ORIGIN}/author/${a.author.slug}`;
  m["article:section"] = a.categoryName;
  if (m["og:image"] === ORIGIN + a.image.src) {
    m["og:image:width"] = String(a.image.width || m["og:image:width"] || "");
    m["og:image:height"] = String(a.image.height || m["og:image:height"] || "");
  }
  if (a.hold) { m.robots = ROBOTS_HOLD; delete m["googlebot-news"]; }
  for (const n of ldNodes(s.ld)) {
    if (n["@type"] === "NewsArticle") {
      n.datePublished = a.published.datetime;
      n.dateModified = a.updated.datetime;
      n.mainEntityOfPage = { "@type": "WebPage", "@id": a.url };
      n.author = { "@type": "Person", name: a.author.name, url: `${ORIGIN}/author/${a.author.slug}` };
      if (n.image && typeof n.image === "object" && !Array.isArray(n.image) && n.image.url === ORIGIN + a.image.src) {
        n.image.width = a.image.width; n.image.height = a.image.height;
      }
    }
    if (n["@type"] === "BreadcrumbList") {
      n.itemListElement = [
        { "@type": "ListItem", position: 1, name: "Home", item: ORIGIN + "/" },
        { "@type": "ListItem", position: 2, name: a.categoryName, item: `${ORIGIN}/${a.category}` },
        { "@type": "ListItem", position: 3, name: a.title },
      ];
    }
  }
  return s;
}

export function metadataFor(route) {
  const s = seoFor(route);
  if (!s) return {};
  const m = s.meta;

  const og = { siteName: m["og:site_name"], locale: m["og:locale"], type: m["og:type"] || "website", title: m["og:title"], description: m["og:description"], url: m["og:url"] };
  if (m["og:image"]) {
    og.images = [{ url: m["og:image"], width: Number(m["og:image:width"]) || undefined, height: Number(m["og:image:height"]) || undefined, alt: m["og:image:alt"] || undefined }];
  }
  if (og.type === "article") {
    og.publishedTime = m["article:published_time"];
    og.modifiedTime = m["article:modified_time"];
    og.authors = m["article:author"] ? [m["article:author"]] : undefined;
    og.section = m["article:section"];
    og.tags = m["article:tag"] ? m["article:tag"].split(",").map((t) => t.trim()).filter(Boolean) : undefined;
  }

  const other = {};
  for (const k of ["geo.region", "geo.placename", "ICBM", "googlebot-news"]) if (m[k]) other[k] = m[k];

  const authors = m["article:author"] ? [{ name: m["article:author"], url: m["article:author:url"] || undefined }] : undefined;

  // Thin category archives stay out of the index until they have enough stories.
  let robots = m.robots;
  const cat = route.slice(1);
  if (CATEGORY_LABELS[cat] && articlesByCategory(cat).filter(isIndexable).length < MIN_ARCHIVE_ARTICLES) robots = ROBOTS_HOLD;

  return {
    title: s.title,
    description: m.description,
    authors,
    robots,
    // English-only site: no hreflang alternates are needed (a self-referencing en-US/x-default adds nothing).
    alternates: { canonical: s.canonical, types: { "application/rss+xml": ORIGIN + "/rss.xml" } },
    openGraph: og,
    twitter: {
      card: m["twitter:card"] || "summary_large_image",
      title: m["twitter:title"],
      description: m["twitter:description"],
      images: m["twitter:image"] ? [{ url: m["twitter:image"], alt: m["twitter:image:alt"] || undefined }] : undefined,
    },
    other,
  };
}

export function JsonLd({ route }) {
  const s = seoFor(route);
  if (!s || !s.ld) return null;
  return s.ld.map((item, i) => (
    <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }} />
  ));
}
