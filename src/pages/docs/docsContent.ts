export type DocItem = {
  path: string
  label: string
}

export type DocGroup = {
  label: string
  items: DocItem[]
}

export type CliCommandDoc = {
  slug: string
  label: string
  command: string
  title: string
  summary: string
  description: string
  whenToUse: string[]
  notes?: string[]
  related?: string[]
}

export const CLI_COMMAND_DOCS: CliCommandDoc[] = [
  {
    slug: 'shell',
    label: 'imos shell',
    command: 'imos shell',
    title: 'Run the interactive shell directly.',
    summary: 'Starts the terminal operator session without opening the browser dashboard.',
    description:
      'Use this when the terminal is the main control surface. It keeps the operator in one live prompt and exposes the slash command layer for status, model changes, setup, account checks, tasks, audit history, and dashboard launch.',
    whenToUse: [
      'You want the fastest path into live prompting.',
      'You are working over SSH or in a terminal-first workflow.',
      'You need the slash commands without opening the browser surface first.',
    ],
    notes: ['Inside the shell, `/help` shows the built-in operator commands.', 'If auth is missing, IMOS will require sign-in before continuing.'],
    related: ['/docs/cli/slash-commands', '/docs/cli/dashboard', '/docs/authentication'],
  },
  {
    slug: 'dashboard',
    label: 'imos dashboard',
    command: 'imos dashboard',
    title: 'Start the local server and open the dashboard.',
    summary: 'Launches the browser-facing operator surface on the configured local dashboard port.',
    description:
      'If the server is already online, IMOS reuses it. If not, the CLI starts the server in the background and then opens the local dashboard URL in the browser.',
    whenToUse: [
      'You need the visual operator dashboard instead of terminal-only control.',
      'You want streamed chat, task state, activity, memory, audit, or the embedded terminal panel.',
      'You want to verify that the local server can boot and answer browser requests.',
    ],
    notes: ['The dashboard command opens the browser automatically.', 'The default configured port is loaded from the dashboard config and falls back to `5000`.'],
    related: ['/docs/dashboard', '/docs/runtime', '/docs/operations'],
  },
  {
    slug: 'both',
    label: 'imos both',
    command: 'imos both',
    title: 'Open the dashboard and keep the shell in the same launch.',
    summary: 'Starts the server, opens the browser dashboard, then drops back into the interactive shell.',
    description:
      'This is the combined operator path when you want the web surface visible while still controlling the runtime from the terminal.',
    whenToUse: [
      'You want the browser dashboard open while staying active in the terminal.',
      'You want one launch path for both visual visibility and direct shell control.',
      'You are verifying that both the server boot and shell session work together.',
    ],
    related: ['/docs/cli/shell', '/docs/cli/dashboard'],
  },
  {
    slug: 'server',
    label: 'imos server',
    command: 'imos server',
    title: 'Run the server without opening the shell or browser.',
    summary: 'Boots the Flask-backed operator server only.',
    description:
      'This mode is useful for service-style operation, local integration testing, or cases where another surface will talk to the server after it starts.',
    whenToUse: [
      'You want the API and dashboard backend alive without interactive terminal control.',
      'You are testing server reachability or API routes.',
      'You need the runtime process running before another surface connects to it.',
    ],
    related: ['/docs/api', '/docs/runtime'],
  },
  {
    slug: 'setup',
    label: 'imos setup',
    command: 'imos setup',
    title: 'Run the first-time configuration wizard again.',
    summary: 'Reopens the setup flow that configures model, tokens, workspace, theme, and runtime behavior.',
    description:
      'The launcher uses the setup wizard on first run automatically, but this command lets you re-enter the same flow later when provider keys, workspace paths, or operator defaults need to change.',
    whenToUse: [
      'You are configuring the machine for the first time.',
      'Your model provider, API key, or workspace path changed.',
      'You want to refresh runtime defaults without editing config files manually.',
    ],
    related: ['/docs/installation', '/docs/operations'],
  },
  {
    slug: 'status',
    label: 'imos status',
    command: 'imos status',
    title: 'Inspect the local system state.',
    summary: 'Prints model, CPU, RAM, disk, server state, and token readiness checks.',
    description:
      'This is the fastest operational check before a real session. It verifies whether the server is running and whether common deployment tokens are configured.',
    whenToUse: [
      'You want a quick preflight before running a task.',
      'You are debugging why runtime launch or deployment helpers are failing.',
      'You need to confirm provider and system health from the real CLI entrypoint.',
    ],
    related: ['/docs/operations'],
  },
  {
    slug: 'skills',
    label: 'imos skills',
    command: 'imos skills',
    title: 'List the loaded skills available to the runtime.',
    summary: 'Enumerates the bundled and workspace-resolved skills currently visible to IMOS.',
    description:
      'The command loads the skill registry from the configured workspace plus the bundled skill directory and prints the names and short descriptions that the runtime can currently use.',
    whenToUse: [
      'You want to confirm a skill was installed or discovered correctly.',
      'You are checking what capabilities the runtime can call right now.',
      'You are debugging a missing skill before entering a session.',
    ],
    related: ['/docs/runtime', '/docs/operations'],
  },
  {
    slug: 'model',
    label: 'imos model',
    command: 'imos model',
    title: 'Show the active provider and model.',
    summary: 'Prints the current model selection loaded from IMOS configuration.',
    description:
      'This is the read-only way to inspect which provider and model the runtime will use before a session begins.',
    whenToUse: [
      'You want to verify the current provider before launching a task.',
      'You changed config and need to confirm the active model.',
    ],
    related: ['/docs/cli/setmodel'],
  },
  {
    slug: 'setmodel',
    label: 'imos setmodel',
    command: 'imos setmodel',
    title: 'Change the provider and model interactively.',
    summary: 'Prompts for provider, model name, and an optional new API key.',
    description:
      'IMOS presents a list of supported providers, asks for a model identifier, and can store a replacement API key during the same flow.',
    whenToUse: [
      'You want to switch providers without editing files manually.',
      'You are testing different models on the same workstation.',
      'You need to rotate or add a provider key while staying in the CLI.',
    ],
    related: ['/docs/cli/model', '/docs/installation'],
  },
  {
    slug: 'login',
    label: 'imos login',
    command: 'imos login',
    title: 'Start the browser-based sign-in handoff.',
    summary: 'Opens the IMOS auth flow, waits for the localhost callback, and stores the verified local session.',
    description:
      'This command bridges the public frontend auth surface into the local runtime. It is the main entrypoint for establishing a valid local operator session.',
    whenToUse: [
      'You are signing into IMOS on a new machine.',
      'Your previous local auth session expired or was cleared.',
      'You want to test the complete browser-to-local auth bridge.',
    ],
    related: ['/docs/authentication', '/docs/cli/logout', '/docs/cli/whoami'],
  },
  {
    slug: 'logout',
    label: 'imos logout',
    command: 'imos logout',
    title: 'Clear the local operator session.',
    summary: 'Disconnects the saved local auth state so IMOS will require sign-in again.',
    description:
      'Use this before switching accounts, when troubleshooting auth state, or when intentionally clearing the local session from the machine.',
    whenToUse: ['You need to disconnect the current account.', 'You are testing a fresh sign-in flow.', 'You want the runtime to require auth again.'],
    related: ['/docs/authentication', '/docs/cli/login', '/docs/cli/whoami'],
  },
  {
    slug: 'whoami',
    label: 'imos whoami',
    command: 'imos whoami',
    title: 'Inspect the current local account state.',
    summary: 'Shows the auth identity currently attached to the local runtime session.',
    description:
      'This is the fastest way to verify which account the machine is operating under without launching the full shell or dashboard.',
    whenToUse: ['You want to confirm who is signed in locally.', 'You are checking auth after the browser callback completes.'],
    related: ['/docs/authentication', '/docs/cli/login'],
  },
  {
    slug: 'help',
    label: 'imos help',
    command: 'imos help',
    title: 'Print the top-level CLI help surface.',
    summary: 'Shows the available commands, flags, slash commands, and common examples.',
    description:
      'The help output is the authoritative operator-facing summary of what the launcher exposes from the terminal today.',
    whenToUse: ['You need the current command list quickly.', 'You are onboarding on a fresh machine.'],
    related: ['/docs/cli/slash-commands'],
  },
  {
    slug: 'version',
    label: 'imos version',
    command: 'imos version',
    title: 'Print the installed IMOS version.',
    summary: 'Returns the launcher version string without running the full session flow.',
    description: 'Use this for environment checks, bug reports, release verification, or installation validation.',
    whenToUse: ['You are verifying the installed release.', 'You need the version for debugging or support.'],
  },
  {
    slug: 'slash-commands',
    label: 'Shell slash commands',
    command: '/help',
    title: 'Use runtime slash commands inside the interactive shell.',
    summary: 'The live shell exposes built-in runtime controls after the terminal session starts.',
    description:
      'The shell command layer includes `/help`, `/exit`, `/clear`, `/model`, `/setmodel`, `/skills`, `/status`, `/dashboard`, `/setup`, `/login`, `/logout`, `/whoami`, `/github`, `/deploy`, `/workspace`, `/voice on|off`, `/tasks`, `/audit`, and `/history`.',
    whenToUse: [
      'You are already inside the shell and want operator controls without restarting.',
      'You need to check runtime state, launch the dashboard, or inspect task and audit history.',
    ],
    related: ['/docs/cli/shell', '/docs/operations'],
  },
]

const coreDocs: DocGroup[] = [
  {
    label: 'Core',
    items: [
      { path: '/docs', label: 'Docs Home' },
      { path: '/docs/overview', label: 'Overview' },
      { path: '/docs/installation', label: 'Installation' },
      { path: '/docs/authentication', label: 'Authentication' },
      { path: '/docs/runtime', label: 'Gateway and Runtime' },
      { path: '/docs/dashboard', label: 'Dashboard' },
      { path: '/docs/api', label: 'API Routes' },
      { path: '/docs/connectors', label: 'Messaging and Connectors' },
      { path: '/docs/operations', label: 'Operations' },
    ],
  },
]

const cliDocs: DocGroup[] = [
  {
    label: 'CLI Guides',
    items: [{ path: '/docs/cli', label: 'CLI Overview' }, ...CLI_COMMAND_DOCS.map((item) => ({ path: `/docs/cli/${item.slug}`, label: item.label }))],
  },
]

export const DOC_GROUPS: DocGroup[] = [...coreDocs, ...cliDocs]

export const DOC_ITEMS: DocItem[] = DOC_GROUPS.flatMap((group) => group.items)

export function getCliCommandDoc(slug: string) {
  return CLI_COMMAND_DOCS.find((item) => item.slug === slug)
}
