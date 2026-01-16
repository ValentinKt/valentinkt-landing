import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaPython, FaReact } from "react-icons/fa";
import { SiKotlin, SiMongodb, SiOpenjdk, SiPostgresql, SiTailwindcss } from "react-icons/si";
import RepoCard from "../components/RepoCard";
import {
  fetchGithubRepos,
  normalizeRepos,
  pickFeaturedRepos,
  topLanguagesFromRepos,
} from "../lib/github";

export default function Home() {
  const username = "ValentinKt";
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  const featured = useMemo(() => pickFeaturedRepos(repos, { limit: 6 }), [repos]);
  const topLanguages = useMemo(() => topLanguagesFromRepos(repos, { limit: 6 }), [repos]);

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Développeur open source
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Je construis des produits{" "}
              <span className="bg-gradient-to-r from-emerald-200 via-teal-200 to-sky-200 bg-clip-text text-transparent">
                rapides, propres et utiles
              </span>
              .
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Python pour l’automatisation et la data, Java/Kotlin pour les applis robustes, React + Tailwind pour des interfaces modernes, SQL/NoSQL pour le stockage, et des outils IA (LangChain/LangGraph) quand ça apporte de la valeur.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/ValentinKt"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400/20 to-teal-400/20 px-4 py-3 text-sm font-medium text-white ring-1 ring-white/10 shadow-glow transition hover:bg-white/10"
              >
                <FaGithub />
                Voir mes repos
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-xl bg-white/5 px-4 py-3 text-sm font-medium text-white/90 ring-1 ring-white/10 transition hover:bg-white/10"
              >
                Explorer les projets
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-medium text-white/70 transition hover:text-white"
              >
                Me contacter
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-sm text-white/70 ring-1 ring-white/10">
                <FaPython className="text-yellow-200" />
                Python
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-sm text-white/70 ring-1 ring-white/10">
                <SiOpenjdk className="text-orange-200" />
                Java
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-sm text-white/70 ring-1 ring-white/10">
                <SiKotlin className="text-violet-200" />
                Kotlin
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-sm text-white/70 ring-1 ring-white/10">
                <FaReact className="text-emerald-200" />
                React
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-sm text-white/70 ring-1 ring-white/10">
                <SiTailwindcss className="text-sky-200" />
                Tailwind
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-sm text-white/70 ring-1 ring-white/10">
                <SiPostgresql className="text-sky-200" />
                SQL
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-sm text-white/70 ring-1 ring-white/10">
                <SiMongodb className="text-emerald-200" />
                NoSQL
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-sm text-white/70 ring-1 ring-white/10">
                IA: LangChain · LangGraph
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm">
              <div className="absolute -left-24 -top-24 h-64 w-64 animate-float rounded-full bg-emerald-400/15 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-64 w-64 animate-float rounded-full bg-teal-400/10 blur-3xl" />

              <div className="relative">
                <p className="text-sm font-medium text-white/80">Focus</p>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <p className="text-sm text-white/70">UI/UX</p>
                    <p className="mt-1 text-base font-semibold text-white">Design system Tailwind, perf et accessibilité</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <p className="text-sm text-white/70">Backend & scripts</p>
                    <p className="mt-1 text-base font-semibold text-white">Automatisation Python, tooling, CI/CD</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <p className="text-sm text-white/70">IA utile</p>
                    <p className="mt-1 text-base font-semibold text-white">Agents et workflows (LangChain/LangGraph)</p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-gradient-to-r from-emerald-400/10 to-teal-400/10 p-4 ring-1 ring-white/10">
                  <p className="text-sm font-medium text-white">Langages principaux</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {loading ? (
                      <>
                        <span className="h-9 w-24 animate-pulse rounded-full bg-white/10" />
                        <span className="h-9 w-28 animate-pulse rounded-full bg-white/10" />
                        <span className="h-9 w-20 animate-pulse rounded-full bg-white/10" />
                      </>
                    ) : topLanguages.length ? (
                      topLanguages.map((l) => (
                        <span
                          key={l.name}
                          className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-sm text-white/75 ring-1 ring-white/10"
                        >
                          {l.name}
                          <span className="text-xs text-white/45">({l.count})</span>
                        </span>
                      ))
                    ) : (
                      <span className="text-sm text-white/60">Aucune donnée.</span>
                    )}
                  </div>
                </div>

                {error ? <p className="mt-4 text-sm text-rose-200/90">{error}</p> : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">Projets sélectionnés</h2>
            <p className="mt-1 text-white/65">
              Sélection automatique basée sur mes repos publics (stars + activité).
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-xl bg-white/5 px-4 py-2.5 text-sm font-medium text-white/85 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
          >
            Voir tout
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-[166px] animate-pulse rounded-2xl border border-white/10 bg-white/5"
              />
            ))
          ) : featured.length ? (
            featured.map((r) => <RepoCard key={r.id} repo={r} />)
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70 sm:col-span-2 lg:col-span-3">
              Aucun repo public trouvé.
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 pb-10 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Une idée, une contribution, une collaboration ?
              </h2>
              <p className="mt-2 max-w-2xl text-white/70">
                Le plus simple : GitHub. Issues, PR, discussions — j’adore itérer vite et proprement.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/ValentinKt"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400/20 to-teal-400/20 px-4 py-3 text-sm font-medium text-white ring-1 ring-white/10 shadow-glow transition hover:bg-white/10"
              >
                <FaGithub className="mr-2" />
                Ouvrir GitHub
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white/5 px-4 py-3 text-sm font-medium text-white/85 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
              >
                Page contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
