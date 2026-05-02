import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './DocsPage.css'

const SIDEBAR_SECTIONS = [
  {
    label: 'Get Started',
    items: [
      { href: '#intro', label: 'Introduction' },
      { href: '#quickstart', label: 'Quickstart' },
      { href: '#install', label: 'Installation' },
      { href: '#auth', label: 'Authentication' },
    ],
  },
  {
    label: 'Core Concepts',
    items: [
      { href: '#sessions', label: 'Sessions' },
      { href: '#routing', label: 'Routing' },
      { href: '#memory', label: 'Memory', badge: 'New' },
      { href: '#skills', label: 'Skills' },
      { href: '#tools', label: 'Tooling' },
    ],
  },
  {
    label: 'Runtime API',
    items: [
      { href: '#api-overview', label: 'Overview' },
      { href: '#api-sessions', label: 'Sessions' },
      { href: '#api-tasks', label: 'Tasks' },
      { href: '#api-memory', label: 'Memory' },
      { href: '#api-audit', label: 'Audit Logs' },
      { href: '#api-stream', label: 'Streaming', badge: 'Beta' },
    ],
  },
  {
    label: 'Dashboard',
    items: [
      { href: '#dashboard', label: 'Overview' },
      { href: '#process', label: 'Process Views' },
      { href: '#terminal', label: 'Terminal Sessions' },
      { href: '#immersion', label: 'Immersion Capsule' },
    ],
  },
  {
    label: 'Integrations',
    items: [
      { href: '#integrations', label: 'All Integrations' },
      { href: '#webhooks', label: 'Webhooks' },
      { href: '#cli', label: 'CLI Reference' },
    ],
  },
  {
    label: 'Reference',
    items: [
      { href: '#errors', label: 'Error Codes' },
      { href: '#limits', label: 'Rate Limits' },
      { href: '#changelog', label: 'Changelog' },
    ],
  },
]

const TOC_ITEMS = [
  { href: '#intro', label: 'Introduction' },
  { href: '#quickstart', label: 'Quickstart' },
  { href: '#install', label: 'Installation' },
  { href: '#auth', label: 'Authentication' },
  { href: '#sessions', label: 'Sessions' },
  { href: '#api-overview', label: 'Runtime API' },
  { href: '#api-sessions', label: 'Create a session' },
  { href: '#memory', label: 'Memory' },
  { href: '#api-stream', label: 'Streaming' },
]

const QUICKSTART_ITEMS = [
  {
    href: '#install',
    variant: 'accent',
    title: 'CLI Setup',
    description: 'Install the runtime and run your first session locally.',
  },
  {
    href: '#api-overview',
    variant: 'glass',
    title: 'API Reference',
    description: 'Integrate IMOS sessions and tasks into your application.',
  },
  {
    href: '#dashboard',
    variant: 'muted',
    title: 'Dashboard',
    description: 'Monitor live sessions, audit logs, and runtime state.',
  },
  {
    href: '#integrations',
    variant: 'base',
    title: 'Integrations',
    description: 'Connect 16+ endpoints and external tools to the runtime.',
  },
]

const SESSION_FEATURES = [
  ['Persistent memory', 'Sessions retain context across requests within a defined scope.'],
  ['Tool attachment', 'Bind specific tools and skill sets to individual sessions.'],
  ['Streaming output', 'Stream tokens and events to clients in real time via SSE.'],
  ['Dashboard visibility', 'Every session event is visible and auditable in the operator dashboard.'],
]

const API_RESOURCES = [
  ['Sessions', '/v1/sessions', 'Stable'],
  ['Tasks', '/v1/tasks', 'Stable'],
  ['Memory', '/v1/memory', 'New'],
  ['Audit Logs', '/v1/audit', 'Stable'],
  ['Streaming', '/v1/sessions/:id/stream', 'Beta'],
  ['Skills', '/v1/skills', 'Stable'],
]

const STATUS_ITEMS = [
  ['Runtime Daemon', 'Operational', 'green'],
  ['Dashboard UI', 'Operational', 'green'],
  ['API Endpoints', 'Operational', 'green'],
  ['Streaming (SSE)', 'Degraded performance', 'amber'],
  ['Memory Store', 'Operational', 'green'],
]

const SCROLL_IDS = ['intro', 'quickstart', 'install', 'auth', 'sessions', 'api-overview', 'api-sessions', 'memory', 'api-stream']

