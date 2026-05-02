import { useState } from 'react'

type CodeBlockProps = {
  label: string
  code: string
}

export function CodeBlock({ label, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.92))] p-5">
      <div className="flex items-center justify-between gap-4">
        <div className="text-xs uppercase tracking-[0.18em] text-white/40">{label}</div>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-[0.9rem] border border-white/12 px-3 py-1.5 text-xs text-white/72 transition hover:border-white/30 hover:text-white"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="mt-4 overflow-x-auto text-sm text-white">
        <code>{code}</code>
      </pre>
    </div>
  )
}
