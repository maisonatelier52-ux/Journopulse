import StaticShell from "@/components/StaticShell";
import Body from "@/components/generated/static/about";
import { metadataFor, JsonLd } from "@/lib/seo";
import "@/styles/static-base.css";

export const metadata = metadataFor("/about");

export default function Page() {
  return (
    <StaticShell>
      <JsonLd route="/about" />
      <Body />
    </StaticShell>
  );
}
