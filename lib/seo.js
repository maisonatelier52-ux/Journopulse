import seo from "@/data/seo.json";

const ORIGIN = "https://www.journopulse.com";

export function metadataFor(route) {
  const s = seo[route];
  if (!s) return {};
  const m = s.meta;

  const og = {
    siteName: m["og:site_name"],
    locale: m["og:locale"],
    type: m["og:type"] || "website",
    title: m["og:title"],
    description: m["og:description"],
    url: m["og:url"],
  };
  if (m["og:image"]) {
    og.images = [
      {
        url: m["og:image"],
        width: Number(m["og:image:width"]) || undefined,
        height: Number(m["og:image:height"]) || undefined,
        alt: m["og:image:alt"] || undefined, // NEW
      },
    ];
  }
  if (og.type === "article") {
    og.publishedTime = m["article:published_time"];
    og.modifiedTime = m["article:modified_time"];
    og.authors = m["article:author"] ? [m["article:author"]] : undefined;
    og.section = m["article:section"];
    // NEW: article:tag
    og.tags = m["article:tag"]
      ? m["article:tag"].split(",").map((t) => t.trim()).filter(Boolean)
      : undefined;
  }

  const other = {};
  for (const k of ["geo.region", "geo.placename", "ICBM", "googlebot-news"]) {
    if (m[k]) other[k] = m[k];
  }

  // NEW: author as a linked object (optional, only if the JSON provides it)
  const authors = m["article:author"]
    ? [{ name: m["article:author"], url: m["article:author:url"] || undefined }]
    : undefined;

  return {
    title: s.title,
    description: m.description,
    keywords: m.keywords || undefined, // NEW
    authors, // NEW
    robots: m.robots,
    alternates: {
      canonical: s.canonical,
      languages: { "en-US": s.canonical, "x-default": s.canonical },
      types: { "application/rss+xml": ORIGIN + "/rss.xml" },
    },
    openGraph: og,
    twitter: {
      card: m["twitter:card"] || "summary_large_image",
      title: m["twitter:title"],
      description: m["twitter:description"],
      images: m["twitter:image"]
        ? [{ url: m["twitter:image"], alt: m["twitter:image:alt"] || undefined }] // NEW
        : undefined,
    },
    other,
  };
}

export function JsonLd({ route }) {
  const s = seo[route];
  if (!s || !s.ld) return null;
  return s.ld.map((item, i) => (
    <script
      key={i}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
    />
  ));
}