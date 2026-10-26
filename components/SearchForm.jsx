"use client";

import { useEffect, useRef, useState } from "react";
import { searchItems } from "@/lib/searchScore";

let indexPromise;
function loadIndex() {
  if (!indexPromise) {
    indexPromise = fetch("/search-index.json")
      .then((r) => (r.ok ? r.json() : []))
      .catch(() => {
        indexPromise = undefined; // allow a retry on the next keystroke
        return [];
      });
  }
  return indexPromise;
}

// Header search: type to see live suggestions, press Enter / click the arrow to open /search?s=...
export default function SearchForm({ inputId }) {
  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const wrap = useRef(null);

  useEffect(() => {
    const term = q.trim();
    if (!term) { setResults([]); return; }
    let live = true;
    loadIndex().then((idx) => { if (live) setResults(searchItems(idx, term, 6)); });
    return () => { live = false; };
  }, [q]);

  useEffect(() => {
    const close = (e) => { if (wrap.current && !wrap.current.contains(e.target)) setOpen(false); };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const go = (e) => {
    const term = q.trim();
    if (!term) { e.preventDefault(); return; }
    // plain GET navigation to /search?s=term (works even before hydration)
  };

  const term = q.trim();
  return (
    <form method="get" action="/search" role="search" className="rb-search-form site-search-form" onSubmit={go} ref={wrap}>
      <div className="search-form-inner">
        <span className="search-icon"><span className="search-icon-svg"></span></span>
        <span className="search-text">
          <input
            id={inputId}
            type="search"
            className="field"
            placeholder="Search Headlines, News..."
            name="s"
            autoComplete="off"
            value={q}
            onChange={(e) => { setQ(e.target.value); setOpen(true); }}
            onFocus={() => setOpen(true)}
            aria-label="Search JournoPulse"
          />
        </span>
        <span className="rb-search-submit">
          <input type="submit" value="Search" aria-label="Search" />
          <i className="rbi rbi-cright" aria-hidden="true"></i>
        </span>
      </div>
      {open && term && (
        <div className="site-search-results" role="listbox">
          {results.length === 0 ? (
            <p className="site-search-empty">No results for “{term}”. Try a different keyword.</p>
          ) : (
            <>
              <ul>
                {results.map((r) => (
                  <li key={r.u}>
                    <a href={r.u}>
                      {r.i ? <img src={r.i} alt="" width="64" height="48" loading="lazy" /> : <span className="site-search-noimg" />}
                      <span className="site-search-text">
                        <b>{r.t}</b>
                        <small>{r.c}{r.dt ? ` · ${r.dt}` : ""}</small>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <a className="site-search-all" href={`/search?s=${encodeURIComponent(term)}`}>See all results for “{term}” →</a>
            </>
          )}
        </div>
      )}
    </form>
  );
}
