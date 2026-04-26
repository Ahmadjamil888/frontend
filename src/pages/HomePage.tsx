import { SignInButton, useAuth } from '@clerk/react'
import HeroSection from '../components/HeroSection'
import { SectionBlock } from '../components/SectionBlock'

type HomePageProps = {
  dashboardUrl: string
}

const platformCards = [
  {
    title: 'Gateway control plane',
    text: 'One entrypoint for sessions, memory, workflows, and real connectors across local and cloud runtime modes.',
  },
  {
    title: 'Typed tools with state',
    text: 'Files, runtime, browser, canvas, messaging, nodes, and workflows share one stateful operator context.',
  },
  {
    title: 'Launch-oriented auth',
    text: 'Clerk-backed browser sign-in for the dashboard, protected webhook triggers, and operator entry from CLI.',
  },
]

const channelRows = [
  'Telegram, Slack webhook mode, Slack bot mode, Discord webhooks, and Twilio-style WhatsApp paths.',
  'Workflow webhooks and scheduled jobs can drive autonomous execution without opening the CLI.',
  'Dashboard and frontend stay separated so the marketing layer and operator control plane can evolve independently.',
]

export function HomePage({ dashboardUrl }: HomePageProps) {
  const { isSignedIn } = useAuth()

  return (
    <div className="bg-black">
      <HeroSection />

      <SectionBlock
        eyebrow="Platform"
        title="Built to ship operations, not demos"
        description="CONNECT is structured as a launch system: operator dashboard, gateway runtime, workflows, messaging, and authenticated control surfaces."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {platformCards.map((card) => (
            <article key={card.title} className="rounded-3xl border border-white/8 bg-white/[0.03] p-6">
              <h3 className="text-xl font-medium text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-400">{card.text}</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow="Channels"
        title="A front door for every operator surface"
        description="The runtime already exposes a broader connector surface than a plain coding shell. The frontend positions that system clearly for teams evaluating deployment."
      >
        <div className="space-y-4">
          {channelRows.map((row) => (
            <div key={row} className="rounded-3xl border border-white/8 bg-[#08110d] p-5 text-sm leading-6 text-neutral-300">
              {row}
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow="Launch"
        title="Take the operator from browser to backend in one motion"
        description="Use the frontend as the public-facing entrypoint, then hand the user into the authenticated operator dashboard when they are ready to run real work."
      >
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-[#0b1713] p-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-medium text-white">Operator handoff</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              Signed-in users can jump straight into the backend dashboard. If the backend session is missing, the Clerk login bridge on the operator side completes the handoff.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={dashboardUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#27F3A9] px-5 py-3 text-sm font-medium text-black transition hover:brightness-110"
            >
              Open Operator Dashboard
            </a>
            {!isSignedIn ? (
              <SignInButton mode="modal">
                <button className="rounded-full border border-white/10 px-5 py-3 text-sm text-white transition hover:border-[#27F3A9]/50">
                  Sign in first
                </button>
              </SignInButton>
            ) : (
              <div className="rounded-full border border-[#27F3A9]/25 px-5 py-3 text-sm text-[#9af6d0]">
                Signed in. Dashboard bridge is ready.
              </div>
            )}
          </div>
        </div>
      </SectionBlock>
    </div>
  )
}
