import { ContentSection, StatementSection } from '../components/MarketingSections'
import { brandPanelStrongClass } from '../components/brandTheme'

const checklist = [
  'Run a real IMOS task with `imos run "<prompt>"` and confirm the orchestrator returns a synthesized result.',
  'Open the local dashboard with `imos dashboard` and verify adapters, status, sessions, settings, permissions, history, and live output all load.',
  'Run `imos mcp install` and confirm the editor configs are written for supported IDEs.',
  'Confirm first-run permission prompts cover PC control, browser control, IDE access, app access, and elevated actions before they are enabled.',
]

const phases = [
  {
    title: 'Installation',
    text: 'Install from the GitHub repository, run the platform installer, and confirm the global `imos` command resolves from a fresh terminal.',
  },
  {
    title: 'Runtime wiring',
    text: 'Confirm adapter discovery, dashboard route health, MCP config generation, permission gates, session routing, and one real IMOS orchestration path before broader rollout.',
  },
  {
    title: 'Unified control',
    text: 'Keep IMOS positioned as the central brain while editors, websites, apps, browser sessions, services, and machine actions stay connected as runtime surfaces.',
  },
]

export function LaunchPage() {
  return (
    <div className="bg-black">
      <StatementSection
        eyebrow="Launch"
        segments={[
          { text: 'A practical launch path,', className: 'font-normal' },
          { text: 'not a placeholder shell.', className: 'font-serif italic font-normal' },
        ]}
        body="This frontend reflects the real IMOS runtime. The launch sequence should match the commands, permission prompts, and control surfaces operators will actually use."
      />

      <ContentSection
        eyebrow="Checklist"
        title="Launch is a sequence."
        description="A real launch requires the docs, CLI, dashboard route surface, adapter registry, MCP setup, permission gates, and diagnostics path to agree with each other."
      >
        <div className={`${brandPanelStrongClass} p-8`}>
          <ol className="space-y-5 text-[15px] leading-7 text-[#DEDBC8]">
            {checklist.map((item, index) => (
              <li key={item} className="flex gap-4">
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-[0.9rem] border border-white/10 bg-white/[0.04] text-sm font-medium text-white">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </ContentSection>

      <StatementSection
        eyebrow="Readiness"
        segments={[
          { text: 'Launch is a sequence,', className: 'font-normal' },
          { text: 'not a slogan.', className: 'font-serif italic font-normal' },
        ]}
        body="The fastest way to catch broken launchers, missing adapter config, stale docs, bad MCP state, unsafe permission flows, or dead dashboard routes is to validate the exact commands and approvals the operator will actually run."
      />

      <ContentSection
        eyebrow="Phases"
        title="Readiness has to be proven."
        description="The launch path only deserves trust when installation, runtime wiring, permission setup, and shell compatibility all succeed through the real operator entrypoints."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {phases.map((phase) => (
            <article key={phase.title} className={`${brandPanelStrongClass} p-7`}>
              <h3 className="text-xl font-medium text-white">{phase.title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-[#DEDBC8]">{phase.text}</p>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentSection
        eyebrow="Permissions"
        title="Consent has to be visible."
        description="The operator should be able to approve or deny PC control, browser control, IDE access, app access, and elevated actions from a dedicated setup surface before execution starts."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['PC and browser', 'Approve keyboard, mouse, hover, click, typing, screenshots, browser navigation, and website actions only when the operator explicitly allows them.'],
            ['IDE and apps', 'Approve Cursor, VS Code, JetBrains, messaging tools, desktop apps, and connected services as first-class runtime surfaces.'],
            ['Elevated actions', 'Keep destructive or admin-level operations behind explicit approval so the runtime can act powerfully without silently escalating.'],
          ].map(([title, text]) => (
            <article key={title} className={`${brandPanelStrongClass} p-7`}>
              <h3 className="text-xl font-medium text-white">{title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-[#DEDBC8]">{text}</p>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentSection
        eyebrow="Contact"
        title="Reach the team directly."
        description="If you are opening IMOS for implementation, support, or deployment work, use the direct contact below."
      >
        <div id="contact" className={`${brandPanelStrongClass} mx-auto max-w-4xl p-8 text-center`}>
          <div className="text-xs font-medium uppercase tracking-[0.22em] text-[#DEDBC8]/55">Email</div>
          <a href="mailto:zehanxtech@gmail.com" className="mt-4 inline-block text-2xl font-light tracking-[-0.04em] text-white transition hover:text-[#DEDBC8]">
            zehanxtech@gmail.com
          </a>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#DEDBC8]">
            Use this address for product inquiries, implementation questions, deployment requests, or operator support.
          </p>
        </div>
      </ContentSection>
    </div>
  )
}
