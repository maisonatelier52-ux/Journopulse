import SiteShell from "@/components/SiteShell";
import HomeMain from "@/components/generated/HomeMain";
import { metadataFor, JsonLd } from "@/lib/seo";

export const metadata = metadataFor("/");

export default function HomePage() {
  return (
    <SiteShell home topFooter>
      <JsonLd route="/" />
      <main className="site-wrap">
        <HomeMain />
      </main>
    </SiteShell>
  );
}
