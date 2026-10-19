import StaticShell from "@/components/StaticShell";
import Body from "@/components/generated/static/advertising-policy";
import { metadataFor, JsonLd } from "@/lib/seo";
import "@/styles/static-base.css";

export const metadata = metadataFor("/advertising-policy");

export default function Page() {
  return (
    <StaticShell>
      <JsonLd route="/advertising-policy" />
      <Body />
    </StaticShell>
  );
}
