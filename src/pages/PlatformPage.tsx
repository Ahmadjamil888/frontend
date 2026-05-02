import { ContentSection, StatementSection } from '../components/MarketingSections'
import { brandPanelStrongClass } from '../components/brandTheme'

const blocks = [
  ['Gateway', 'Routes sessions, messaging, node state, memory, and workflows through one control plane.'],
  ['Runtime', 'Invokes models, executes tools, persists state, and manages delivery back into channels.'],
  ['Security', 'Supports deployment-aware auth, webhook bearer validation, and protected operator surfaces.'],
  ['Frontend', 'Acts as the public entrypoint for product narrative, sign-in, and operator dashboard handoff.'],
]

const deepDives = [
  {
    title: 'Session continuity',
    text: 'Every connector and dashboard action should land in a session with preserved history, memory context, and visible delivery state. That is what makes the operator usable over time.',
  },
  {
    title: 'Tool governance',
    text: 'Tool profiles, allowlists, deny rules, and typed catalog metadata exist so the runtime can reason safely about what it is permitted to execute in a given context.',
  },
  {
    title: 'Deployment flexibility',
    text: 'The same product can run as a local operator console, a browser-led dashboard flow, or a cloud-exposed gateway with stricter auth and webhook controls.',
  },
]

export function PlatformPage() {
  return (
    <div className="bg-black">
      <StatementSection
        eyebrow="Architecture"
        segments={[
          { text: 'One operator system,', className: 'font-normal' },
          { text: 'multiple surfaces.', className: 'font-serif italic font-normal' },
        ]}
        body="The product is split deliberately: frontend for narrative and sign-in, backend for execution and control, and a gateway/runtime core that owns state."
      />

      <ContentSection
        eyebrow="System Layers"
        title="Each layer has a real job."
        description="The platform only stays coherent when every visible surface maps back to the same runtime truth instead of pretending the system is simpler than it is."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {blocks.map(([title, text]) => (
            <div key={title} className={`${brandPanelStrongClass} p-7`}>
              <h3 className="text-xl font-medium text-white">{title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-[#DEDBC8]">{text}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <StatementSection
        eyebrow="Runtime Model"
        segments={[
          { text: 'Structured enough to govern,', className: 'font-normal' },
          { text: 'dynamic enough to think.', className: 'font-serif italic font-normal' },
        ]}
        body="IMOS is not meant to be a fixed workflow runner disguised as an assistant. The goal is a runtime that can reason dynamically while still remaining observable and operable."
      />

      <ContentSection
        eyebrow="Deep Dives"
        title="The architecture stays useful only if continuity survives."
        description="Session continuity, tool governance, and deployment flexibility are not optional extras. They are the conditions required for a real operator system."
      >
        <div className="grid gap-5">
          {deepDives.map((item) => (
            <article key={item.title} className={`${brandPanelStrongClass} p-7`}>
              <h3 className="text-2xl font-light tracking-[-0.04em] text-white">{item.title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-[#DEDBC8]">{item.text}</p>
            </article>
          ))}
        </div>
      </ContentSection>
    </div>
  )
}
