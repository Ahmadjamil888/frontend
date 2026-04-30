import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'

const macLinuxInstall = 'curl -fsSL https://raw.githubusercontent.com/Ahmadjamil888/connect/main/install.sh | bash'
const windowsInstall =
  'powershell -ExecutionPolicy Bypass -Command "Invoke-WebRequest https://raw.githubusercontent.com/Ahmadjamil888/connect/main/install.bat -OutFile $env:TEMP\\connect-install.bat; & $env:TEMP\\connect-install.bat"'
const gitBashInstall = 'curl -fsSL https://raw.githubusercontent.com/Ahmadjamil888/connect/main/install.sh | bash'
const repoInstall = 'git clone https://github.com/Ahmadjamil888/connect && cd connect && ./install.sh'
const runtimeDeps = 'pip install -r requirements.txt\npython -m playwright install chromium'

export function DocsInstallationPage() {
  return (
    <DocsShell
      title="Install CONNECT on the machine the operator will actually use."
      description="The current launcher installs the local runtime, dashboard server, auth handoff, operator skills, and browser automation dependencies into one consistent CLI entrypoint."
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-400">
        <p>Use the installation path that matches your machine and shell.</p>
        <CodeBlock label="Mac and Linux" code={macLinuxInstall} />
        <CodeBlock label="Windows PowerShell or Command Prompt" code={windowsInstall} />
        <CodeBlock label="Windows with Git Bash" code={gitBashInstall} />
        <CodeBlock label="Install from a local clone" code={repoInstall} />
        <p>
          After installation, the launcher should be available as <code>connect</code>. If you are running from a local
          clone, install the runtime dependencies and Playwright browser once before using browser automation or the
          dashboard browser panel.
        </p>
        <CodeBlock label="Runtime dependencies" code={runtimeDeps} />
        <p>
          The active launcher now supports local chat, streamed dashboard chat, token and cost tracking, managed
          processes, MCP registration, Git autopilot, and the embedded terminal session.
        </p>
        <CodeBlock
          label="Validate the launcher"
          code={`connect login
connect dashboard
connect`}
        />
      </div>
    </DocsShell>
  )
}
