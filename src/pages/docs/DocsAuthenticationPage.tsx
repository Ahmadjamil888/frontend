import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'

export function DocsAuthenticationPage() {
  return (
    <DocsShell
      title="Use `imos dashboard` and the CLI to set credentials and permissions explicitly."
      description="The public operator flow separates service credentials from runtime permissions so the system can connect to tools while still asking for explicit approval before browser, editor, app, PC, or elevated actions are enabled."
      eyebrow="Authentication"
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-300">
        <p>
          IMOS uses service credentials for model providers, messaging platforms, deployment services, and other
          integrations. Separately, it uses runtime permissions to decide whether it may control the browser, editor
          surfaces, apps, files, machine actions, or elevated workflows.
        </p>
        <p>
          The important product behavior is consent-first setup. Users should be able to approve or deny PC control,
          browser control, editor access, app access, and elevated actions from the dashboard before those surfaces are
          used.
        </p>
        <CodeBlock label="Operator setup flow" code={`imos
imos dashboard
imos adapters add <type> <name>
imos adapters test <name>`} />
        <p>
          The runtime should remember operator preferences, but destructive and elevated actions should still remain
          explicitly gated.
        </p>
      </div>
    </DocsShell>
  )
}
