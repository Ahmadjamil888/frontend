import { motion, useScroll, useTransform } from 'framer-motion'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle'

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

export function ScrollRevealText({ body }: { body: string }) {
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

export function StatementSection({
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

export function ContentSection({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <section className="flex min-h-screen items-center bg-black px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-[10px] uppercase tracking-[0.24em] text-[#DEDBC8]/65 sm:text-xs">{eyebrow}</div>
          <h2 className="mt-5 text-3xl leading-[0.95] tracking-[-0.05em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-8 text-[#DEDBC8] sm:text-base">{description}</p>
        </div>

        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
