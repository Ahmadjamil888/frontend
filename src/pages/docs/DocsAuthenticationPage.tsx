import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'

export function DocsAuthenticationPage() {
  return (
    <DocsShell
      title="Authentication is shared between the deployed frontend and the local runtime."
      description="IMOS uses a secure browser sign-in flow and validates the local session before the operator runtime or dashboard is allowed to continue."
      eyebrow="Authentication"
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-300">
        <p>
          The public site handles sign-in. The local runtime verifies the returned session handoff before opening the
          operator shell or dashboard.
        </p>
        <p>
          When the user runs <code>imos login</code>, the CLI opens the existing browser sign-in flow, waits for the
          localhost callback, validates the returned session, and persists the verified local operator session.
        </p>
        <CodeBlock label="Start sign-in from the terminal" code={'imos login'} />
        <p>
          Authentication is mandatory for the active runtime. If the user launches <code>imos</code> or{' '}
          <code>imos dashboard</code> without a valid local session, the CLI automatically redirects to sign-in,
          completes the callback, and resumes after the successful auth message.
        </p>
        <CodeBlock label="Common auth flow" code={`imos\nimos dashboard\nimos logout`} />
      </div>
    </DocsShell>
  )
}
