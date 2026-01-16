import { useEffect, useMemo, useState } from "react";
import RepoCard from "../components/RepoCard";
import { fetchGithubRepos, normalizeRepos } from "../lib/github";

export default function Projects() {
  const username = "ValentinKt";
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("all");

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError("");

    fetchGithubRepos(username, { signal: controller.signal })
      .then((data) => normalizeRepos(data))
      .then((data) => setRepos(data))
      .catch((e) => {
        if (e?.name === "AbortError") return;
        setError("Impossible de charger les repos GitHub pour le moment.");
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [username]);

  const languages = useMemo(() => {
    const set = new Set();
    for (const r of repos) {
      if (r?.language) set.add(r.language);
    }
    return ["all", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [repos]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return [...repos]
      .filter((r) => (language === "all" ? true : r?.language === language))
      .filter((r) => {
        if (!q) return true;
        const hay = `${r?.name ?? ""} ${r?.description ?? ""}`.toLowerCase();
        return hay.includes(q);
      })
      .sort((a, b) => new Date(b?.pushed_at ?? 0) - new Date(a?.pushed_at ?? 0));
  }, [repos, query, language]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-white">Projets</h1>
          <p className="mt-1 text-white/65">Mes repos publics GitHub, filtrables par langage et recherche.</p>
        </div>
        <a
          href="https://github.com/ValentinKt"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-white/5 px-4 py-2.5 text-sm font-medium text-white/85 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
        >
          Voir sur GitHub
        </a>
      </div>

      <div className="mt-8 grid gap-3 md:grid-cols-12">
        <div className="md:col-span-7">
          <label className="text-xs text-white/60" htmlFor="project-search">
            Recherche
          </label>
          <input
            id="project-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Nom, description…"
            className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-0 transition focus:border-emerald-300/30 focus:bg-white/7"
          />
        </div>
        <div className="md:col-span-5">
          <label className="text-xs text-white/60" htmlFor="project-language">
            Langage
          </label>
          <select
            id="project-language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-300/30 focus:bg-white/7"
          >
            {languages.map((l) => (
              <option key={l} value={l} className="bg-ink-950">
                {l === "all" ? "Tous" : l}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error ? (
        <div className="mt-6 rounded-2xl border border-rose-300/20 bg-rose-400/5 p-4 text-sm text-rose-200">
          {error}
        </div>
      ) : null}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="h-[166px] animate-pulse rounded-2xl border border-white/10 bg-white/5"
            />
          ))
        ) : filtered.length ? (
          filtered.map((r) => <RepoCard key={r.id} repo={r} />)
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70 sm:col-span-2 lg:col-span-3">
            Aucun résultat.
          </div>
        )}
      </div>
    </section>
  );
}
