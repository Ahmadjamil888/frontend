import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'

const repoInstall = 'git clone https://github.com/Ahmadjamil888/connect && cd connect'
const runtimeDeps = 'pip install -r requirements.txt\nplaywright install chromium'
const setupFlow = 'python -c "from imos.config import ensure_default_files; ensure_default_files()"\nimos mcp install'

export function DocsInstallationPage() {
  return (
    <DocsShell
      title="Install IMOS on the machine the operator will actually use."
      description="The current repo now carries the IMOS runtime, dashboard route surface, MCP server, and the older shell. Installation should make all of those paths coherent on one workstation."
      eyebrow="Installation"
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-300">
        <p>Install from the current repository and initialize the IMOS runtime locally.</p>
        <CodeBlock label="Clone the repository" code={repoInstall} />
        <p>
          After cloning, install the Python dependencies and the Playwright runtime once. The IMOS dashboard, browser
          adapter, and MCP server all depend on that local runtime being present.
        </p>
        <CodeBlock label="Runtime dependencies" code={runtimeDeps} />
        <p>
          Then create the IMOS config home and install the editor MCP config if you want Cursor or Windsurf to connect
          immediately.
        </p>
        <CodeBlock label="Initialize IMOS" code={setupFlow} />
        <CodeBlock
          label="Validate the launcher"
          code={`imos status
imos dashboard
python ai_assistant.py --doctor`}
        />
      </div>
    </DocsShell>
  )
}
