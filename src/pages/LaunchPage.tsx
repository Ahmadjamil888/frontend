import { SectionBlock } from '../components/SectionBlock'
import { brandPanelStrongClass } from '../components/brandTheme'

const checklist = [
  'Run the local operator with `connect` or open the responsive local dashboard with `connect dashboard`.',
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
    text: 'Ensure Clerk env is present on the frontend and backend. If no local session exists, `connect` and `connect dashboard` trigger the browser-to-localhost sign-in handoff automatically.',
  },
  {
    title: 'Runtime validation',
    text: 'Confirm provider readiness, streamed dashboard availability, session creation, model selection, and at least one working task, process, or MCP path before broad rollout.',
  },
]

export function LaunchPage() {
  return (
    <div className="pt-6 md:pt-10">
      <SectionBlock
        eyebrow="Launch"
        title="A practical launch path"
        description="This frontend now reflects the real local operator runtime instead of a placeholder shell. It gives you the public auth surface and the operator launch sequence that matches the current CLI."
      >
        <div className={`${brandPanelStrongClass} p-8`}>
          <ol className="space-y-5 text-[15px] leading-7 text-neutral-300">
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
      </SectionBlock>

      <SectionBlock
        eyebrow="Readiness"
        title="Launch is a sequence, not a slogan."
        description="A real launch requires the public site, auth flow, launcher path, runtime health, dashboard streaming, and connector validation to all agree with each other."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {phases.map((phase) => (
            <article key={phase.title} className={`${brandPanelStrongClass} p-7`}>
              <h3 className="text-xl font-medium text-white">{phase.title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-neutral-400">{phase.text}</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow="Operator discipline"
        title="Verify from the real launcher path."
        description="The fastest way to catch broken launchers, missing env, wrong workspace binding, dead providers, or stale docs is to validate the exact commands the operator will actually run."
      >
        <div className={`${brandPanelStrongClass} p-7`}>
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">Launch commands</div>
          <pre className="overflow-x-auto rounded-[1.1rem] border border-white/8 bg-black/35 p-5 text-sm leading-7 text-neutral-200">
            <code>{`connect login
connect dashboard
connect
/git status
/tasks
/processes
/audit`}</code>
          </pre>
        </div>
      </SectionBlock>
    </div>
  )
}
