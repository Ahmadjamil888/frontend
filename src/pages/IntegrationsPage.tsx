import { SectionBlock } from '../components/SectionBlock'

const integrationGroups = {
  Messaging: ['Telegram', 'Slack webhooks', 'Slack bot mode', 'Discord webhooks', 'Twilio WhatsApp'],
  Automation: ['Cron jobs', 'Workflow webhooks', 'Background orchestration', 'Session routing'],
  Operator: ['Dashboard', 'Node pairing', 'Canvas persistence', 'CLI and browser auth handoff'],
}

const notes = [
  'Connectors matter only if they land in visible sessions and can be traced through the runtime.',
  'Webhook-triggered workflows should behave like first-class runtime inputs rather than detached automations.',
  'Cloud-facing connectors require stricter auth, signing, and deployment review than localhost experiments.',
]

export function IntegrationsPage() {
  return (
    <div className="bg-black pt-8">
      <SectionBlock
        eyebrow="Integrations"
        title="Connectors and operators in one fabric"
        description="The frontend presents the real connector families and operator surfaces with a cleaner structure that matches the product instead of overstating it."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {Object.entries(integrationGroups).map(([group, items], groupIndex) => (
            <div key={group} className="rounded-[1.4rem] border border-white/10 bg-[#0a0a0a] p-7">
              <div className="flex items-center gap-3">
                <span className={`h-2.5 w-2.5 rounded-full ${groupIndex === 0 ? 'bg-white' : 'bg-white/35'}`} />
                <h3 className="text-xl font-medium text-white">{group}</h3>
              </div>
              <ul className="mt-5 space-y-3 text-base leading-8 text-neutral-300">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-3 h-1.5 w-1.5 rounded-full bg-white/50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow="Operational notes"
        title="Integrations are only useful when they stay accountable."
        description="CONNECT treats messaging, workflows, and nodes as operator surfaces, not magical black boxes. That means state should remain observable and delivery should remain constrained."
      >
        <div className="grid gap-4">
          {notes.map((note, index) => (
            <div key={note} className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-6 text-base leading-8 text-neutral-300">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-[0.8rem] border border-white/12 bg-white/[0.03] text-sm text-white">
                  0{index + 1}
                </span>
                <span>{note}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>
    </div>
  )
}
