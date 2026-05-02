import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type WordsPullUpProps = {
  text: string
  className?: string
  showAsterisk?: boolean
}

export function WordsPullUp({ text, className = '', showAsterisk = false }: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const words = text.split(' ')

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1
        return (
          <span key={i} className="inline-block mr-[0.25em] overflow-visible pb-[0.08em]">
            <motion.span
              className="inline-block relative"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
              {isLast && showAsterisk && (
                <sup
                  style={{
                    position: 'absolute',
                    top: '0.65em',
                    right: '-0.3em',
                    fontSize: '0.31em',
                    lineHeight: 1,
                  }}
                >
                  *
                </sup>
              )}
            </motion.span>
          </span>
        )
      })}
    </span>
  )
}
