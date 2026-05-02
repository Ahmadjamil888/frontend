import { ContentSection, StatementSection } from '../components/MarketingSections'
import { brandPanelStrongClass } from '../components/brandTheme'

const principles = [
  {
    title: 'One control plane',
    text: 'IMOS is built around a gateway and runtime instead of a pile of disconnected automations. Sessions, tools, memory, models, IDEs, apps, and messaging live in one operator loop.',
  },
  {
    title: 'Public surface, private execution',
    text: 'The frontend is a clean public entrypoint. The dashboard and runtime stay authenticated, permission-aware, and operational behind that surface.',
  },
  {
    title: 'Dynamic before static',
    text: 'The product should think, route, and adapt based on current context. Typed tools matter, but they exist to support the runtime rather than replace it across IDE, browser, app, and PC execution.',
  },
]

const timeline = [
  ['Foundation', 'The local-first runtime, gateway status model, sessions, memory, preferences, and typed tool catalog were established as the backbone.'],
  ['Operator UX', 'The CLI, dashboard, IDE handoff, and browser handoff were tightened so the product behaves like one system instead of separate utilities.'],
  ['Launch Layer', 'The product surface now frames a universal runtime that can coordinate models, IDEs, apps, browsers, and machine actions under explicit permissions.'],
]

export function AboutPage() {
  return (
    <div className="bg-black">
      <StatementSection
        eyebrow="About IMOS"
        segments={[
          { text: 'Built to operate AI systems', className: 'font-normal' },
          { text: 'like real software, not demos.', className: 'font-serif italic font-normal' },
        ]}
        body="IMOS exists to turn AI from an isolated chat surface into an operator-grade system. It combines gateway routing, authenticated access, sessions, memory, preferences, tools, workflows, IDE actions, browser control, app access, and messaging into one runtime that can reason and execute with continuity."
      />

      <ContentSection
        eyebrow="Principles"
        title="The product is separated on purpose."
        description="The public frontend explains the product and handles sign-in. The dashboard exposes live state and control. The runtime owns actual execution across services and the local machine. That separation keeps the experience clean without hiding operational truth."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {principles.map((item) => (
            <article key={item.title} className={`${brandPanelStrongClass} p-7`}>
              <h3 className="text-2xl font-light tracking-[-0.04em] text-white">{item.title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-[#DEDBC8]">{item.text}</p>
            </article>
          ))}
        </div>
      </ContentSection>

      <StatementSection
        eyebrow="Why It Matters"
        segments={[
          { text: 'Execution, context, and identity', className: 'font-normal' },
          { text: 'must stay aligned.', className: 'font-serif italic font-normal' },
        ]}
        body="A chat model by itself does not provide deployment, sessions, memory, workflows, browser control, app execution, or machine permissions. IMOS treats that as one product problem instead of separate implementation chores."
      />

      <ContentSection
        eyebrow="Path"
        title="Product momentum, phase by phase."
        description="The system evolved by locking down the runtime first, then tightening the operator surfaces, then shaping the public product layer around the same real execution model."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {timeline.map(([title, text], index) => (
            <article key={title} className={`${brandPanelStrongClass} p-7`}>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-[0.95rem] border border-white/10 bg-white/[0.04] text-sm text-white">
                0{index + 1}
              </div>
              <h3 className="mt-5 text-xl font-medium text-white">{title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-[#DEDBC8]">{text}</p>
            </article>
          ))}
        </div>
      </ContentSection>
    </div>
  )
}
