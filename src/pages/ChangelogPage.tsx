const entries = [
  {
    date: 'April 26, 2026',
    title: 'Docs navigation, code copy blocks, and changelog surface',
    text: 'The frontend now has dedicated docs routes, reusable code blocks with copy actions, and a fuller product information surface.',
  },
  {
    date: 'April 26, 2026',
    title: 'Vercel Clerk bridge for CLI login',
    text: 'CLI sign-in now redirects to the deployed Vercel frontend and returns to the local runtime through a localhost callback.',
  },
  {
    date: 'April 26, 2026',
    title: 'Dashboard, gateway, sessions, workflows, and connectors',
    text: 'The operator stack now includes a real dashboard surface, runtime orchestration, messaging connectors, and service-oriented launch paths.',
  },
]

export function ChangelogPage() {
  return (
    <div className="bg-black pt-8">
      <section className="border-b border-white/10 px-5 py-24 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">Changelog</div>
          <h1 className="mt-5 max-w-4xl text-4xl font-light tracking-[-0.05em] text-white md:text-6xl">
            Product momentum, captured in public.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-300">
            This page tracks visible improvements to the frontend, auth flow, launcher behavior, dashboard surface, and
            runtime-facing product layers.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl space-y-5">
          {entries.map((entry, index) => (
            <article key={entry.title} className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-7">
              <div className="flex flex-wrap items-center gap-4">
                <div className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">{entry.date}</div>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-[0.8rem] border border-white/12 bg-white/[0.03] text-xs text-white">
                  0{index + 1}
                </span>
              </div>
              <h2 className="mt-5 text-2xl font-medium text-white">{entry.title}</h2>
              <p className="mt-4 text-base leading-8 text-neutral-300">{entry.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
