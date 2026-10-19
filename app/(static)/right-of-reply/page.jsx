import StaticShell from "@/components/StaticShell";
import Body from "@/components/generated/static/right-of-reply";
import { metadataFor, JsonLd } from "@/lib/seo";
import "@/styles/static-base.css";

export const metadata = metadataFor("/right-of-reply");

export default function Page() {
  return (
    <StaticShell>
      <JsonLd route="/right-of-reply" />
      <Body />
    </StaticShell>
  );
}
