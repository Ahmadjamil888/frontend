import { SignInButton, useAuth } from '@clerk/react'
import HeroSection from '../components/HeroSection'
import { SectionBlock } from '../components/SectionBlock'
import { brandPanelStrongClass, brandPrimaryButtonClass, brandSecondaryButtonClass, brandStatusClass } from '../components/brandTheme'

type HomePageProps = {
  dashboardUrl: string
}

const logoStrip = ['stripe', 'OpenAI', 'Linear', 'Datadog', 'NVIDIA', 'Figma', 'ramp', 'Adobe']

const showcaseRows = [
  {
    eyebrow: 'Mission Control',
    title: 'Agents turn ideas into delivery while operators keep the full picture.',
    body: 'The runtime carries memory, sessions, typed tools, and execution state in one visible system so work can keep moving without collapsing into disconnected scripts.',
    accent: 'Learn about the runtime loop',
    align: 'left' as const,
  },
  {
    eyebrow: 'Autonomy',
    title: 'Background work, review loops, and orchestration stay legible under pressure.',
    body: 'Parallel flows run cleanly, return results into visible sessions, and preserve accountability instead of disappearing into hidden backend jobs.',
    accent: 'See the operator model',
    align: 'right' as const,
  },
  {
    eyebrow: 'Precision',
    title: 'Tools, docs, messaging, and shell actions feel like one product surface.',
    body: 'Every invocation has structure, context, and a result path, which makes the browser, runtime, and shell feel intentionally connected.',
    accent: 'Explore the tool fabric',
    align: 'left' as const,
  },
]

const storyCards = [
  {
    title: 'Agents turn ideas into code',
    text: 'Accelerate development by handling all tasks. Codex-style workflows now present as a product instead of a loose terminal stack.',
  },
  {
    title: 'Works autonomously, runs in parallel',
    text: 'Launch sessions, background workflows, and operator handoffs without losing the surrounding context or delivery state.',
  },
  {
    title: 'Magically accurate autocomplete',
    text: 'Predictable UI, strong information hierarchy, and fast navigation make the product feel sharper at every layer.',
  },
]

const featureQuotes = [
  'Your infrastructure should not look improvised when the runtime is serious.',
  'The fastest way to lose trust is to hide execution behind vague status.',
  'Good product design makes the operator calm before it makes them impressed.',
]

