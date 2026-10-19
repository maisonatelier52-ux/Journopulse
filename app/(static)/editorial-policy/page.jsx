import StaticShell from "@/components/StaticShell";
import Body from "@/components/generated/static/editorial-policy";
import { metadataFor, JsonLd } from "@/lib/seo";
import "@/styles/static-base.css";

export const metadata = metadataFor("/editorial-policy");

export default function Page() {
  return (
    <StaticShell>
      <JsonLd route="/editorial-policy" />
      <Body />
    </StaticShell>
  );
}
