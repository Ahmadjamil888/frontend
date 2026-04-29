import type { ReactNode } from 'react'

type SectionBlockProps = {
  eyebrow: string
  title: string
  description: string
  children: ReactNode
}

export function SectionBlock({ eyebrow, title, description, children }: SectionBlockProps) {
  return (
    <section className="border-t border-white/10 px-4 py-24 sm:px-5 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500">{eyebrow}</div>
          <h2 className="mt-5 max-w-lg text-4xl font-light tracking-[-0.05em] text-white md:text-6xl">{title}</h2>
          <p className="mt-5 max-w-lg text-base leading-8 text-neutral-300">{description}</p>
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}
