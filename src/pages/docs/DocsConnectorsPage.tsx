import { DocsShell } from '../../components/DocsShell'

export function DocsConnectorsPage() {
  return (
    <DocsShell
      title="Connectors only matter if they remain visible and accountable."
      description="The new IMOS adapter layer now exposes messaging, meeting, Git, webapp, payment, and OS connectors through one registry, so their behavior stays visible from both the CLI and dashboard."
      eyebrow="Connectors"
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-300">
        <p>
          IMOS now supports multiple adapter families: model providers, IDE integrations, messaging platforms, meeting
          services, VCS hosts, web-app APIs, payment gateways, browser automation, and OS control.
        </p>
        <p>
          Messaging connectors include Slack, Discord, Telegram, WhatsApp, Email, Teams, Signal, Matrix, IRC,
          Mattermost, and Rocket.Chat. The same runtime also exposes Zoom, Google Meet, Calendly, GitHub, GitLab,
          Bitbucket, Notion, Airtable, Google Workspace, Stripe, PayPal, Docker, SSH, and generic REST adapters.
        </p>
      </div>
    </DocsShell>
  )
}
