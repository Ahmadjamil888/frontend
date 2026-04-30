import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'

export function DocsOperationsPage() {
  return (
    <DocsShell
      title="Operational confidence starts with the exact command the user will run."
      description="The launcher path, auth state, provider configuration, MCP registry, Git state, dashboard reachability, and workspace execution path should all be verified from the real CLI entrypoint."
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-400">
        <p>
          Common operator commands now include <code>connect</code>, <code>connect dashboard</code>,{' '}
          <code>connect login</code>, <code>connect logout</code>, <code>/pickmodel</code>, <code>/git</code>,{' '}
          <code>/mcp</code>, <code>/terminal</code>, <code>/tasks</code>, <code>/processes</code>, and{' '}
          <code>/audit</code>.
        </p>
        <p>
          For launch builds, verify the launcher path, Clerk env variables, workspace binding, provider readiness,
          dashboard streaming, and at least one real task that creates files or starts a process.
        </p>
        <CodeBlock
          label="Recommended checks"
          code={`connect login
connect dashboard
connect
/git status
/tasks
/processes
/audit`}
        />
      </div>
    </DocsShell>
  )
}
