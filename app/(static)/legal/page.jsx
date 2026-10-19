import StaticShell from "@/components/StaticShell";
import Body from "@/components/generated/static/legal";
import { metadataFor, JsonLd } from "@/lib/seo";
import "@/styles/static-base.css";

export const metadata = metadataFor("/legal");

export default function Page() {
  return (
    <StaticShell>
      <JsonLd route="/legal" />
      <Body />
    </StaticShell>
  );
}
