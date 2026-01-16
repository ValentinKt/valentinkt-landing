export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h1 className="text-3xl font-semibold tracking-tight text-white">À propos</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Je crée des outils et des interfaces qui vont droit au but : ergonomie, performance et code
            maintenable. J’aime contribuer à l’open source et apprendre en construisant.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/60">Ce que je fais</p>
              <p className="mt-2 text-base font-semibold text-white">Apps web, tooling, automatisation</p>
              <p className="mt-2 text-sm text-white/70">
                Python pour les scripts et la data, React/Tailwind pour le front.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/60">Ce que j’optimise</p>
              <p className="mt-2 text-base font-semibold text-white">DX, clarté, qualité</p>
              <p className="mt-2 text-sm text-white/70">
                Petites abstractions, tests ciblés, composants réutilisables.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-400/10 via-white/5 to-teal-400/10 p-6">
            <p className="text-sm font-medium text-white">Stack & intérêts</p>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                Python · tooling · automation
              </li>
              <li className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                Java · Kotlin · backend
              </li>
              <li className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                React · Tailwind · UI systems
              </li>
              <li className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                SQL · NoSQL · data
              </li>
              <li className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">IA appliquée · LangChain · LangGraph</li>
              <li className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">Open source · collaboration GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
