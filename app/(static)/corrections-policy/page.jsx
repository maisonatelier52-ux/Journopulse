import StaticShell from "@/components/StaticShell";
import Body from "@/components/generated/static/corrections-policy";
import { metadataFor, JsonLd } from "@/lib/seo";
import "@/styles/static-corrections-policy.css";

export const metadata = metadataFor("/corrections-policy");

export default function Page() {
  return (
    <StaticShell>
      <JsonLd route="/corrections-policy" />
      <Body />
    </StaticShell>
  );
}