function CodeBlock({
  language,
  code,
}: {
  language: string
  code: string
}) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }

  return (
    <pre className="docs-page__code">
      <div className="docs-page__code-header">
        <span>{language}</span>
        <button type="button" onClick={handleCopy}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <code>{code}</code>
    </pre>
  )
}

export function DocsPage() {
  const [activeSection, setActiveSection] = useState('intro')

  useEffect(() => {
    const onScroll = () => {
      let current = 'intro'

      for (const id of SCROLL_IDS) {
        const element = document.getElementById(id)
        if (element && window.scrollY >= element.offsetTop - 140) {
          current = id
        }
      }

      setActiveSection(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="docs-page">
      <header className="docs-page__topbar">
        <a href="#intro" className="docs-page__brand">
          <span className="docs-page__brand-mark">IM</span>
          <span>IMOS</span>
        </a>

        <div className="docs-page__search" aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="none">
            <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10 10l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span>Search docs</span>
          <span className="docs-page__search-kbd">K</span>
        </div>

        <div className="docs-page__topbar-actions">
          <nav className="docs-page__topnav">
            <Link to="/platform">Platform</Link>
            <Link to="/changelog">Changelog</Link>
            <a href="#system-status">Status</a>
          </nav>
          <Link to="/launch" className="docs-page__launch-button">
            Launch Console
          </Link>
        </div>
      </header>

      <div className="docs-page__layout">
        <aside className="docs-page__sidebar">
          {SIDEBAR_SECTIONS.map((section, sectionIndex) => (
            <div key={section.label} className="docs-page__sidebar-section">
              {sectionIndex > 0 ? <div className="docs-page__sidebar-divider" /> : null}
              <div className="docs-page__sidebar-label">{section.label}</div>
              {section.items.map((item) => {
                const itemId = item.href.replace('#', '')
                const badgeClass =
                  item.badge === 'New' ? 'docs-page__badge docs-page__badge--new' : 'docs-page__badge docs-page__badge--beta'

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`docs-page__sidebar-item ${activeSection === itemId ? 'is-active' : ''}`}
                  >
                    <span>{item.label}</span>
                    {item.badge ? <span className={badgeClass}>{item.badge}</span> : null}
                  </a>
                )
              })}
            </div>
          ))}
        </aside>

        <main className="docs-page__main">
          <div className="docs-page__content">
            <div className="docs-page__breadcrumb">
              <span>Docs</span>
              <span>/</span>
              <span>Introduction</span>
            </div>

            <div className="docs-page__eyebrow">
              <span className="docs-page__eyebrow-dot" />
              IMOS Runtime v2.4
            </div>
            <h1 id="intro">Introduction</h1>
            <p className="docs-page__lead">
              IMOS is a controlled operator system for teams that need AI sessions, routing, dashboard visibility, and
              real execution to stay aligned from prompt to delivery.
            </p>

            <div className="docs-page__divider" />

            <h2 id="quickstart">Quickstart</h2>
            <p>Jump straight into IMOS with a guided path based on your role.</p>

            <div className="docs-page__quickstart-grid">
              {QUICKSTART_ITEMS.map((item) => (
                <a key={item.title} href={item.href} className="docs-page__quickstart-card">
                  <span className={`docs-page__quickstart-icon docs-page__quickstart-icon--${item.variant}`} />
                  <span className="docs-page__quickstart-title">{item.title}</span>
                  <span className="docs-page__quickstart-text">{item.description}</span>
                </a>
              ))}
            </div>

            <div className="docs-page__divider" />

            <h2 id="install">Installation</h2>
            <p>
              IMOS runs locally as a persistent daemon. Install via <code>npm</code> or pull the binary directly.
            </p>

            <div className="docs-page__steps">
              <div className="docs-page__step">
                <div className="docs-page__step-number">1</div>
                <div>
                  <h3>Install the IMOS CLI</h3>
                  <p>Requires Node.js 18 or the self-contained binary for your platform.</p>
                  <CodeBlock
                    language="bash"
                    code={`npm install -g @imos/cli

# or with the binary installer
curl -fsSL https://imos-ai.vercel.app/install.sh | sh`}
                  />
                </div>
              </div>

              <div className="docs-page__step">
                <div className="docs-page__step-number">2</div>
                <div>
                  <h3>Initialize your workspace</h3>
                  <p>Run <code>imos init</code> to scaffold config and connect to the runtime daemon.</p>
                  <CodeBlock
                    language="bash"
                    code={`imos init

Runtime config written to .imos/config.json
Local daemon started on port 7700
Dashboard available at http://localhost:7700`}
                  />
                </div>
              </div>

              <div className="docs-page__step">
                <div className="docs-page__step-number">3</div>
                <div>
                  <h3 id="auth">Authenticate</h3>
                  <p>Log in with your IMOS account to bind the local runtime to your operator dashboard.</p>
                  <CodeBlock
                    language="bash"
                    code={`imos auth login

Opening browser for authentication
Signed in as ahmad.jamil.888.202020@gmail.com
Runtime token cached in ~/.imos/credentials`}
                  />
                </div>
              </div>

              <div className="docs-page__step">
                <div className="docs-page__step-number">4</div>
                <div>
                  <h3>Start your first session</h3>
                  <p>Launch an operator session. All actions are streamed to the dashboard in real time.</p>
                  <CodeBlock
                    language="bash"
                    code={`imos session start --name "my-first-session"

Session ID: sess_01j9x3n8k2qr7f
Memory: initialized (persistent)
Skills loaded: 38
Waiting for input`}
                  />
                </div>
              </div>
            </div>

            <div className="docs-page__divider" />

            <h2>Authentication</h2>
            <p>
              All IMOS API requests require a bearer token passed in the <code>Authorization</code> header. Tokens are
              scoped to a workspace and can be rotated from the dashboard.
            </p>

            <div className="docs-page__callout docs-page__callout--info">
              <strong>Token scoping:</strong>
              <span>
                API tokens inherit the permissions of the operator account that created them. Use scoped tokens for
                CI/CD pipelines to limit access to specific resources.
              </span>
            </div>

            <CodeBlock
              language="typescript"
              code={`import { IMOSClient } from '@imos/sdk'

const client = new IMOSClient({
  apiKey: 'imos_sk_...',
  workspace: 'ws_01j9x...',
  baseURL: 'http://localhost:7700',
})`}
            />

            <div className="docs-page__divider" />

            <h2 id="sessions">Sessions</h2>
            <p>
              A <strong>session</strong> is the primary unit of execution in IMOS. Each session carries its own memory
              context, active tools, and routing state. Sessions persist until explicitly closed or until the configured
              TTL expires.
            </p>

            <div className="docs-page__feature-grid">
              {SESSION_FEATURES.map(([title, text]) => (
                <div key={title} className="docs-page__feature-card">
                  <div className="docs-page__feature-title">{title}</div>
                  <div className="docs-page__feature-text">{text}</div>
                </div>
              ))}
            </div>

            <div className="docs-page__divider" />

            <h2 id="api-overview">Runtime API</h2>
            <p>
              The IMOS REST API exposes all runtime primitives over HTTP. The base URL for hosted deployments is{' '}
              <code>https://api.imos-ai.vercel.app/v1</code>. For local deployments the default is{' '}
              <code>http://localhost:7700/v1</code>.
            </p>

            <div className="docs-page__table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Resource</th>
                    <th>Endpoint</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {API_RESOURCES.map(([resource, endpoint, status]) => (
                    <tr key={resource}>
                      <td>{resource}</td>
                      <td>
                        <code>{endpoint}</code>
                      </td>
                      <td>
                        <span
                          className={`docs-page__inline-badge ${
                            status === 'Stable'
                              ? 'is-stable'
                              : status === 'Beta'
                                ? 'is-beta'
                                : 'is-new'
                          }`}
                        >
                          {status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 id="api-sessions">Create a Session</h3>
            <div className="docs-page__endpoint">
              <span className="docs-page__method docs-page__method--post">POST</span>
              <span>/v1/sessions</span>
            </div>

            <p>
              Creates a new operator session. Returns a session object with a unique <code>id</code> that must be
              included in subsequent requests within that session.
            </p>

            <h3>Request body</h3>
            <div className="docs-page__params">
              <div className="docs-page__param">
                <div className="docs-page__param-head">
                  <span className="docs-page__param-name">name</span>
                  <span className="docs-page__param-type">string</span>
                  <span className="docs-page__param-required">required</span>
                </div>
                <p>A human-readable name for this session. Used in the dashboard and audit logs.</p>
              </div>
              <div className="docs-page__param">
                <div className="docs-page__param-head">
                  <span className="docs-page__param-name">memory</span>
                  <span className="docs-page__param-type">object</span>
                </div>
                <p>
                  Memory configuration. Set <code>persistent: true</code> to retain context across process restarts.
                  Defaults to ephemeral.
                </p>
              </div>
              <div className="docs-page__param">
                <div className="docs-page__param-head">
                  <span className="docs-page__param-name">skills</span>
                  <span className="docs-page__param-type">string[]</span>
                </div>
                <p>Array of skill slugs to attach at session creation. Omit to load all skills.</p>
              </div>
              <div className="docs-page__param">
                <div className="docs-page__param-head">
                  <span className="docs-page__param-name">ttl</span>
                  <span className="docs-page__param-type">number</span>
                </div>
                <p>
                  Session TTL in seconds. Session will be automatically terminated after this duration of inactivity.
                  Default: <code>3600</code>.
                </p>
              </div>
            </div>

            <CodeBlock
              language="typescript"
              code={`const session = await client.sessions.create({
  name: 'launch-pipeline',
  memory: { persistent: true, scope: 'workspace' },
  skills: ['web-search', 'code-exec', 'file-ops'],
  ttl: 7200,
})

// session.id = 'sess_01j9x3n8k2qr7f'
// session.status = 'active'`}
            />

            <div className="docs-page__callout docs-page__callout--warning">
              <strong>Concurrent sessions:</strong>
              <span>
                Free tier workspaces are limited to 3 concurrent active sessions. Upgrade to Team or Enterprise to
                increase this limit. See <a href="#limits">Rate Limits</a>.
              </span>
            </div>

            <div className="docs-page__divider" />

            <h2 id="memory">Memory</h2>
            <p>
              IMOS memory stores structured context that persists across session boundaries. Memory entries are
              namespaced, versioned, and visible in the dashboard. They can be queried semantically or by key.
            </p>

            <CodeBlock
              language="typescript"
              code={`await client.memory.set({
  sessionId: session.id,
  key: 'project.brief',
  value: { title: 'Q3 Launch', deadline: '2026-07-01' },
  ttl: 604800,
})

const brief = await client.memory.get('project.brief')
const results = await client.memory.search('project deadlines', { topK: 5 })`}
            />

            <div className="docs-page__callout docs-page__callout--tip">
              <strong>Memory namespacing:</strong>
              <span>
                Use dot-notation keys like <code>project.brief</code> or <code>user.preferences.theme</code> for
                organized, queryable memory trees.
              </span>
            </div>

            <div className="docs-page__divider" />

            <h2 id="api-stream">
              Streaming <span className="docs-page__inline-badge is-beta">Beta</span>
            </h2>
            <p>IMOS supports Server-Sent Events (SSE) for streaming session output in real time.</p>

            <div className="docs-page__endpoint">
              <span className="docs-page__method docs-page__method--get">GET</span>
              <span>/v1/sessions/:id/stream</span>
            </div>

            <CodeBlock
              language="typescript"
              code={`const stream = await client.sessions.stream(session.id)

for await (const event of stream) {
  switch (event.type) {
    case 'token':
      process.stdout.write(event.delta)
      break
    case 'tool_call':
      console.log('tool:', event.tool, event.input)
      break
    case 'done':
      break
  }
}`}
            />

            <div className="docs-page__divider" />

            <h2 id="system-status">System Status</h2>
            <p>Current operational status of all IMOS runtime surfaces.</p>

            <div className="docs-page__status-card">
              {STATUS_ITEMS.map(([name, state, tone]) => (
                <div key={name} className="docs-page__status-row">
                  <span>{name}</span>
                  <span className="docs-page__status-value">
                    <span className={`docs-page__status-dot docs-page__status-dot--${tone}`} />
                    {state}
                  </span>
                </div>
              ))}
            </div>

            <div className="docs-page__pagination">
              <span />
              <a href="#sessions" className="docs-page__page-link">
                <span>Next</span>
                <strong>Sessions in depth</strong>
              </a>
            </div>
          </div>

          <nav className="docs-page__toc">
            <div className="docs-page__toc-label">On this page</div>
            {TOC_ITEMS.map((item) => {
              const itemId = item.href.replace('#', '')

              return (
                <a key={item.href} href={item.href} className={activeSection === itemId ? 'is-active' : ''}>
                  {item.label}
                </a>
              )
            })}
          </nav>
        </main>
      </div>
    </div>
  )
}
