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
  navLabel?: string
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
    slug: 'start',
    label: 'imos',
    navLabel: 'Start CLI',
    command: 'imos',
    title: 'Start IMOS from any terminal.',
    summary: 'Launches the main IMOS interactive session with one unified runtime.',
    description:
      'This is the primary entrypoint. Start IMOS from any terminal, prompt it directly, and let the central runtime coordinate models, IDEs, browser actions, apps, files, system tasks, and delivery workflows from one command surface.',
    whenToUse: [
      'You want the main IMOS experience instead of one-shot subcommands.',
      'You want one AI runtime that can think dynamically across services and sessions.',
      'You want IMOS to stay the central operator while it coordinates other tools and platforms.',
    ],
    notes: [
      'After installation, `imos` should be available globally from any terminal.',
      'Use the dashboard and adapter controls to connect services without exposing implementation details.',
    ],
    related: ['/docs/installation', '/docs/runtime', '/docs/dashboard'],
  },
  {
    slug: 'run',
    label: 'imos run',
    navLabel: 'Run Prompt',
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
    navLabel: 'Open Dashboard',
    command: 'imos dashboard',
    title: 'Open the IMOS dashboard.',
    summary: 'Launches the IMOS management dashboard for adapters, history, settings, and live output.',
    description:
      'Use this when you want a visual control surface over the IMOS runtime. The dashboard exposes prompt execution, adapter health, configuration, capability discovery, recent task history, and the WebSocket event stream.',
    whenToUse: [
      'You want to manage adapters visually.',
      'You want to watch execution events and recent history while a task runs.',
      'You are validating the dashboard API surface after changes.',
    ],
    notes: ['The dashboard talks to public runtime endpoints such as `/api/status`, `/api/runtime`, `/api/models`, `/api/workflows`, and `/api/events`.'],
    related: ['/docs/dashboard', '/docs/runtime'],
  },
  {
    slug: 'adapters-list',
    label: 'imos adapters list',
    navLabel: 'List Adapters',
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
    navLabel: 'Add Adapter',
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
    navLabel: 'Test Adapter',
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
    navLabel: 'Remove Adapter',
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
    navLabel: 'Task History',
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
    navLabel: 'Runtime Status',
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
    navLabel: 'Install MCP Bridge',
    command: 'imos mcp install',
    title: 'Install IMOS MCP configs for supported editors.',
    summary: 'Registers local editor bridge configs so IMOS can coordinate with supported editors.',
    description:
      'Use this when you want IMOS to work alongside supported editors. The command writes the local bridge configuration so the IMOS runtime can coordinate with editor sessions as part of the larger workflow.',
    whenToUse: [
      'You want IMOS to connect with Cursor or other supported editors.',
      'You have just installed the repo on a new workstation.',
      'You want to repair editor integration after config drift.',
    ],
    related: ['/docs/runtime', '/docs/dashboard'],
  },
  {
    slug: 'wake-install',
    label: 'imos wake install',
    navLabel: 'Install Wake Listener',
    command: 'imos wake install',
    title: 'Install the always-on wake listener.',
    summary: 'Registers the background IMOS wake service and starts it.',
    description:
      'Use this when you want IMOS to listen in the background for wake phrases such as `imos`, `hey imos`, or `hi`, greet the user, and launch the runtime even when the dashboard is not open.',
    whenToUse: [
      'You want voice startup without manually opening the runtime first.',
      'You want IMOS to feel available from the machine itself rather than only from an open window.',
      'You are setting up a workstation for daily voice-driven use.',
    ],
    notes: [
      'The wake service depends on microphone access and the local speech recognition stack.',
      'Use the dashboard permission setup to keep higher-risk actions explicitly gated even when wake listening is enabled.',
    ],
    related: ['/docs/installation', '/docs/dashboard', '/docs/authentication'],
  },
  {
    slug: 'wake-status',
    label: 'imos wake status',
    navLabel: 'Wake Status',
    command: 'imos wake status',
    title: 'Check the wake listener state.',
    summary: 'Shows whether the background wake service is running and whether autostart is installed.',
    description:
      'Use this to verify that the always-on listener is running after installation, login, or machine restart.',
    whenToUse: [
      'You want to confirm the wake service is listening in the background.',
      'You are debugging why wake phrases are not launching IMOS.',
      'You want to verify that login-time startup is configured.',
    ],
    related: ['/docs/installation', '/docs/operations'],
  },
  {
    slug: 'wake-start',
    label: 'imos wake start',
    navLabel: 'Start Wake Listener',
    command: 'imos wake start',
    title: 'Start the wake listener immediately.',
    summary: 'Starts the background wake service without reinstalling it.',
    description: 'Use this when the wake listener is installed but currently stopped and you want IMOS to resume listening for wake phrases right away.',
    whenToUse: [
      'The wake listener was stopped and you want to restart it.',
      'You are testing wake behavior without reinstalling autostart.',
      'You want to resume always-on listening after a manual pause.',
    ],
    related: ['/docs/operations', '/docs/dashboard'],
  },
  {
    slug: 'wake-stop',
    label: 'imos wake stop',
    navLabel: 'Stop Wake Listener',
    command: 'imos wake stop',
    title: 'Stop the wake listener.',
    summary: 'Stops the background wake service.',
    description: 'Use this when you want IMOS to stop listening in the background without removing the autostart configuration.',
    whenToUse: [
      'You want to temporarily disable wake listening.',
      'You are debugging microphone or wake phrase behavior.',
      'You want the runtime available only by manual start commands.',
    ],
    related: ['/docs/operations', '/docs/authentication'],
  },
  {
    slug: 'wake-uninstall',
    label: 'imos wake uninstall',
    navLabel: 'Remove Wake Listener',
    command: 'imos wake uninstall',
    title: 'Remove the wake listener startup config.',
    summary: 'Stops the wake service and removes the login-time autostart registration.',
    description: 'Use this when you no longer want IMOS to start listening automatically after login.',
    whenToUse: [
      'You want to remove always-on wake listening.',
      'You are moving to a different machine setup.',
      'You want a manual-start-only environment.',
    ],
    related: ['/docs/installation', '/docs/operations'],
  },
  {
    slug: 'palette-set',
    label: 'imos palette set',
    navLabel: 'Set Palette',
    command: 'imos palette set --shell ember --dashboard ember',
    title: 'Change the shell and dashboard color palettes.',
    summary: 'Updates the IMOS shell and dashboard palette preferences.',
    description: 'Use this when you want to change the shell look or align the dashboard palette with your preferred operator theme.',
    whenToUse: [
      'You want to personalize the shell design.',
      'You want the dashboard and shell to match a preferred palette.',
      'You are testing different operator themes.',
    ],
    notes: ['Available shell palettes include ember, matrix, ice, and paper.'],
    related: ['/docs/dashboard', '/docs/operations'],
  },
  {
    slug: 'install-wake',
    label: 'imos install wake',
    navLabel: 'Install Wake Alias',
    command: 'imos install wake',
    title: 'Install the wake listener through the generic install surface.',
    summary: 'Alias for wake listener installation.',
    description: 'Use this if you prefer a generic install-oriented command surface for optional IMOS subsystems.',
    whenToUse: [
      'You want a discoverable install command for the wake subsystem.',
      'You are onboarding from the CLI help surface.',
      'You prefer install-style commands over grouped wake commands.',
    ],
    related: ['/docs/installation', '/docs/cli/wake-install'],
  },
  {
    slug: 'install-mcp',
    label: 'imos install mcp',
    navLabel: 'Install MCP Alias',
    command: 'imos install mcp',
    title: 'Install the editor bridge through the generic install surface.',
    summary: 'Alias for editor bridge installation.',
    description: 'Use this if you want the editor bridge installation reachable from the generic install command family.',
    whenToUse: [
      'You want a simpler install command for editor integration.',
      'You are following a terminal setup checklist.',
      'You want a command surface parallel to wake installation.',
    ],
    related: ['/docs/installation', '/docs/cli/mcp-install'],
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
    items: [{ path: '/docs/cli', label: 'CLI Overview' }, ...CLI_COMMAND_DOCS.map((item) => ({ path: `/docs/cli/${item.slug}`, label: item.navLabel ?? item.label }))],
  },
]

export const DOC_GROUPS: DocGroup[] = [...coreDocs, ...cliDocs]

export const DOC_ITEMS: DocItem[] = DOC_GROUPS.flatMap((group) => group.items)

export function getCliCommandDoc(slug: string) {
  return CLI_COMMAND_DOCS.find((item) => item.slug === slug)
}
