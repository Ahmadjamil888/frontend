import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'

const repoInstall = 'git clone https://github.com/Ahmadjamil888/connect && cd connect'
const runtimeDeps = './install.sh'
const windowsSetup = 'install.bat'
const setupFlow = 'imos\nimos wake status\nimos status\nimos dashboard'

export function DocsInstallationPage() {
  return (
    <DocsShell
      title="Install IMOS on the machine the operator will actually use."
      description="Install from the GitHub repository, run the platform installer, and start IMOS with one public command. The setup flow should feel staged and guided rather than exposing raw internal steps."
      eyebrow="Installation"
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-300">
        <p>Install from the current repository and initialize the IMOS runtime locally.</p>
        <CodeBlock label="Clone the repository" code={repoInstall} />
        <p>
          On macOS or Linux, run the guided installer. It clones or updates the runtime, prepares the environment,
          installs dependencies with staged progress, creates the global <code>imos</code> command, and runs the setup
          checks automatically.
        </p>
        <CodeBlock label="macOS / Linux" code={runtimeDeps} />
        <p>
          On Windows, run the batch installer. It performs the same staged setup flow and registers the global{' '}
          <code>imos</code> launcher for new terminals.
        </p>
        <CodeBlock label="Windows" code={windowsSetup} />
        <p>
          After the installer finishes, start IMOS from any terminal and validate the runtime. The installer should
          already have prepared the environment, installed the editor bridge, and created the default local config.
        </p>
        <CodeBlock label="Start IMOS" code={setupFlow} />
        <CodeBlock
          label="What the installer handles for you"
          code={`clone or update the GitHub repository
prepare the local environment
install dependencies with progress output
create the global imos command
initialize local IMOS config
install the editor bridge
install the always-on wake listener
run setup checks`}
        />
      </div>
    </DocsShell>
  )
}
