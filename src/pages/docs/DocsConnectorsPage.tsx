import { DocsShell } from '../../components/DocsShell'

export function DocsConnectorsPage() {
  return (
    <DocsShell
      title="Connectors only matter if they remain visible and accountable."
      description="The IMOS adapter layer exposes messaging, meeting, Git, webapp, payment, deployment, workflow, and OS connectors through one registry so their behavior stays visible from both the CLI and dashboard."
      eyebrow="Connectors"
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-300">
        <p>
          IMOS supports multiple adapter families: model providers, IDE integrations, messaging platforms, meeting
          services, VCS hosts, web-app APIs, payment gateways, deployment targets, browser automation, workflows, and
          OS control.
        </p>
        <p>
          Connector coverage includes Slack, Discord, Telegram, WhatsApp, Email, Teams, Signal, Matrix, IRC,
          Mattermost, Rocket.Chat, Zoom, Google Meet, Calendly, GitHub, GitLab, Bitbucket, Notion, Airtable, Jira,
          Trello, Linear, Asana, Google Workspace, Microsoft 365, Stripe, PayPal, Docker, SSH, and generic REST
          adapters.
        </p>
      </div>
    </DocsShell>
  )
}
