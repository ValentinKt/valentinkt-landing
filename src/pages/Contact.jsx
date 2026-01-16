export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10">
        <h1 className="text-3xl font-semibold tracking-tight text-white">Contact</h1>
        <p className="mt-3 max-w-2xl text-white/70">
          Pour une collaboration, un bug report ou une idée : GitHub est le canal le plus efficace (issues
          et PR). Je réponds vite quand c’est clair et reproductible.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://github.com/ValentinKt"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400/20 to-teal-400/20 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 shadow-glow transition hover:bg-white/10"
          >
            Ouvrir mon GitHub
          </a>
          <a
            href="https://github.com/ValentinKt?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-white/85 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
          >
            Voir les repos
          </a>
          <a
            href="https://github.com/ValentinKt?tab=stars"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-white/70 transition hover:text-white"
          >
            Mes stars
          </a>
        </div>
      </div>
    </section>
  );
}
