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
    og.images = [{ url: m["og:image"], width: Number(m["og:image:width"]) || undefined, height: Number(m["og:image:height"]) || undefined }];
  }
  if (og.type === "article") {
    og.publishedTime = m["article:published_time"];
    og.modifiedTime = m["article:modified_time"];
    og.authors = m["article:author"] ? [m["article:author"]] : undefined;
    og.section = m["article:section"];
  }
  const other = {};
  for (const k of ["geo.region", "geo.placename", "ICBM", "googlebot-news"]) if (m[k]) other[k] = m[k];
  return {
    title: s.title,
    description: m.description,
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
      images: m["twitter:image"] ? [m["twitter:image"]] : undefined,
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
