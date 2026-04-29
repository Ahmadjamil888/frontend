import { useEffect, useRef, type ReactNode } from 'react'

const VIDEO_HUMAN =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_090051_64ea5059-da6b-492b-a171-aa7ecc767dc3.mp4'
const VIDEO_AI =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_093237_ff0ddc63-c068-4e29-96da-fdd0e40af133.mp4'

type VideoIconProps = {
  src: string
  size?: number
}

function VideoIcon({ src, size = 72 }: VideoIconProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [])

  return (
    <span
      className="inline-block align-middle rounded-full overflow-hidden"
      style={{
        width: `clamp(48px, 10vw, ${size}px)`,
        height: `clamp(48px, 10vw, ${size}px)`,
        flexShrink: 0,
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        src={src}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </span>
  )
}

function GradientLine({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        display: 'block',
        lineHeight: 1.1,
        marginBottom: '-0.22em',
        background: 'linear-gradient(90deg, #4A4A4A 0%, #F1F1F1 50%, #4A4A4A 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {children}
    </span>
  )
}

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[calc(100vh-76px)] flex-col items-center justify-center overflow-hidden border-b border-white/10 px-4 py-24 sm:px-6 md:py-28"
      style={{ background: '#000' }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_14%,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_18%_0%,rgba(255,255,255,0.05),transparent_22%),radial-gradient(circle_at_85%_10%,rgba(185,185,185,0.08),transparent_20%)]" />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-2 text-center sm:px-4">
        <div className="mb-6 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.26em] text-neutral-300">
          Human operators, model execution, one runtime
        </div>
        <h1
          style={{
            fontFamily: "'YDYoonche L', 'YDYoonche M', sans-serif",
            fontWeight: 300,
            letterSpacing: '-0.03em',
            lineHeight: 1.02,
            color: '#fff',
            fontSize: 'clamp(3.5rem, 9vw, 7rem)',
          }}
        >
          <GradientLine>The vision</GradientLine>
          <GradientLine>of engineering</GradientLine>
          <span className="mt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3" style={{ color: '#fff' }}>
            <span style={{ color: '#8A8A8A' }}>is</span>
            <VideoIcon src={VIDEO_HUMAN} size={110} />
            <span>human</span>
            <span style={{ color: '#8A8A8A', position: 'relative', top: '0.15em', marginLeft: '0.25em' }}>+</span>
            <VideoIcon src={VIDEO_AI} size={110} />
            <span>AI</span>
          </span>
        </h1>

        <p
          className="mt-8 max-w-[42rem] px-2 text-center"
          style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
            color: '#B8B8B8',
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          CONNECT helps teams orchestrate models, tools, memory, and messaging into one operational layer that actually
          ships work.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button
            type="button"
            className="inline-flex min-h-[52px] min-w-[208px] items-center justify-center rounded-[1rem] border border-white bg-white px-7 py-3 text-sm font-semibold text-black shadow-[0_16px_40px_rgba(255,255,255,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-200 active:translate-y-0"
            onClick={() => {
              window.location.href = '/platform'
            }}
          >
            Join The Movement
          </button>
          <a
            href="/docs"
            className="inline-flex min-h-[52px] min-w-[208px] items-center justify-center rounded-[1rem] border border-white/14 bg-white/[0.03] px-7 py-3 text-sm font-medium text-neutral-100 transition hover:border-white/24 hover:bg-white/[0.06] hover:text-white"
          >
            Read the platform docs
          </a>
        </div>
      </div>
    </section>
  )
}
