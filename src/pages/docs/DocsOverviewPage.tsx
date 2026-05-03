import { DocsShell } from '../../components/DocsShell'

export function DocsOverviewPage() {
  return (
    <DocsShell
      title="Everything needed to install, route, operate, and extend IMOS."
      description="This docs set presents IMOS as one central runtime that coordinates models, editors, apps, browser sessions, machine actions, messaging, and delivery from a single command surface."
      eyebrow="Overview"
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-300">
        <p>
          IMOS is a universal orchestration runtime. One prompt can expand into coordinated work across models,
          editors, apps, browser sessions, local files, machine control, messaging, deployment workflows, and
          long-running task state.
        </p>
        <p>
          The central idea is simple: start IMOS with <code>imos</code>, keep memory and preferences attached, and let
          the runtime decide how to use connected services without turning the operator into a manual relay between
          separate tools.
        </p>
        <p>
          Editors like Cursor are connected work surfaces inside the larger IMOS runtime. They are not the brain.
          IMOS remains the orchestration layer that coordinates editors, services, browser sessions, and machine
          actions toward one outcome.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['IMOS runtime', 'Routing, adapters, permissions, synthesis, memory, orchestration history, and service coordination.'],
            ['Connected work surfaces', 'Editors, browser sessions, apps, files, messaging, meetings, deployment targets, and machine controls.'],
            ['Frontend docs', 'Public docs pages that explain the runtime through public commands, routes, and operator behavior.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
              <h2 className="text-xl text-white">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </DocsShell>
  )
}
