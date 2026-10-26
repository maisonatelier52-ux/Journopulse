"use client";

import "./pillar.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { searchItems } from "@/lib/searchScore";

export default function SearchResults() {
  const params = useSearchParams();
  const term = (params.get("s") || params.get("q") || "").trim();
  const [state, setState] = useState({ loading: true, items: [] });

  useEffect(() => {
    let live = true;
    setState({ loading: true, items: [] });
    if (!term) { setState({ loading: false, items: [] }); return; }
    fetch("/search-index.json")
      .then((r) => r.json())
      .then((idx) => { if (live) setState({ loading: false, items: searchItems(idx, term, 60) }); })
      .catch(() => { if (live) setState({ loading: false, items: [] }); });
    return () => { live = false; };
  }, [term]);

  return (
    <main className="search-page">
      <nav className="pl-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">Search</span></nav>
      <h1>{term ? <>Search results for “{term}”</> : "Search JournoPulse"}</h1>
      <form method="get" action="/search" className="search-page-form" role="search">
        <input type="search" name="s" defaultValue={term} placeholder="Search headlines, topics, Bancrédito…" aria-label="Search JournoPulse" key={term} />
        <button type="submit">Search</button>
      </form>
      {state.loading && term && <p className="search-page-note">Searching…</p>}
      {!state.loading && term && (
        <p className="search-page-note">{state.items.length ? `${state.items.length} result${state.items.length === 1 ? "" : "s"}` : "No results found. Try a different keyword, or browse the categories in the menu."}</p>
      )}
      {!term && <p className="search-page-note">Type a keyword above to search every JournoPulse story and topic guide.</p>}
      <ul className="search-page-list">
        {state.items.map((r) => (
          <li key={r.u}>
            <a className="search-page-thumb" href={r.u} aria-hidden="true" tabIndex={-1}>
              {r.i ? <img src={r.i} alt="" width="240" height="160" loading="lazy" /> : null}
            </a>
            <div>
              <span className="search-page-cat">{r.k === "topic" ? "Topic guide" : r.c}{r.dt ? ` · ${r.dt}` : ""}</span>
              <h2><a href={r.u}>{r.t}</a></h2>
              <p>{r.d}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
