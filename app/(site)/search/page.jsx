import { Suspense } from "react";
import SiteShell from "@/components/SiteShell";
import SearchResults from "@/components/SearchResults";

export const metadata = {
  title: "Search | JournoPulse",
  description: "Search every JournoPulse story, topic guide and Bancrédito update.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.journopulse.com/search" },
};

export default function SearchPage() {
  return (
    <SiteShell>
      <Suspense fallback={<main className="search-page"><h1>Search JournoPulse</h1></main>}>
        <SearchResults />
      </Suspense>
    </SiteShell>
  );
}
