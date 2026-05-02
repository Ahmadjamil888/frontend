import { DocsShell } from '../../components/DocsShell'

export function DocsOverviewPage() {
  return (
    <DocsShell
      title="Everything needed to install, route, operate, and extend IMOS."
      description="This docs set now distinguishes the new IMOS orchestration runtime from the interactive shell launched through `ai_assistant.py` so operators can move directly to the exact surface they need."
      eyebrow="Overview"
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-300">
        <p>
          IMOS now sits on top of the existing assistant codebase as a universal orchestration runtime. It adds
          adapters, routing, result synthesis, an MCP server, a dedicated dashboard route surface, and a task history
          layer without removing the earlier interactive shell.
        </p>
        <p>
          That means this repo now exposes two operator shapes. <code>imos</code> is the primary one-shot
          orchestration CLI and dashboard. <code>python ai_assistant.py</code> starts the existing interactive shell
          and slash-command environment.
        </p>
        <p>
          The backend work now spans adapter discovery, YAML-backed config, orchestration routing, model synthesis,
          messaging fan-out, MCP editor integration, dashboard APIs, and the existing shell runtime.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['IMOS runtime', 'Adapters, routing, synthesis, MCP, dashboard APIs, and orchestration history.'],
            ['Interactive shell', 'The existing `ai_assistant.py` terminal loop with slash commands, workflows, sessions, audit, and Git tooling.'],
            ['Frontend docs', 'Public docs pages that now describe both the IMOS CLI and the existing shell accurately.'],
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
