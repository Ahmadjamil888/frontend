import { brandPanelStrongClass } from '../components/brandTheme'

const principles = [
  {
    title: 'One control plane',
    text: 'CONNECT is built around a gateway and runtime instead of a pile of disconnected automations. Sessions, tools, memory, and messaging live in one operator loop.',
  },
  {
    title: 'Public surface, private execution',
    text: 'The frontend is a clean public entrypoint. The dashboard and runtime stay authenticated and operational behind that surface.',
  },
  {
    title: 'Dynamic before static',
    text: 'The product should think, route, and adapt based on current context. Typed tools matter, but they exist to support the runtime rather than replace it.',
  },
]

const timeline = [
  ['Foundation', 'The local-first runtime, gateway status model, sessions, memory, and typed tool catalog were established as the backbone.'],
  ['Operator UX', 'The CLI, dashboard, and browser handoff were tightened so the product behaves like one system instead of separate utilities.'],
  ['Launch Layer', 'The Vercel frontend, Clerk-auth bridge, docs surface, and production-style site structure now frame the runtime like an actual product.'],
]

export function AboutPage() {
  return (
    <div className="pt-6 md:pt-10">
      <section className="border-b border-white/8 px-5 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">About CONNECT</div>
            <h1 className="mt-5 text-4xl font-light tracking-[-0.05em] text-white md:text-6xl">
              Built to operate AI systems like real software, not demos.
            </h1>
          </div>
          <div className="space-y-6 text-[15px] leading-7 text-neutral-400">
            <p>
              CONNECT exists to turn AI from an isolated chat surface into an operator-grade system. It combines gateway
              routing, authenticated access, sessions, memory, tools, workflows, and messaging into one runtime that can
              reason and execute with continuity.
            </p>
            <p>
              The product is intentionally split into layers. The public frontend explains the product and handles sign-in.
              The dashboard exposes live state and control. The runtime owns actual execution. That separation keeps the
              experience clean without hiding operational truth.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 px-5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((item, index) => (
              <article key={item.title} className={`${brandPanelStrongClass} p-7`}>
                <div className="flex items-center gap-3">
                  <span className={`h-2.5 w-2.5 rounded-full ${index === 0 ? 'bg-white' : 'bg-white/40'}`} />
                  <h2 className="text-2xl font-light tracking-[-0.04em] text-white">{item.title}</h2>
                </div>
                <p className="mt-4 text-[15px] leading-7 text-neutral-400">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 px-5 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">Why it matters</div>
            <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] text-white md:text-5xl">
              AI systems fail when execution, context, and identity do not stay aligned.
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              'A chat model by itself does not provide deployment, sessions, memory, workflows, or channel delivery.',
              'A tool stack by itself does not provide coherent reasoning or operator-visible state.',
              'A public frontend by itself does not make the runtime safer, more controllable, or more launchable.',
              'CONNECT treats those as one product problem instead of separate implementation chores.',
            ].map((text) => (
              <div key={text} className={`${brandPanelStrongClass} p-6 text-[15px] leading-7 text-neutral-300`}>
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">Path</div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {timeline.map(([title, text], index) => (
              <article key={title} className={`${brandPanelStrongClass} p-7`}>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-[0.95rem] border border-white/10 bg-white/[0.04] text-sm text-white">
                  0{index + 1}
                </div>
                <h3 className="mt-5 text-xl font-medium text-white">{title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-neutral-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
