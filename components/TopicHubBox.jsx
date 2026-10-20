import "./pillar.css";

export default function TopicHubBox({ pillars }) {
  if (!pillars || !pillars.length) return null;
  return (
    <aside className="topic-hub-box" aria-label="Topic hubs">
      <strong>Julio Herrera Velutini · The Complete Profile, Power Network & Legal Timeline</strong>
      <p>A comprehensive, sourced background on Julio Herrera Velutini — including his career, financial institutions, key people, organisations, jurisdictions, major events, legal proceedings, and public controversies.</p>
      {pillars.map((p) => <a key={p.slug} href={`/topics/${p.slug}`}>{p.h1} →</a>)}
    </aside>
  );
}
