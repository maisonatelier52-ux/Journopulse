import { buildSearchIndex } from "@/lib/search";

export const dynamic = "force-static";

export function GET() {
  return new Response(JSON.stringify(buildSearchIndex()), {
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "public, max-age=3600, s-maxage=3600" },
  });
}
