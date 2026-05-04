import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'

const repoInstall = 'git clone https://github.com/Ahmadjamil888/connect && cd connect'
const macLinuxInstall = './install.sh'
const windowsInstall = '.\\install.cmd'
const installRoutes = `Windows installer route
https://github.com/Ahmadjamil888/connect/install.cmd

macOS and Linux installer route
https://github.com/Ahmadjamil888/connect/install.sh`
const setupFlow = `imos
imos status
imos adapters list
imos shell --beast
imos dashboard
imos sessions list`

export function DocsInstallationPage() {
  return (
    <DocsShell
      title="Install the runtime, then start it with the public CLI."
      description="Install from the GitHub repository, run the guided installer, and start the operator with the documented CLI commands."
      eyebrow="Installation"
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-300">
        <p>Install from the current repository and initialize the runtime locally.</p>
        <CodeBlock label="Clone the repository" code={repoInstall} />
        <CodeBlock label="Installer routes" code={installRoutes} />
        <p>
          On macOS or Linux, run the guided installer. It clones or updates the runtime, prepares the environment,
          installs dependencies with staged progress, creates the global <code>imos</code> command, and runs the setup
          checks automatically.
        </p>
        <CodeBlock label="macOS / Linux" code={macLinuxInstall} />
        <p>
          On Windows, run the command installer. It performs the same staged setup flow and registers the global{' '}
          <code>imos</code> launcher for new terminals.
        </p>
        <CodeBlock label="Windows" code={windowsInstall} />
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
