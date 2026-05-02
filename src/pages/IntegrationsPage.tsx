import { ContentSection, StatementSection } from '../components/MarketingSections'
import { brandPanelStrongClass } from '../components/brandTheme'

const integrationGroups = {
  Models: ['ChatGPT / OpenAI', 'Claude / Anthropic', 'Local Ollama and LM Studio', 'OpenAI-compatible model APIs'],
  IDEs and Apps: ['Cursor', 'VS Code', 'JetBrains', 'Generic desktop and web app adapters'],
  Machine Control: ['Browser automation', 'Typing, hover, click, and form control', 'PC access with permission gates', 'Session-aware app handoff'],
}

const notes = [
  'Integrations matter only if they land in visible sessions and can be traced through the runtime.',
  'First-run setup should ask for permission before PC control, app access, browser control, or elevated machine actions are enabled.',
  'Cloud-facing connectors and admin-level machine actions require stricter auth, policy gates, and explicit consent than localhost experiments.',
]

export function IntegrationsPage() {
  return (
    <div className="bg-black">
      <StatementSection
        eyebrow="Integrations"
        segments={[
          { text: 'Models, operators, and machine access', className: 'font-normal' },
          { text: 'in one fabric.', className: 'font-serif italic font-normal' },
        ]}
        body="The frontend presents the real model, IDE, browser, app, and machine-control surfaces with a cleaner structure that matches the product instead of overstating it."
      />

      <ContentSection
        eyebrow="Connector Families"
        title="Every integration should route back into the same runtime."
        description="Models, IDEs, browser actions, app controls, and operator surfaces only matter if they remain visible, accountable, session-aware, and policy-bound once they enter the system."
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
        body="IMOS treats models, IDEs, apps, browser sessions, and machine controls as operator surfaces, not magical black boxes. That means state should remain observable, permissions should remain explicit, and delivery should remain constrained."
      />

      <ContentSection
        eyebrow="Discipline"
        title="Visibility is the requirement."
        description="The integration layer should never become a detached automation sink. It should remain traceable through sessions, policies, preferences, and delivery state."
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
