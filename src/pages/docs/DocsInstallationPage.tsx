import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'

const windowsCmdOption1 = 'curl -L -o install.bat https://raw.githubusercontent.com/Ahmadjamil888/imos/main/install.bat && install.bat'
const windowsCmdOption2 =
  'irm https://raw.githubusercontent.com/Ahmadjamil888/imos/main/install.bat -OutFile install.bat; .\\install.bat'
const windowsPowerShellOnly = `Set-ExecutionPolicy Bypass -Scope Process -Force
irm https://raw.githubusercontent.com/Ahmadjamil888/imos/main/install.bat | cmd`
const bashOption1 = 'curl -fsSL https://raw.githubusercontent.com/Ahmadjamil888/imos/main/install.sh | bash'
const bashOption2 = 'wget -qO- https://raw.githubusercontent.com/Ahmadjamil888/imos/main/install.sh | bash'
const bashOption3 = `curl -O https://raw.githubusercontent.com/Ahmadjamil888/imos/main/install.sh
chmod +x install.sh
./install.sh`
const universalInstall = `if [ -f /etc/os-release ]; then
  curl -fsSL https://raw.githubusercontent.com/Ahmadjamil888/imos/main/install.sh | bash
elif [ "$OS" = "Windows_NT" ]; then
  curl -L -o install.bat https://raw.githubusercontent.com/Ahmadjamil888/imos/main/install.bat && install.bat
fi`
const setupFlow = `imos
imos status
imos adapters list
imos dashboard
imos sessions list`

export function DocsInstallationPage() {
  return (
    <DocsShell
      title="Install with the official platform installers, then use the public CLI."
      description="Install the open-source IMOS runtime from the public GitHub repository with the supported Windows, Linux, and macOS commands, then start it with the documented CLI."
      eyebrow="Installation"
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-300">
        <p>
          IMOS is open source. Use the public installer methods below from{' '}
          <code>github.com/Ahmadjamil888/imos</code>. These are the documented installation paths for Windows, Linux, and macOS.
        </p>
        <p>
          Windows CMD:
        </p>
        <CodeBlock label="Windows (CMD) - Option 1: Direct download + run" code={windowsCmdOption1} />
        <CodeBlock label="Windows (CMD) - Option 2: PowerShell (recommended on modern Windows)" code={windowsCmdOption2} />
        <p>Windows PowerShell only:</p>
        <CodeBlock label="Windows (PowerShell only) - cleanest" code={windowsPowerShellOnly} />
        <p>Linux / macOS:</p>
        <CodeBlock label="Linux / macOS (bash) - Option 1: curl (most common)" code={bashOption1} />
        <CodeBlock label="Linux / macOS (bash) - Option 2: wget" code={bashOption2} />
        <CodeBlock label="Linux / macOS (bash) - Option 3: download then run (safer / debuggable)" code={bashOption3} />
        <p>Universal installer:</p>
        <CodeBlock label="One-liner auto-detect OS (advanced)" code={universalInstall} />
        <p>
          After the installer finishes, start the runtime from any terminal and validate the operator surface. The installer should
          already have prepared the environment, installed the editor bridge, installed the wake listener, and created
          the default local config.
        </p>
        <CodeBlock label="First-run commands" code={setupFlow} />
        <CodeBlock
          label="What the installer handles for you"
          code={`download and run the official platform installer
prepare the local environment
install dependencies with progress output
create the global imos command
initialize local runtime config
install the editor bridge
install the always-on wake listener
run setup checks`}
        />
      </div>
    </DocsShell>
  )
}
