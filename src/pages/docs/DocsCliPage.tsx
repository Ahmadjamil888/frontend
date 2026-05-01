import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'

const cliCommands = `imos
imos shell
imos dashboard
imos server
imos setup
imos status
imos skills
imos model
imos setmodel
imos login
imos logout
imos whoami
imos version
imos help`

const shellCommands = `/help
/exit
/clear
/model
/setmodel
/skills
/status
/dashboard
/setup
/login
/logout
/whoami
/github
/deploy
/workspace
/voice on|off
/tasks
/audit
/history`

export function DocsCliPage() {
  return (
    <DocsShell
      title="The CLI is the real front door into IMOS."
      description="The current launcher in `imos_cli.py` starts the shell, dashboard, server mode, setup flow, auth commands, and the operator slash commands that stay available during live sessions."
    >
      <div className="space-y-6 text-sm leading-8 text-[#cfb69a]">
        <p>
          The backend launcher supports direct commands like <code>imos dashboard</code>, <code>imos setup</code>,{' '}
          <code>imos login</code>, and <code>imos setmodel</code>. It also exposes shell-level slash commands once the
          operator is inside the interactive session.
        </p>
        <CodeBlock label="Primary CLI commands" code={cliCommands} />
        <p>
          Inside the shell, IMOS exposes runtime-focused shortcuts for dashboard launch, model management, task review,
          audit inspection, and account status.
        </p>
        <CodeBlock label="Interactive shell commands" code={shellCommands} />
      </div>
    </DocsShell>
  )
}
