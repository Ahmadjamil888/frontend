import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'

export function DocsOperationsPage() {
  return (
    <DocsShell
      title="Operational confidence starts with the exact command the user will run."
      description="The IMOS command path, adapter health, dashboard reachability, MCP bridge state, permission setup, and service routing all need to be validated from the real public entrypoints."
      eyebrow="Operations"
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-300">
        <p>
          Common operator checks now include <code>imos status</code>, <code>imos adapters list</code>,{' '}
          <code>imos adapters test &lt;name&gt;</code>, <code>imos mcp install</code>, <code>imos dashboard</code>,
          and one real <code>imos run "&lt;prompt&gt;"</code> validation.
        </p>
        <p>
          For a real rollout, verify the global <code>imos</code> command, service credentials, local adapter config,
          dashboard route reachability, permission gates, editor bridge registration, and at least one real IMOS run
          that touches a file, Git adapter, deployment target, or messaging adapter.
        </p>
        <CodeBlock
          label="Recommended checks"
          code={`imos
imos status
imos adapters list
imos adapters test openai_main
imos mcp install
imos dashboard
imos run "Summarize the repo state"`}
        />
      </div>
    </DocsShell>
  )
}
