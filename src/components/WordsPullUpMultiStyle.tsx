import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type Segment = {
  text: string
  className?: string
}

type WordsPullUpMultiStyleProps = {
  segments: Segment[]
  containerClassName?: string
}

export function WordsPullUpMultiStyle({ segments, containerClassName = '' }: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  // Flatten all words with their className
  const allWords: { word: string; className: string }[] = []
  for (const segment of segments) {
    const words = segment.text.split(' ').filter(Boolean)
    for (const word of words) {
      allWords.push({ word, className: segment.className ?? '' })
    }
  }

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center ${containerClassName}`}>
      {allWords.map((item, i) => (
        <span key={i} className="overflow-hidden inline-block mr-[0.25em]">
          <motion.span
            className={`inline-block ${item.className}`}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              delay: i * 0.08,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
