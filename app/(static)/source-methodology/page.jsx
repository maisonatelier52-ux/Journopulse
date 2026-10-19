import StaticShell from "@/components/StaticShell";
import Body from "@/components/generated/static/source-methodology";
import { metadataFor, JsonLd } from "@/lib/seo";
import "@/styles/static-base.css";

export const metadata = metadataFor("/source-methodology");

export default function Page() {
  return (
    <StaticShell>
      <JsonLd route="/source-methodology" />
      <Body />
    </StaticShell>
  );
}
