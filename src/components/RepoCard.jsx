import { FaCodeBranch, FaRegStar, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { formatRepoUpdatedAt } from "../lib/github";

const languageColor = {
  JavaScript: "bg-yellow-300/15 text-yellow-200 ring-yellow-300/20",
  TypeScript: "bg-sky-300/15 text-sky-200 ring-sky-300/20",
  Python: "bg-emerald-300/15 text-emerald-200 ring-emerald-300/20",
  HTML: "bg-orange-300/15 text-orange-200 ring-orange-300/20",
  CSS: "bg-indigo-300/15 text-indigo-200 ring-indigo-300/20",
  Shell: "bg-lime-300/15 text-lime-200 ring-lime-300/20",
};

export default function RepoCard({ repo }) {
  const language = repo?.language ?? null;
  const languageClass =
    (language && languageColor[language]) || "bg-white/10 text-white/80 ring-white/15";

  const updatedAt = formatRepoUpdatedAt(repo?.pushed_at);

  return (
    <a
      href={repo?.html_url}
      target="_blank"
      rel="noreferrer"
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm transition hover:border-white/15 hover:bg-white/7"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-emerald-400/10 blur-2xl" />
        <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-teal-400/10 blur-2xl" />
      </div>

      <div className="relative flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-lg font-semibold tracking-tight text-white">
              {repo?.name}
            </h3>
            <span className="inline-flex items-center gap-1 text-xs text-white/50">
              <FaArrowUpRightFromSquare />
            </span>
          </div>
          {repo?.description ? (
            <p className="mt-2 line-clamp-2 text-sm text-white/70">{repo.description}</p>
          ) : (
            <p className="mt-2 line-clamp-2 text-sm text-white/50">Aucune description.</p>
          )}
        </div>
      </div>

      <div className="relative mt-4 flex flex-wrap items-center gap-2">
        {language ? (
          <span
            className={[
              "inline-flex items-center rounded-full px-2.5 py-1 text-xs ring-1",
              languageClass,
            ].join(" ")}
          >
            {language}
          </span>
        ) : null}

        <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/70 ring-1 ring-white/10">
          <FaRegStar />
          {repo?.stargazers_count ?? 0}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/70 ring-1 ring-white/10">
          <FaCodeBranch />
          {repo?.forks_count ?? 0}
        </span>
        {updatedAt ? (
          <span className="ml-auto text-xs text-white/50">Mis à jour {updatedAt}</span>
        ) : null}
      </div>
    </a>
  );
}

