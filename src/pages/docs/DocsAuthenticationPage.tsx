import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'

export function DocsAuthenticationPage() {
  return (
    <DocsShell
      title="Authentication is shared between the deployed frontend and the local runtime."
      description="CONNECT uses Clerk on the frontend and validates the local session before the operator runtime or dashboard is allowed to continue."
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-400">
        <p>
          The frontend reads <code>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code>. The backend reads both{' '}
          <code>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code> and <code>CLERK_SECRET_KEY</code>.
        </p>
        <p>
          When the user runs <code>connect login</code>, the CLI opens the existing browser sign-in flow, waits for the
          localhost callback, validates the Clerk token, and persists the verified local operator session.
        </p>
        <CodeBlock label="Start sign-in from the terminal" code={'connect login'} />
        <p>
          Authentication is mandatory for the active runtime. If the user launches <code>connect</code> or{' '}
          <code>connect dashboard</code> without a valid local session, the CLI automatically redirects to sign-in,
          completes the callback, and resumes after the successful auth message.
        </p>
        <CodeBlock label="Common auth flow" code={`connect
connect dashboard
connect logout`} />
      </div>
    </DocsShell>
  )
}
