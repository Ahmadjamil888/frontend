import type { ReactNode } from 'react'

type SectionBlockProps = {
  eyebrow: string
  title: string
  description: string
  children: ReactNode
}

export function SectionBlock({ eyebrow, title, description, children }: SectionBlockProps) {
  return (
    <section className="border-t border-orange-500/10 px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <div>
          <div className="text-[11px] uppercase tracking-[0.28em] text-orange-200/45">{eyebrow}</div>
          <h2 className="mt-5 max-w-lg text-[2.6rem] font-light leading-[1.02] tracking-[-0.05em] text-[#ffd8af] sm:text-[3.2rem]">
            {title}
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-7 text-[#cfb69a]">{description}</p>
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}
