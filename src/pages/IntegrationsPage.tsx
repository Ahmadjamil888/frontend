import { ContentSection, StatementSection } from '../components/MarketingSections'
import { brandPanelStrongClass } from '../components/brandTheme'

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
    <div className="bg-black">
      <StatementSection
        eyebrow="Integrations"
        segments={[
          { text: 'Connectors and operators', className: 'font-normal' },
          { text: 'in one fabric.', className: 'font-serif italic font-normal' },
        ]}
        body="The frontend presents the real connector families and operator surfaces with a cleaner structure that matches the product instead of overstating it."
      />

      <ContentSection
        eyebrow="Connector Families"
        title="Every integration should route back into the same runtime."
        description="Messaging, automation, and operator surfaces only matter if they remain visible, accountable, and session-aware once they enter the system."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {Object.entries(integrationGroups).map(([group, items]) => (
            <div key={group} className={`${brandPanelStrongClass} p-7`}>
              <h3 className="text-xl font-medium text-white">{group}</h3>
              <ul className="mt-5 space-y-3 text-[15px] leading-7 text-[#DEDBC8]">
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
      </ContentSection>

      <StatementSection
        eyebrow="Operational Notes"
        segments={[
          { text: 'Integrations are only useful', className: 'font-normal' },
          { text: 'when they stay accountable.', className: 'font-serif italic font-normal' },
        ]}
        body="IMOS treats messaging, workflows, and nodes as operator surfaces, not magical black boxes. That means state should remain observable and delivery should remain constrained."
      />

      <ContentSection
        eyebrow="Discipline"
        title="Visibility is the requirement."
        description="The connector layer should never become a detached automation sink. It should remain traceable through sessions, policies, and delivery state."
      >
        <div className="grid gap-4">
          {notes.map((note, index) => (
            <div key={note} className={`${brandPanelStrongClass} p-6 text-[15px] leading-7 text-[#DEDBC8]`}>
              <div className="flex items-start gap-4">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-[0.8rem] border border-white/10 bg-white/[0.04] text-sm text-white">
                  0{index + 1}
                </span>
                <span>{note}</span>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>
    </div>
  )
}
