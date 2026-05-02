import { ContentSection, StatementSection } from '../components/MarketingSections'
import { brandPanelStrongClass } from '../components/brandTheme'

const entries = [
  {
    date: 'April 26, 2026',
    title: 'Docs navigation, code copy blocks, and changelog surface',
    text: 'The frontend now has dedicated docs routes, reusable code blocks with copy actions, and a fuller product information surface.',
  },
  {
    date: 'April 26, 2026',
    title: 'Vercel Clerk bridge for CLI login',
    text: 'CLI sign-in now redirects to the deployed Vercel frontend and returns to the local runtime through a localhost callback.',
  },
  {
    date: 'April 26, 2026',
    title: 'Dashboard, gateway, sessions, workflows, and connectors',
    text: 'The operator stack now includes a real dashboard surface, runtime orchestration, messaging connectors, and service-oriented launch paths.',
  },
]

export function ChangelogPage() {
  return (
    <div className="bg-black">
      <StatementSection
        eyebrow="Changelog"
        segments={[
          { text: 'Product momentum,', className: 'font-normal' },
          { text: 'captured in public.', className: 'font-serif italic font-normal' },
        ]}
        body="This page tracks visible improvements to the frontend, auth flow, launcher behavior, dashboard surface, and runtime-facing product layers."
      />

      <ContentSection
        eyebrow="Entries"
        title="Visible changes, release by release."
        description="The public changelog should read like the product itself: direct, controlled, and tied to real system behavior instead of vague marketing noise."
      >
        <div className="space-y-5">
          {entries.map((entry, index) => (
            <article key={entry.title} className={`${brandPanelStrongClass} p-7`}>
              <div className="flex flex-wrap items-center gap-4">
                <div className="text-xs font-medium uppercase tracking-[0.16em] text-[#DEDBC8]/55">{entry.date}</div>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-[0.8rem] border border-white/10 bg-white/[0.04] text-xs text-white">
                  0{index + 1}
                </span>
              </div>
              <h2 className="mt-5 text-2xl font-medium text-white">{entry.title}</h2>
              <p className="mt-4 text-[15px] leading-7 text-[#DEDBC8]">{entry.text}</p>
            </article>
          ))}
        </div>
      </ContentSection>
    </div>
  )
}
