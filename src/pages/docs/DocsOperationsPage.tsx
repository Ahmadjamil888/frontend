import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'

export function DocsOperationsPage() {
  return (
    <DocsShell
      title="Operational confidence starts with the exact public command path."
      description="The CLI path, adapter health, dashboard reachability, MCP bridge state, permission setup, and service routing all need to be validated from the real public entrypoints."
      eyebrow="Operations"
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-300">
        <p>
          Common operator checks now include <code>imos status</code>, <code>imos adapters list</code>,{' '}
          <code>imos adapters test &lt;name&gt;</code>, <code>imos sessions list</code>, <code>imos mcp install</code>,{' '}
          <code>imos wake status</code>, <code>imos dashboard</code>, and one real <code>imos run "&lt;prompt&gt;"</code>{' '}
          validation.
        </p>
        <p>
          For a real rollout, verify the global <code>imos</code> command, service credentials, local adapter config,
          dashboard route reachability, permission gates, editor bridge registration, beast-mode routing, and at least
          one real run that touches a file, Git adapter, deployment target, or messaging adapter.
        </p>
        <CodeBlock
          label="Recommended checks"
          code={`imos
imos status
imos adapters list
imos sessions list
imos mcp install
imos wake status
imos dashboard
imos run "Summarize the repo state"`}
        />
      </div>
    </DocsShell>
  )
}
