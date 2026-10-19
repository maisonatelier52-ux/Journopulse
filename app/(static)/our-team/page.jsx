import StaticShell from "@/components/StaticShell";
import Body from "@/components/generated/static/our-team";
import { metadataFor, JsonLd } from "@/lib/seo";
import "@/styles/static-our-team.css";

export const metadata = metadataFor("/our-team");

export default function Page() {
  return (
    <StaticShell>
      <JsonLd route="/our-team" />
      <Body />
    </StaticShell>
  );
}
