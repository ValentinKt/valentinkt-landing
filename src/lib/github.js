export async function fetchGithubRepos(username, { signal } = {}) {
  const url = new URL(`https://api.github.com/users/${username}/repos`);
  url.searchParams.set("per_page", "100");
  url.searchParams.set("sort", "updated");

  const res = await fetch(url.toString(), {
    signal,
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    const error = new Error(`GitHub API error: ${res.status} ${res.statusText}`);
    error.status = res.status;
    error.body = body;
    throw error;
  }

  const data = await res.json();
  if (!Array.isArray(data)) return [];
  return data;
}

export function normalizeRepos(repos) {
  return repos
    .filter((r) => r && typeof r === "object")
    .filter((r) => !r.fork)
    .filter((r) => !r.archived)
    .filter((r) => !r.disabled)
    .filter((r) => r.visibility !== "private");
}

export function pickFeaturedRepos(repos, { limit = 6 } = {}) {
  const safe = Array.isArray(repos) ? repos : [];
  return [...safe]
    .sort((a, b) => {
      const byStars = (b?.stargazers_count ?? 0) - (a?.stargazers_count ?? 0);
      if (byStars !== 0) return byStars;
      return new Date(b?.pushed_at ?? 0) - new Date(a?.pushed_at ?? 0);
    })
    .slice(0, limit);
}

export function topLanguagesFromRepos(repos, { limit = 6 } = {}) {
  const counts = new Map();
  for (const r of Array.isArray(repos) ? repos : []) {
    if (!r?.language) continue;
    counts.set(r.language, (counts.get(r.language) ?? 0) + 1);
  }

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([name, count]) => ({ name, count }));
}

export function formatRepoUpdatedAt(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("fr-FR", { dateStyle: "medium" }).format(d);
}

