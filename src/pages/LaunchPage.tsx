import { ContentSection, StatementSection } from '../components/MarketingSections'
import { brandPanelStrongClass } from '../components/brandTheme'

const checklist = [
  'Run the local operator with `imos` or open the responsive local dashboard with `imos dashboard`.',
  'If no local session exists, the CLI opens the Clerk sign-in handoff automatically and resumes after login.',
  'Use the dashboard for streamed chat, tasks, processes, audit, cost tracking, MCP visibility, and the embedded terminal.',
  'Pick any provider/model pair from setup or later through the CLI model picker and verify one real executable task.',
]

const phases = [
  {
    title: 'Installation',
    text: 'Install the repo, verify the global launcher path, and confirm the runtime resolves from any working directory.',
  },
  {
    title: 'Authentication',
    text: 'Ensure Clerk env is present on the frontend and backend. If no local session exists, `imos` and `imos dashboard` trigger the browser-to-localhost sign-in handoff automatically.',
  },
  {
    title: 'Runtime validation',
    text: 'Confirm provider readiness, streamed dashboard availability, session creation, model selection, and at least one working task, process, or MCP path before broad rollout.',
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
        body="This frontend now reflects the real local operator runtime instead of a placeholder shell. It gives you the public auth surface and the operator launch sequence that matches the current CLI."
      />

      <ContentSection
        eyebrow="Checklist"
        title="Launch is a sequence."
        description="A real launch requires the public site, auth flow, launcher path, runtime health, dashboard streaming, and connector validation to all agree with each other."
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
        body="The fastest way to catch broken launchers, missing env, wrong workspace binding, dead providers, or stale docs is to validate the exact commands the operator will actually run."
      />

      <ContentSection
        eyebrow="Phases"
        title="Readiness has to be proven."
        description="The launch path only deserves trust when installation, authentication, and runtime validation all succeed through the real operator entrypoint."
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