function MockWindow({
  title,
  lines,
}: {
  title: string
  lines: string[]
}) {
  return (
    <div className={`${brandPanelStrongClass} p-4`}>
      <div className="rounded-[1.3rem] border border-white/8 bg-[#0b0b0b] p-5">
        <div className="flex items-center justify-between border-b border-white/8 pb-4">
          <div className="text-sm text-neutral-200">{title}</div>
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
          </div>
        </div>
        <div className="mt-5 grid gap-3">
          {lines.map((line, index) => (
            <div key={line} className="rounded-2xl border border-white/7 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-neutral-300">
              <div className="flex items-start gap-3">
                <span className={`mt-2 h-2 w-2 rounded-full ${index === 0 ? 'bg-white' : 'bg-white/35'}`} />
                <span>{line}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ShowcaseBand({
  eyebrow,
  title,
  body,
  accent,
  align,
}: {
  eyebrow: string
  title: string
  body: string
  accent: string
  align: 'left' | 'right'
}) {
  const text = (
    <div className="order-2 flex flex-col justify-center lg:order-none">
      <div className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">{eyebrow}</div>
      <h3 className="mt-5 max-w-md text-[2.2rem] font-light leading-[1.02] tracking-[-0.05em] text-white sm:text-[2.8rem]">
        {title}
      </h3>
      <p className="mt-5 max-w-md text-[15px] leading-7 text-neutral-400">{body}</p>
      <div className="mt-6 inline-flex items-center gap-3 text-sm text-white">
        <span className="h-px w-10 bg-white/20" />
        {accent}
      </div>
    </div>
  )

  const preview = (
    <MockWindow
      title={eyebrow}
      lines={[
        'Import operator context and handoff rules',
        'Start parallel task execution with visible routing',
        'Return summaries, files, and traceable outcomes',
        'Keep browser, runtime, and shell in sync',
      ]}
    />
  )

  return (
    <section className="border-t border-white/8 px-4 py-18 sm:px-6 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        {align === 'left' ? text : preview}
        {align === 'left' ? preview : text}
      </div>
    </section>
  )
}

export function HomePage({ dashboardUrl }: HomePageProps) {
  const { isSignedIn } = useAuth()

  return (
    <div className="bg-[#050505]">
      <HeroSection />

      <section className="border-t border-white/8 px-4 py-10 sm:px-6 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center text-[11px] uppercase tracking-[0.28em] text-neutral-500">
            Trusted by teams building production systems
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
            {logoStrip.map((name) => (
              <div
                key={name}
                className="flex min-h-14 items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] px-3 text-sm text-neutral-200"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {showcaseRows.map((row) => (
        <ShowcaseBand key={row.title} {...row} />
      ))}

      <SectionBlock
        eyebrow="Operator Flow"
        title="The public site, sign-in, and runtime handoff now feel like one path."
        description="The browser layer explains the product cleanly, Clerk handles identity, and the operator dashboard takes over only when the user is ready for real execution."
      >
        <div className={`${brandPanelStrongClass} p-6 sm:p-8`}>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[1.25rem] border border-white/8 bg-black/30 p-6">
              <div className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">Frontend</div>
              <div className="mt-4 text-2xl font-light tracking-[-0.04em] text-white">Vercel-hosted sign-in and story surface</div>
              <p className="mt-4 text-[15px] leading-7 text-neutral-400">
                Users arrive through a clear landing page, navigate sections that actually scan well on mobile, and move into sign-in without friction.
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-white/8 bg-black/30 p-6">
              <div className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">Backend</div>
              <div className="mt-4 text-2xl font-light tracking-[-0.04em] text-white">Authenticated dashboard and local control plane</div>
              <p className="mt-4 text-[15px] leading-7 text-neutral-400">
                The backend validates identity, stores local session state, and unlocks workflows, tools, nodes, and operator context without breaking continuity.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={dashboardUrl} target="_blank" rel="noreferrer" className={brandPrimaryButtonClass}>
              Open operator dashboard
            </a>
            {!isSignedIn ? (
              <SignInButton mode="modal">
                <button className={brandSecondaryButtonClass}>Sign in first</button>
              </SignInButton>
            ) : (
              <div className={brandStatusClass}>Signed in. Operator handoff is ready.</div>
            )}
          </div>
        </div>
      </SectionBlock>

      <section className="border-t border-white/8 px-4 py-18 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {storyCards.map((card, index) => (
              <article key={card.title} className={`${brandPanelStrongClass} p-5`}>
                <div className="mb-5 rounded-[1.2rem] border border-white/8 bg-[#111111] p-4">
                  <div className="grid h-52 gap-3">
                    <div className="rounded-2xl border border-white/7 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
                    <div className={`grid gap-3 ${index === 1 ? 'grid-cols-[1.2fr_0.8fr]' : 'grid-cols-2'}`}>
                      <div className="rounded-2xl border border-white/7 bg-white/[0.04]" />
                      <div className="rounded-2xl border border-white/7 bg-white/[0.025]" />
                    </div>
                  </div>
                </div>
                <h3 className="text-[1.55rem] font-light tracking-[-0.04em] text-white">{card.title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-neutral-400">{card.text}</p>
                <div className="mt-6 text-sm text-[#ff8d47]">Learn about design →</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 px-4 py-18 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center text-[11px] uppercase tracking-[0.28em] text-neutral-500">Why this works</div>
          <h2 className="mt-5 text-center text-[2.7rem] font-light leading-[1.02] tracking-[-0.06em] text-white sm:text-[4rem]">
            The new way to build software.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {featureQuotes.map((quote, index) => (
              <article key={quote} className={`${brandPanelStrongClass} p-7`}>
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm text-white">
                  0{index + 1}
                </div>
                <p className="mt-5 text-[15px] leading-7 text-neutral-300">{quote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 px-4 py-18 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">Changelog</div>
            <h2 className="mt-5 text-[2.6rem] font-light leading-[1.02] tracking-[-0.05em] text-white sm:text-[3.2rem]">
              Live product momentum.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-7 text-neutral-400">
              Recent work across identity, shell flow, runtime orchestration, and product surfaces, grouped so motion is visible at a glance.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['Apr 26, 2026', 'Website redesign with responsive navigation and glass hero composition'],
              ['Apr 26, 2026', 'Clerk-backed browser and CLI handoff into operator runtime'],
              ['Apr 26, 2026', 'Messaging, workflows, nodes, and dashboard control plane'],
            ].map(([date, text]) => (
              <article key={text} className={`${brandPanelStrongClass} p-6`}>
                <div className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">{date}</div>
                <div className="mt-4 text-[15px] leading-7 text-neutral-300">{text}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
