import StaticShell from "@/components/StaticShell";
import Body from "@/components/generated/static/terms";
import { metadataFor, JsonLd } from "@/lib/seo";
import "@/styles/static-base.css";

export const metadata = metadataFor("/terms");

export default function Page() {
  return (
    <StaticShell>
      <JsonLd route="/terms" />
      <Body />
    </StaticShell>
  );
}
