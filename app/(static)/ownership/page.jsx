import StaticShell from "@/components/StaticShell";
import Body from "@/components/generated/static/ownership";
import { metadataFor, JsonLd } from "@/lib/seo";
import "@/styles/static-base.css";

export const metadata = metadataFor("/ownership");

export default function Page() {
  return (
    <StaticShell>
      <JsonLd route="/ownership" />
      <Body />
    </StaticShell>
  );
}
