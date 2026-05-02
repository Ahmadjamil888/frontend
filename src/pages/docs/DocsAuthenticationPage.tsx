import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'

export function DocsAuthenticationPage() {
  return (
    <DocsShell
      title="Authentication now belongs to the existing shell and browser surfaces, not to the new IMOS CLI."
      description="The docs need to separate the new adapter-based IMOS command set from the older browser-authenticated shell flow launched through `ai_assistant.py`."
      eyebrow="Authentication"
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-300">
        <p>
          The <code>imos</code> CLI added in this repo is primarily a local orchestration surface. It uses local config
          and adapter credentials rather than a dedicated <code>imos login</code> command.
        </p>
        <p>
          The browser-authenticated handoff still matters for the existing <code>ai_assistant.py</code> shell and related
          dashboard flows. That is what the current auth page supports: browser sign-in, a localhost callback, and
          returning control to the earlier interactive runtime.
        </p>
        <CodeBlock label="Existing shell and launcher paths" code={'python ai_assistant.py\nimos dashboard'} />
        <p>
          For IMOS itself, the important authentication questions are provider credentials, messaging tokens, Git
          tokens, payment keys, and editor integration config. Those are documented through <code>.env.example</code>,{' '}
          <code>connections.yaml</code>, and the dashboard adapter wizard instead of a separate browser login command.
        </p>
        <CodeBlock label="IMOS credential surfaces" code={`.env\n~/.imos/connections.yaml\nimos adapters add <type> <name>`} />
      </div>
    </DocsShell>
  )
}
