import { DocsShell } from '../../components/DocsShell'

export function DocsRuntimePage() {
  return (
    <DocsShell
      title="The IMOS runtime now adds a second execution path on top of the existing shell."
      description="The codebase now contains the original interactive runtime launched from `ai_assistant.py` plus the new IMOS adapter bus, orchestrator, MCP server, dashboard routes, and YAML-backed registry."
      eyebrow="Runtime"
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-300">
        <p>
          IMOS introduces an explicit orchestration layer. Prompts are decomposed by the router, mapped onto adapter
          capabilities, executed through a registry, and synthesized back into one response.
        </p>
        <p>
          The new runtime surface includes <code>imos/adapters/*</code>, <code>imos/router.py</code>,{' '}
          <code>imos/orchestrator.py</code>, <code>imos/synthesizer.py</code>, <code>imos/context.py</code>, and{' '}
          <code>imos/mcp_server.py</code>. Those components sit beside the interactive shell started from{' '}
          <code>ai_assistant.py</code> rather than replacing it outright.
        </p>
        <p>
          The dashboard now talks to <code>/imos/run</code>, <code>/imos/adapters</code>, <code>/imos/history</code>,{' '}
          <code>/imos/status</code>, <code>/imos/settings</code>, <code>/imos/capabilities</code>, and{' '}
          <code>/imos/ws</code>. IDEs can also connect through the IMOS MCP server.
        </p>
      </div>
    </DocsShell>
  )
}
