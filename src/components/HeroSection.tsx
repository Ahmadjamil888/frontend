import { Link } from 'react-router-dom'
import { brandPrimaryButtonClass, brandSecondaryButtonClass } from './brandTheme'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-18 pt-10 sm:px-6 md:pb-24 md:pt-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-[18%] top-0 h-full border-l border-r border-white/[0.04]" />
        <div className="absolute left-[-8%] top-[8%] h-44 w-44 rounded-full border border-white/16 opacity-70 blur-[1px]" />
        <div className="absolute right-[-6%] top-[7%] h-44 w-44 rounded-full border border-white/16 opacity-70 blur-[1px]" />
        <div className="absolute bottom-[-14rem] left-[-12rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(225,239,247,0.95),rgba(195,210,219,0.28)_38%,rgba(255,255,255,0)_72%)] opacity-95 blur-[10px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_72%_26%,rgba(255,255,255,0.04),transparent_18%),radial-gradient(circle_at_27%_76%,rgba(255,255,255,0.035),transparent_22%)]" />
        <div className="absolute inset-0 opacity-55 [background-image:radial-gradient(rgba(255,255,255,0.42)_0.55px,transparent_0.55px)] [background-size:26px_26px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] px-5 py-18 shadow-[0_45px_120px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:px-8 md:min-h-[720px] md:px-12 md:py-24">
          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-neutral-300">
              Tomorrow. Build. Ship.
            </div>
            <h1 className="mt-14 max-w-2xl text-[2.7rem] font-light leading-[0.96] tracking-[-0.06em] text-white sm:text-[4rem] md:text-[4.65rem]">
              Shaping tomorrow
              <br />
              with vision and action.
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
              We build interfaces and control systems that feel bold, coherent, and ready to execute.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <Link to="/launch" className={`${brandPrimaryButtonClass} min-w-[10rem]`}>
                Start a chat
              </Link>
              <Link to="/platform" className={`${brandSecondaryButtonClass} min-w-[10rem]`}>
                Explore now
              </Link>
            </div>
            <div className="mt-14 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-neutral-300 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              Innovation. Vision. Action.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
