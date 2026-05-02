import { ContentSection, StatementSection } from '../components/MarketingSections'
import { brandPanelStrongClass } from '../components/brandTheme'

const checklist = [
  'Run a real IMOS task with `imos run "<prompt>"` and confirm the orchestrator returns a synthesized result.',
  'Open the local dashboard with `imos dashboard` and verify adapters, status, capabilities, history, and live output all load.',
  'Run `imos mcp install` and confirm the editor configs are written for supported IDEs.',
  'Use `python ai_assistant.py --doctor` and confirm adapter health, missing credentials, and MCP install state are reported correctly.',
]

const phases = [
  {
    title: 'Installation',
    text: 'Install the repo, bootstrap `.env` and `~/.imos`, and confirm both the `imos` CLI and the `ai_assistant.py` shell launcher resolve from the right workspace.',
  },
  {
    title: 'Runtime wiring',
    text: 'Confirm adapter discovery, dashboard route health, MCP config generation, and one real IMOS orchestration path before broader rollout.',
  },
  {
    title: 'Shell compatibility',
    text: 'Keep the `ai_assistant.py` interactive shell documented and working while the new IMOS CLI and dashboard ship on top of the same repo.',
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
        body="This frontend now reflects the real IMOS runtime and the existing shell that still ships with it. The launch sequence should match the commands operators can actually run today."
      />

      <ContentSection
        eyebrow="Checklist"
        title="Launch is a sequence."
        description="A real launch requires the docs, CLI, dashboard route surface, adapter registry, MCP setup, and diagnostics path to agree with each other."
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
        body="The fastest way to catch broken launchers, missing adapter config, stale docs, bad MCP state, or dead dashboard routes is to validate the exact commands the operator will actually run."
      />

      <ContentSection
        eyebrow="Phases"
        title="Readiness has to be proven."
        description="The launch path only deserves trust when installation, runtime wiring, and shell compatibility all succeed through the real operator entrypoints."
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
