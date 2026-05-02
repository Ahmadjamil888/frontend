import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRef, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { WordsPullUp } from '../components/WordsPullUp'
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle'

function AnimatedLetter({
  char,
  index,
  total,
  scrollYProgress,
}: {
  char: string
  index: number
  total: number
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const charProgress = index / total
  const opacity = useTransform(scrollYProgress, [charProgress - 0.1, charProgress + 0.05], [0.2, 1])

  return (
    <motion.span style={{ opacity }} className="inline-block whitespace-pre">
      {char}
    </motion.span>
  )
}

function FeatureCard({
  children,
  delay = 0,
}: {
  children: ReactNode
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col overflow-hidden rounded-2xl bg-[#212121]"
    >
      {children}
    </motion.div>
  )
}

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4'

const FEATURE_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4'

const ABOUT_BODY =
  'Over the last several years, IMOS has evolved into a controlled operator system for teams that need AI sessions, routing, dashboard visibility, and real execution to stay aligned from prompt to delivery.'
const HOW_IT_WORKS_BODY =
  'IMOS exists to solve AI fragmentation. Instead of bouncing between model tabs, code editors, terminals, and workflows with no continuity, it gives operators one runtime that keeps work, memory, and execution attached.'

const WHY_IT_WINS_BODY =
  'That stack breaks the moment work spans multiple tools, people, and long-running tasks. IMOS is the coordination layer that keeps context persistent, execution visible, and handoffs operational instead of manual.'

const REAL_WORKFLOW_BODY =
  'A practical example makes the runtime click: one launch, multiple models and tools, one shared operational state. This is where IMOS becomes more than atmosphere.'

const FEATURE_SECTIONS = [
  {
    number: '01',
    title: 'Project Storyboard.',
    href: '/platform',
    image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    items: [
      'Map runtime flows and operator objectives',
      'Keep sessions and delivery context attached',
      'Coordinate tools without losing narrative state',
      'Launch from one visible command surface',
    ],
  },
  {
    number: '02',
    title: 'Smart Critiques.',
    href: '/docs',
    image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    items: [
      'AI analysis tied to operator-visible reasoning',
      'Creative notes, revisions, and execution feedback',
      'Tool integrations that remain inspectable',
    ],
  },
  {
    number: '03',
    title: 'Immersion Capsule.',
    href: '/launch',
    image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    items: [
      'Silence noise during active launch windows',
      'Ambient dashboards for long-running sessions',
      'Sync schedules to runtime state and readiness',
    ],
  },
]

const TESTIMONIALS = [
  {
    quote: 'IMOS gave us one place to watch AI work instead of guessing what happened across four tools and six tabs.',
    name: 'Nadia Rahim',
    role: 'Head of Operations, Fieldnorth',
  },
  {
    quote: 'The runtime feels authored, not improvised. Sessions, memory, and launch flow finally move like one system.',
    name: 'Marcus Vale',
    role: 'Creative Systems Lead, Obsidian Works',
  },
  {
    quote: 'We adopted it because the dashboard was visible, the commands were real, and the handoff to execution stayed accountable.',
    name: 'Areeb Hassan',
    role: 'Product Director, Driftline',
  },
]

const FAQS = [
  {
    question: 'What is IMOS actually for?',
    answer: 'IMOS is an operator system that combines CLI control, dashboard visibility, sessions, memory, tools, and runtime execution into one surface.',
  },
  {
    question: 'Can it run locally and still expose a polished frontend?',
    answer: 'Yes. The site handles public narrative and auth, while the local runtime and dashboard remain the execution layer.',
  },
  {
    question: 'Which surfaces are available right now?',
    answer: 'The current product includes the CLI, local dashboard, streaming chat, task and process views, audit logs, memory, skills, and terminal sessions.',
  },
]

function ScrollRevealText({ body }: { body: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })
  const chars = body.split('')

  return (
    <p ref={ref} className="text-xs leading-relaxed text-[#DEDBC8] sm:text-sm md:text-base">
      {chars.map((char, index) => (
        <AnimatedLetter
          key={`${char}-${index}`}
          char={char}
          index={index}
          total={chars.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  )
}

function AboutScrollText() {
  return <ScrollRevealText body={ABOUT_BODY} />
}

function OperatorStatementSection({
  eyebrow,
  segments,
  body,
}: {
  eyebrow: string
  segments: { text: string; className?: string }[]
  body: string
}) {
  return (
    <section className="flex min-h-screen items-center bg-black px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#101010] p-8 text-center md:p-14">
        <div className="mb-8 text-[10px] text-[#DEDBC8]/65 sm:text-xs">{eyebrow}</div>

        <div className="mx-auto mb-10 max-w-3xl text-3xl leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl">
          <WordsPullUpMultiStyle
            segments={segments}
            containerClassName="mx-auto max-w-3xl text-3xl leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
          />
        </div>

        <div className="mx-auto mt-8 max-w-2xl">
          <ScrollRevealText body={body} />
        </div>
      </div>
    </section>
  )
}

export function HomePage() {
  return (
    <div className="overflow-x-hidden bg-black text-white">
      <section id="hero" className="h-screen p-4 md:p-6">
        <div className="relative h-full overflow-hidden rounded-2xl md:rounded-[2rem]">
          <video className="absolute inset-0 h-full w-full object-cover" src={HERO_VIDEO} autoPlay loop muted playsInline />
          <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(242,140,40,0.2),transparent_24%)]" />

          <div className="absolute bottom-0 left-0 right-0 z-10 grid grid-cols-12 items-end px-4 pb-6 md:px-8 md:pb-10">
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="overflow-visible text-[25vw] font-medium leading-[0.92] tracking-[-0.06em] sm:text-[23vw] md:text-[21vw] lg:text-[19vw] xl:text-[18vw] 2xl:text-[19vw]"
                style={{ color: '#E1E0CC' }}
              >
                <WordsPullUp text="IMOS" showAsterisk />
              </h1>
            </div>

            <div className="col-span-12 flex flex-col gap-5 pb-2 lg:col-span-4 lg:pb-4 lg:pl-6">
              <motion.p
                className="text-xs text-[#DEDBC8]/78 sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                IMOS is a cinematic operator network for teams that need sessions, memory, tooling, and delivery to move as one controlled system.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.62, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to="/docs"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#f28c28] pl-5 pr-1.5 py-1.5 text-sm font-medium text-white transition-all sm:text-base"
                >
                  Join the system
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform duration-200 group-hover:scale-[1.06] sm:h-10 sm:w-10">
                    <ArrowRight size={16} className="text-white" />
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <OperatorStatementSection
        eyebrow="How It Works"
        segments={[
          { text: 'From connected inputs', className: 'font-normal' },
          { text: 'to visible execution.', className: 'font-serif italic font-normal' },
        ]}
        body={HOW_IT_WORKS_BODY}
      />

      <section id="about" className="flex min-h-screen items-center bg-black px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#101010] p-8 text-center md:p-14">
          <div className="mb-8 text-[10px] text-[#DEDBC8]/65 sm:text-xs">Operator systems</div>

          <div className="mx-auto mb-10 max-w-3xl text-3xl leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'We build runtime clarity,', className: 'font-normal' },
                { text: 'not vague automation.', className: 'font-serif italic font-normal' },
                { text: 'IMOS is shaped for routing, memory, dashboard control, and launch execution.', className: 'font-normal' },
              ]}
              containerClassName="mx-auto max-w-3xl text-3xl leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
            />
          </div>

          <div className="mx-auto mt-8 max-w-2xl">
            <AboutScrollText />
          </div>
        </div>
      </section>

      <OperatorStatementSection
        eyebrow="Why It Wins"
        segments={[
          { text: 'Why not just use', className: 'font-normal' },
          { text: 'ChatGPT and Cursor separately?', className: 'font-serif italic font-normal' },
        ]}
        body={WHY_IT_WINS_BODY}
      />

      <section id="features" className="relative flex min-h-screen items-center bg-black px-4 py-20 md:px-6 md:py-28">
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Studio-grade workflows for visionary operators.',
                  className: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal',
                },
              ]}
              containerClassName="mb-3 block"
            />
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Built for pure control. Powered by action.',
                  className: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-500',
                },
              ]}
              containerClassName="block"
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:gap-2 md:grid-cols-2 md:gap-1 lg:h-[480px] lg:grid-cols-4">
            <FeatureCard delay={0}>
              <div className="relative min-h-[280px] flex-1 lg:min-h-0">
                <video className="absolute inset-0 h-full w-full object-cover" src={FEATURE_VIDEO} autoPlay loop muted playsInline />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-medium" style={{ color: '#E1E0CC' }}>
                    Your creative canvas.
                  </p>
                </div>
              </div>
            </FeatureCard>

            {FEATURE_SECTIONS.map((section, index) => (
              <FeatureCard key={section.title} delay={0.15 * (index + 1)}>
                <div className="flex h-full flex-col p-6">
                  <img src={section.image} alt="" className="mb-4 h-10 w-10 rounded object-cover sm:h-12 sm:w-12" />
                  <div className="mb-3 flex items-baseline gap-2">
                    <span className="font-mono text-[10px] text-gray-500">{section.number}</span>
                    <h3 className="text-base font-medium" style={{ color: '#E1E0CC' }}>
                      {section.title}
                    </h3>
                  </div>
                  <ul className="flex-1 space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#DEDBC8]" />
                        <span className="text-xs text-[#DEDBC8]/78">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={section.href}
                    className="mt-4 inline-flex items-center gap-1 text-xs text-[#DEDBC8] transition-colors hover:text-white"
                  >
                    Learn more
                    <ArrowRight size={12} style={{ transform: 'rotate(-45deg)' }} />
                  </Link>
                </div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>

      <OperatorStatementSection
        eyebrow="Real Workflow"
        segments={[
          { text: 'One product launch,', className: 'font-normal' },
          { text: 'fully coordinated.', className: 'font-serif italic font-normal' },
        ]}
        body={REAL_WORKFLOW_BODY}
      />

      <section className="flex min-h-screen items-center bg-black px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {[
            ['38', 'Loaded skills across the runtime'],
            ['16+', 'Live API and dashboard endpoints'],
            ['1', 'Unified operating system for AI execution'],
          ].map(([value, label]) => (
            <div key={label} className="rounded-3xl border border-white/8 bg-[#101010] p-8 text-center">
              <div className="text-5xl font-light tracking-[-0.05em]" style={{ color: '#FFFFFF' }}>
                {value}
              </div>
              <div className="mt-3 text-sm text-[#DEDBC8]/72">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex min-h-screen items-center bg-black px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Trusted by teams that need execution to stay visible.',
                  className: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal',
                },
              ]}
              containerClassName="block"
            />
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {TESTIMONIALS.map((item) => (
              <div key={item.name} className="rounded-3xl border border-white/8 bg-[#101010] p-8">
                <p className="text-lg leading-8" style={{ color: '#E1E0CC' }}>
                  {item.quote}
                </p>
                <div className="mt-8">
                  <div className="text-sm font-medium text-[#DEDBC8]">{item.name}</div>
                  <div className="mt-1 text-sm text-white/40">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex min-h-screen items-center bg-black px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#101010] p-8 md:p-12">
          <div className="mb-10 text-center">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Questions before launch.',
                  className: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal',
                },
              ]}
              containerClassName="block"
            />
          </div>

          <div className="space-y-4">
            {FAQS.map((item) => (
              <div key={item.question} className="rounded-2xl border border-white/8 bg-black/30 p-6">
                <div className="text-base font-medium" style={{ color: '#E1E0CC' }}>
                  {item.question}
                </div>
                <p className="mt-3 text-sm leading-7 text-[#DEDBC8]/78">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/launch"
              className="group inline-flex items-center gap-2 rounded-full bg-[#f28c28] pl-5 pr-1.5 py-1.5 text-sm font-medium text-white transition-all sm:text-base"
            >
              Plan your launch
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform duration-200 group-hover:scale-[1.06] sm:h-10 sm:w-10">
                <ArrowRight size={16} className="text-white" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
