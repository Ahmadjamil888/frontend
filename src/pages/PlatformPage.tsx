import { SectionBlock } from '../components/SectionBlock'
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
    <div className="pt-6 md:pt-10">
      <SectionBlock
        eyebrow="Architecture"
        title="One operator system, multiple surfaces"
        description="The product is split deliberately: frontend for narrative and sign-in, backend for execution and control, and a gateway/runtime core that owns state."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {blocks.map(([title, text], index) => (
            <div key={title} className={`${brandPanelStrongClass} p-7`}>
              <div className="flex items-center gap-3">
                <span className={`h-2.5 w-2.5 rounded-full ${index === 0 ? 'bg-[#E1E0CC]' : 'bg-[#E1E0CC]/35'}`} />
                <h3 className="text-xl font-medium text-[#E1E0CC]">{title}</h3>
              </div>
              <p className="mt-4 text-[15px] leading-7 text-[#cfb69a]">{text}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow="Runtime model"
        title="Structured enough to govern, dynamic enough to think."
        description="IMOS is not meant to be a fixed workflow runner disguised as an assistant. The goal is a runtime that can reason dynamically while still remaining observable and operable."
      >
        <div className="grid gap-5">
          {deepDives.map((item) => (
            <article key={item.title} className={`${brandPanelStrongClass} p-7`}>
              <h3 className="text-2xl font-light tracking-[-0.04em] text-[#E1E0CC]">{item.title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-[#cfb69a]">{item.text}</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow="Experience"
        title="The frontend and operator surfaces are separate on purpose."
        description="A public product site should explain, convert, and authenticate. An operator surface should expose live state, execution, and control. IMOS treats those as different jobs."
      >
        <div className={`${brandPanelStrongClass} p-8`}>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              ['Public frontend', 'Long-form product narrative, sign-in, navigation, docs, and launch framing.'],
              ['Operator backend', 'Dashboard, workflows, node pairing, messaging, gateway status, and live runtime control.'],
            ].map(([title, text], index) => (
              <div key={title} className="rounded-[1.2rem] border border-white/8 bg-black/30 p-6">
                <div className="flex items-center gap-3">
                  <span className={`h-2.5 w-2.5 rounded-full ${index === 0 ? 'bg-[#E1E0CC]' : 'bg-[#E1E0CC]/40'}`} />
                  <h3 className="text-xl font-medium text-[#E1E0CC]">{title}</h3>
                </div>
                <p className="mt-4 text-[15px] leading-7 text-[#cfb69a]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionBlock>
    </div>
  )
}
