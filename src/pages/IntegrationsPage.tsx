import { SectionBlock } from '../components/SectionBlock'

const integrationGroups = {
  Messaging: ['Telegram', 'Slack webhooks', 'Slack bot mode', 'Discord webhooks', 'Twilio WhatsApp'],
  Automation: ['Cron jobs', 'Workflow webhooks', 'Background orchestration', 'Session routing'],
  Operator: ['Dashboard', 'Node pairing', 'Canvas persistence', 'CLI + browser auth handoff'],
}

export function IntegrationsPage() {
  return (
    <div className="bg-black pt-12">
      <SectionBlock
        eyebrow="Integrations"
        title="Connectors and operators in one fabric"
        description="The frontend doesn’t pretend every surface is finished. It shows the real connector families that exist today and the operator surfaces they feed."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {Object.entries(integrationGroups).map(([group, items]) => (
            <div key={group} className="rounded-3xl border border-white/8 bg-[#07120f] p-6">
              <h3 className="text-xl font-medium text-white">{group}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-neutral-300">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionBlock>
    </div>
  )
}
