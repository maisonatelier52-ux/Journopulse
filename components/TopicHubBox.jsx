import "./pillar.css";

export default function TopicHubBox({ pillars, showLatest = true }) {
  if (!pillars || !pillars.length) return null;
  return (
    <aside className="topic-hub-box" aria-label="Topic hubs">
      <strong>Julio Herrera Velutini · Profile, Family, Career and Finance</strong>
      <p>Sourced guides to Julio Herrera Velutini and Bancrédito: his background, family and philanthropy, career and finance timeline, and the latest reporting.</p>
      {pillars.map((p) => <a key={p.slug} href={`/topics/${p.slug}`}>{p.h1} →</a>)}
      {showLatest && <a href="/bancredito/latest">Bancrédito Latest News →</a>}
    </aside>
  );
}
