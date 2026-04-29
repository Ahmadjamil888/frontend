import { SignInButton, SignUpButton } from '@clerk/react'
import { ArrowRight, Camera, Globe, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BrandLogo } from '../components/BrandLogo'

type HomePageProps = {
  dashboardUrl: string
}

const HERO_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4'

const FADE_DURATION_MS = 500
const LOOP_RESET_DELAY_MS = 100
const FADE_OUT_LEAD_SECONDS = 0.55

export function HomePage({ dashboardUrl }: HomePageProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const opacityRef = useRef(0)
  const animationFrameRef = useRef<number | null>(null)
  const restartTimeoutRef = useRef<number | null>(null)
  const fadingOutRef = useRef(false)

  useEffect(() => {
    const video = videoRef.current

    if (!video) {
      return
    }

    const cancelActiveAnimation = () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
    }

    const setOpacity = (value: number) => {
      const nextOpacity = Math.max(0, Math.min(1, value))
      opacityRef.current = nextOpacity
      video.style.opacity = String(nextOpacity)
    }

    const fadeTo = (targetOpacity: number, durationMs: number, onComplete?: () => void) => {
      cancelActiveAnimation()

      const startOpacity = opacityRef.current
      const delta = targetOpacity - startOpacity
      const startTime = performance.now()

      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / durationMs, 1)
        setOpacity(startOpacity + delta * progress)

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(tick)
          return
        }

        animationFrameRef.current = null
        onComplete?.()
      }

      animationFrameRef.current = requestAnimationFrame(tick)
    }

    const handleLoadedData = () => {
      fadingOutRef.current = false
      void video.play().catch(() => {})
      fadeTo(1, FADE_DURATION_MS)
    }

    const handleTimeUpdate = () => {
      if (fadingOutRef.current || !Number.isFinite(video.duration)) {
        return
      }

      const remaining = video.duration - video.currentTime
      if (remaining <= FADE_OUT_LEAD_SECONDS) {
        fadingOutRef.current = true
        fadeTo(0, FADE_DURATION_MS)
      }
    }

    const handleEnded = () => {
      cancelActiveAnimation()
      setOpacity(0)

      if (restartTimeoutRef.current !== null) {
        window.clearTimeout(restartTimeoutRef.current)
      }

      restartTimeoutRef.current = window.setTimeout(() => {
        video.currentTime = 0
        fadingOutRef.current = false
        void video.play().catch(() => {})
        fadeTo(1, FADE_DURATION_MS)
      }, LOOP_RESET_DELAY_MS)
    }

    setOpacity(0)
    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleEnded)

    return () => {
      cancelActiveAnimation()
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleEnded)

      if (restartTimeoutRef.current !== null) {
        window.clearTimeout(restartTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="min-h-screen overflow-hidden bg-black">
      <div className="relative flex min-h-screen flex-col">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full translate-y-[17%] object-cover"
            src={HERO_VIDEO_URL}
            muted
            autoPlay
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_38%),linear-gradient(180deg,rgba(0,0,0,0.62),rgba(0,0,0,0.34)_35%,rgba(0,0,0,0.76))]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.4),transparent_18%,transparent_82%,rgba(0,0,0,0.4))]" />
        </div>

        <nav className="relative z-20 px-4 py-4 sm:px-6 sm:py-6">
          <div className="liquid-glass mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-[2rem] px-4 py-3 sm:rounded-full sm:px-6">
            <div className="flex items-center gap-6 sm:gap-8">
              <Link to="/" className="flex items-center">
                <BrandLogo className="text-base sm:text-lg" />
              </Link>

              <div className="hidden items-center gap-8 md:flex">
                <Link to="/platform" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
                  Features
                </Link>
                <Link to="/docs" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
                  Docs
                </Link>
                <Link to="/about" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
                  About
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <SignUpButton mode="modal">
                <button type="button" className="px-1 text-sm font-medium text-white sm:px-0">
                  Sign Up
                </button>
              </SignUpButton>
              <SignInButton mode="modal">
                <button
                  type="button"
                  className="liquid-glass rounded-full px-4 py-2 text-sm font-medium text-white sm:px-6"
                >
                  Login
                </button>
              </SignInButton>
            </div>
          </div>
        </nav>

        <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-20 pt-12 text-center sm:pt-16 md:pb-24 md:pt-20">
          <h1
            className="mb-8 max-w-[11ch] text-4xl leading-[0.95] tracking-tight text-white sm:text-5xl md:max-w-none md:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Built for the curious
          </h1>

          <div className="w-full max-w-xl space-y-6">
            <p className="px-4 text-sm leading-relaxed text-white">
              Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on
              exciting updates.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <SignUpButton mode="modal">
                <button
                  type="button"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black sm:w-auto"
                >
                  Get Started
                  <ArrowRight size={18} />
                </button>
              </SignUpButton>
              <Link
                to="/docs"
                className="liquid-glass inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5 sm:w-auto"
              >
                Explore Docs
              </Link>
              <a
                href={dashboardUrl}
                target="_blank"
                rel="noreferrer"
                className="liquid-glass inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5 sm:w-auto"
              >
                Manifesto
              </a>
            </div>
          </div>
        </main>

        <footer className="relative z-10 flex flex-wrap justify-center gap-4 px-6 pb-10 sm:pb-12">
          <button
            type="button"
            aria-label="Instagram"
            className="liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
          >
            <Camera size={20} />
          </button>
          <button
            type="button"
            aria-label="Twitter"
            className="liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
          >
            <X size={20} />
          </button>
          <button
            type="button"
            aria-label="Website"
            className="liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
          >
            <Globe size={20} />
          </button>
        </footer>
      </div>
    </div>
  )
}
