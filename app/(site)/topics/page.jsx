import SiteShell from "@/components/SiteShell";
import { allPillars, ORIGIN } from "@/lib/pillars";

export const metadata = {
  title: "Topics — in-depth guides | JournoPulse",
  description: "In-depth JournoPulse topic hubs: people, organisations, events, places and incidents with timelines and sourced context.",
  alternates: { canonical: ORIGIN + "/topics" },
};

export default function Topics() {
  return (
    <SiteShell>
      <main className="pillar">
        <nav className="pl-crumbs"><a href="/">Home</a><span>/</span><b>Topics</b></nav>
        <header className="pl-index-head"><span className="pl-kicker">Topic hubs</span><h1>In-depth topics</h1><p className="pl-lead">Timelines, key people, organisations, places, events and incidents — all in one place.</p></header>
        <ul className="pl-grid pl-grid-index">
          {allPillars.map((p) => (
            <li key={p.slug} className="pl-ent pl-ent-img">
              <a href={`/topics/${p.slug}`}><img src={p.image} alt={p.h1} loading="lazy" width="600" height="400" /></a>
              <span className="pl-chip">{p.type === "Person" ? "Person" : "Organisation"}</span>
              <h3><a href={`/topics/${p.slug}`}>{p.h1}</a></h3>
              <p>{p.summary}</p>
            </li>
          ))}
        </ul>
      </main>
    </SiteShell>
  );
}
