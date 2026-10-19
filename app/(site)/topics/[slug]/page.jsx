import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import PillarPage from "@/components/PillarPage";
import { allPillars, getPillar, ORIGIN } from "@/lib/pillars";

export const dynamicParams = false;
export const generateStaticParams = () => allPillars.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getPillar(slug);
  if (!p) return {};
  const url = `${ORIGIN}/topics/${p.slug}`;
  return {
    title: p.title,
    description: p.desc,
    alternates: { canonical: url },
    robots: { index: true, follow: true, "max-image-preview": "large" },
    openGraph: { type: "website", siteName: "JournoPulse", title: p.title, description: p.desc, url, images: [{ url: ORIGIN + p.image }] },
    twitter: { card: "summary_large_image", title: p.title, description: p.desc, images: [ORIGIN + p.image] },
  };
}

export default async function TopicPage({ params }) {
  const { slug } = await params;
  const p = getPillar(slug);
  if (!p) notFound();
  return (
    <SiteShell>
      <PillarPage p={p} />
    </SiteShell>
  );
}
