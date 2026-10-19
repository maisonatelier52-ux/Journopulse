import StaticShell from "@/components/StaticShell";
import Body from "@/components/generated/static/contact";
import { metadataFor, JsonLd } from "@/lib/seo";
import "@/styles/static-contact.css";

export const metadata = metadataFor("/contact");

export default function Page() {
  return (
    <StaticShell>
      <JsonLd route="/contact" />
      <Body />
    </StaticShell>
  );
}
