import StaticShell from "@/components/StaticShell";
import Body from "@/components/generated/static/privacy";
import { metadataFor, JsonLd } from "@/lib/seo";
import "@/styles/static-privacy.css";

export const metadata = metadataFor("/privacy");

export default function Page() {
  return (
    <StaticShell>
      <JsonLd route="/privacy" />
      <Body />
    </StaticShell>
  );
}
