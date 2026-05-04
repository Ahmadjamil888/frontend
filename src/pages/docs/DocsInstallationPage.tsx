import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'

const repoInstall = 'git clone https://github.com/Ahmadjamil888/connect && cd connect'
const macLinuxInstall = 'git clone https://github.com/Ahmadjamil888/connect && cd connect && chmod +x install.sh && ./install.sh'
const windowsInstall = 'git clone https://github.com/Ahmadjamil888/connect && cd connect && ./install.bat'
const installRoutes = `Windows installer route
https://github.com/Ahmadjamil888/connect/blob/main/install.bat

macOS and Linux installer route
https://github.com/Ahmadjamil888/connect/blob/main/install.sh`
const setupFlow = `imos
imos status
imos adapters list
imos dashboard
imos sessions list`

export function DocsInstallationPage() {
  return (
    <DocsShell
      title="Install from Git Bash, then use the public CLI."
      description="Clone the repository, run the platform installer from Git Bash, and start the operator with the documented CLI commands."
      eyebrow="Installation"
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-300">
        <p>Use Git Bash for the documented install flow on both platforms so the repo setup and launcher creation behave consistently.</p>
        <CodeBlock label="Clone the repository" code={repoInstall} />
        <CodeBlock label="Installer routes" code={installRoutes} />
        <p>
          On macOS or Linux, run the guided installer from Git Bash. It clones or updates the runtime, prepares the environment,
          installs dependencies with staged progress, creates the global <code>imos</code> command, and runs the setup
          checks automatically.
        </p>
        <CodeBlock label="macOS / Linux" code={macLinuxInstall} />
        <p>
          On Windows, open Git Bash in the cloned repo and run the batch installer. It performs the same staged setup
          flow and registers the global <code>imos</code> launcher for new terminals.
        </p>
        <CodeBlock label="Windows / Git Bash" code={windowsInstall} />
        <p>
          After the installer finishes, start the runtime from any terminal and validate the operator surface. The installer should
          already have prepared the environment, installed the editor bridge, installed the wake listener, and created
          the default local config.
        </p>
        <CodeBlock label="First-run commands" code={setupFlow} />
        <CodeBlock
          label="What the installer handles for you"
          code={`clone or update the GitHub repository
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
