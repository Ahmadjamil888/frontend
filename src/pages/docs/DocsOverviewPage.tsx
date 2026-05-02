import { DocsShell } from '../../components/DocsShell'

export function DocsOverviewPage() {
  return (
    <DocsShell
      title="Everything needed to install, authenticate, operate, and extend IMOS."
      description="This section is split into real pages so operators can move directly to the exact part of the system they need without scrolling through one oversized document."
      eyebrow="Overview"
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-300">
        <p>
          IMOS combines a public frontend, a browser-authenticated entry flow, a local or cloud gateway, and an AI
          runtime that manages sessions, memory, tools, messaging, workflows, and delivery.
        </p>
        <p>
          The frontend is intentionally separate from the runtime. That lets you host the site publicly, handle sign-in
          on the web, and then bridge the user into the local or cloud dashboard only when they are ready
          to operate the system.
        </p>
        <p>
          The backend is where actual work happens. It owns the gateway server, operator dashboard, orchestration jobs,
          node pairing state, messaging connectors, workflow triggers, and the local session established after
          verification.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Public frontend', 'Landing pages, docs, changelog, sign-in, and the Vercel-hosted browser surface.'],
            ['Operator backend', 'Dashboard, gateway, workflows, memory, sessions, connectors, and service mode.'],
            ['Identity bridge', 'Browser sign-in on the web and verified session handoff back into the local CLI or dashboard session.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
              <h2 className="text-xl text-white">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </DocsShell>
  )
}
