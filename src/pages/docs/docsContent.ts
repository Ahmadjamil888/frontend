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
    slug: 'run',
    label: 'imos run',
    command: 'imos run "<prompt>"',
    title: 'Run one orchestration request through IMOS.',
    summary: 'Executes a prompt through the IMOS router, adapter registry, and result synthesizer.',
    description:
      'This is the main IMOS command. It takes one prompt, breaks it into subtasks, routes those subtasks to the best matching adapters, executes the graph, and returns one synthesized response.',
    whenToUse: [
      'You want the new adapter-based runtime instead of the legacy shell.',
      'You need a one-shot command that works cleanly in scripts and terminals.',
      'You want to route one prompt across model, IDE, VCS, messaging, browser, or OS adapters.',
    ],
    notes: [
      'Use `--adapters slack,cursor` when you want to constrain routing.',
      'Task history is persisted and visible in both `imos history` and the dashboard.',
    ],
    related: ['/docs/runtime', '/docs/dashboard', '/docs/operations'],
  },
  {
    slug: 'dashboard',
    label: 'imos dashboard',
    command: 'imos dashboard',
    title: 'Open the IMOS dashboard.',
    summary: 'Launches the IMOS management dashboard for adapters, history, settings, and live output.',
    description:
      'Use this when you want a visual control surface over the IMOS runtime. The dashboard exposes prompt execution, adapter health, configuration, capability discovery, recent task history, and the WebSocket event stream.',
    whenToUse: [
      'You want to manage adapters visually.',
      'You want to watch execution events and recent history while a task runs.',
      'You are validating the `/imos/*` route surface after changes.',
    ],
    notes: ['The dashboard talks to `/imos/run`, `/imos/adapters`, `/imos/history`, `/imos/status`, `/imos/settings`, `/imos/capabilities`, and `/imos/ws`.'],
    related: ['/docs/dashboard', '/docs/runtime'],
  },
  {
    slug: 'adapters-list',
    label: 'imos adapters list',
    command: 'imos adapters list',
    title: 'Inspect the loaded adapter roster.',
    summary: 'Shows which adapters were discovered from IMOS config and loaded into runtime state.',
    description:
      'Use this to confirm which adapters are present before you run a real orchestration task. It is the simplest terminal-side check for model, IDE, messaging, meeting, VCS, webapp, payment, and OS adapters.',
    whenToUse: [
      'You want to verify the registry after editing `connections.yaml`.',
      'You are checking what IMOS can route to on the current machine.',
      'You want a fast preflight before `imos run`.',
    ],
    related: ['/docs/operations', '/docs/dashboard'],
  },
  {
    slug: 'adapters-add',
    label: 'imos adapters add',
    command: 'imos adapters add <type> <name>',
    title: 'Add a new adapter entry.',
    summary: 'Registers a new adapter into IMOS config from the terminal.',
    description:
      'This command adds a new adapter entry without forcing you to hand-edit YAML for basic setup. After registration, IMOS can autodiscover the adapter on the next load cycle.',
    whenToUse: [
      'You are onboarding a new provider or tool family.',
      'You want the dashboard and CLI to surface an adapter consistently.',
      'You are setting up a machine from scratch.',
    ],
    related: ['/docs/installation', '/docs/dashboard'],
  },
  {
    slug: 'adapters-test',
    label: 'imos adapters test',
    command: 'imos adapters test <name>',
    title: 'Run a health check against one adapter.',
    summary: 'Tests one adapter in isolation through its runtime health-check path.',
    description:
      'This is the fastest way to tell whether a specific adapter can authenticate, reach its backing service, or respond with a healthy state before you run a real task.',
    whenToUse: [
      'You just changed credentials or config for one adapter.',
      'You want to isolate a failing integration quickly.',
      'You are validating a provider before dashboard use.',
    ],
    related: ['/docs/operations', '/docs/dashboard'],
  },
  {
    slug: 'adapters-remove',
    label: 'imos adapters remove',
    command: 'imos adapters remove <name>',
    title: 'Remove a configured adapter.',
    summary: 'Deletes one adapter entry from the IMOS config store.',
    description:
      'Use this when a provider is no longer needed, an adapter was misnamed, or you want the dashboard and registry to stop surfacing a stale integration.',
    whenToUse: [
      'You are cleaning up stale adapter config.',
      'You renamed an adapter and want the old entry gone.',
      'You want to keep the registry small and intentional.',
    ],
    related: ['/docs/dashboard', '/docs/operations'],
  },
  {
    slug: 'history',
    label: 'imos history',
    command: 'imos history',
    title: 'Review recent IMOS task history.',
    summary: 'Prints the recent prompt/result history stored in the IMOS context layer.',
    description:
      'IMOS stores recent prompts and result bundles locally. This command exposes that history from the terminal so you can inspect prior runs without opening the dashboard.',
    whenToUse: [
      'You need to inspect prior runs in the terminal.',
      'You want to confirm that result persistence is working.',
      'You are debugging sequencing across multiple orchestrator runs.',
    ],
    related: ['/docs/dashboard', '/docs/runtime'],
  },
  {
    slug: 'status',
    label: 'imos status',
    command: 'imos status',
    title: 'Inspect overall IMOS status.',
    summary: 'Shows configured adapters and runtime-loaded adapter state.',
    description:
      'Use this as the terminal-side overview for the IMOS runtime. It is the quickest way to confirm that config entries exist and that the runtime discovered them correctly.',
    whenToUse: [
      'You want a preflight before an orchestrated run.',
      'You are comparing configuration against runtime load state.',
      'You are checking a machine after setup or config edits.',
    ],
    related: ['/docs/operations', '/docs/dashboard'],
  },
  {
    slug: 'mcp-install',
    label: 'imos mcp install',
    command: 'imos mcp install',
    title: 'Install IMOS MCP configs for supported editors.',
    summary: 'Writes Cursor and Windsurf MCP config files pointing at the IMOS MCP server.',
    description:
      'This command generates the local editor configs that let supported IDEs connect to `python -m imos.mcp_server` and call IMOS tools directly.',
    whenToUse: [
      'You want Cursor or Windsurf to call IMOS tools.',
      'You have just installed the repo on a new workstation.',
      'You want to repair editor integration after config drift.',
    ],
    related: ['/docs/runtime', '/docs/dashboard'],
  },
  {
    slug: 'python-imos',
    label: 'python ai_assistant.py --imos',
    command: 'python ai_assistant.py --imos "<prompt>"',
    title: 'Route one prompt through IMOS from the existing Python launcher.',
    summary: 'Uses the existing script entrypoint but sends work through the IMOS orchestrator.',
    description:
      'This is the compatibility path when you want to keep using the current Python launcher script but still execute through the new IMOS runtime instead of the interactive shell.',
    whenToUse: [
      'You want a scriptable IMOS entrypoint before installing the console command.',
      'You are validating the IMOS integration inside the existing launcher.',
      'You are comparing legacy shell behavior against IMOS orchestration behavior.',
    ],
    related: ['/docs/runtime', '/docs/operations'],
  },
  {
    slug: 'assistant-file',
    label: 'python ai_assistant.py',
    command: 'python ai_assistant.py',
    title: 'Start the original shell from ai_assistant.py.',
    summary: 'Uses the repository entry file directly when you want the original interactive shell.',
    description:
      'This is the direct file-based launcher for the original terminal chat loop and slash-command shell. Use it when you want the shell experience from the repo entry file instead of the one-shot IMOS orchestration path.',
    whenToUse: [
      'You want the interactive shell from the repo entry file.',
      'You need slash commands, provider switching, or the older terminal workflow.',
      'You are documenting the file-based start path alongside the new IMOS command.',
    ],
    notes: ['Use `python ai_assistant.py --imos "<prompt>"` when you want the same file to dispatch into the IMOS orchestrator.'],
    related: ['/docs/authentication', '/docs/operations'],
  },
  {
    slug: 'doctor',
    label: 'python ai_assistant.py --doctor',
    command: 'python ai_assistant.py --doctor',
    title: 'Run the IMOS-aware doctor report from ai_assistant.py.',
    summary: 'Prints adapter health, missing credentials, and MCP install state from the main file launcher.',
    description:
      'The doctor path now includes IMOS-specific checks, so it is the first command to run after installation, adapter changes, or editor integration updates.',
    whenToUse: [
      'You need the fastest diagnostics pass.',
      'You are validating a machine after setup.',
      'You want to see missing credentials and editor MCP install state from one command.',
    ],
    related: ['/docs/operations', '/docs/runtime'],
  },
  {
    slug: 'assistant-shell',
    label: 'python ai_assistant.py shell',
    command: 'python ai_assistant.py',
    title: 'Use the existing interactive shell from ai_assistant.py.',
    summary: 'Starts the original terminal chat loop and slash-command shell that still ships alongside IMOS.',
    description:
      'The repository still has its original interactive shell entrypoint. Use it when you want the live terminal experience, provider switching, workflows, sessions, process inspection, and shell slash commands rather than the one-shot IMOS orchestration path.',
    whenToUse: [
      'You want the original live chat loop and slash-command shell.',
      'You need direct operator control over sessions, tasks, audit, and Git inside one prompt.',
      'You are documenting or supporting the legacy shell while IMOS grows around it.',
    ],
    notes: ['Use `imos run` as the primary orchestration command when you want the new IMOS path.'],
    related: ['/docs/cli/assistant-shell-slash', '/docs/authentication', '/docs/operations'],
  },
  {
    slug: 'assistant-shell-slash',
    label: 'ai_assistant.py shell slash commands',
    command: '/help',
    title: 'Use slash commands inside the ai_assistant.py interactive shell.',
    summary: 'Documents the built-in slash commands available after you launch the shell from ai_assistant.py.',
    description:
      'Inside the existing shell you can still use the runtime command layer for provider inspection, setup, dashboard launch, sessions, tasks, audit, Git, MCP, memory, and workspace management.',
    whenToUse: [
      'You are already inside the interactive shell.',
      'You want to inspect shell-time runtime state without leaving the prompt.',
      'You need the shell operations that are separate from `imos run`.',
    ],
    notes: ['Common commands include `/help`, `/model`, `/provider`, `/skills`, `/workflows`, `/tasks`, `/audit`, `/git`, `/mcp`, `/memory`, `/dashboard`, and `/config`.'],
    related: ['/docs/cli/assistant-shell', '/docs/dashboard', '/docs/operations'],
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
