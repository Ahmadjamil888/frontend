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
    <div className="rounded-[1.25rem] border border-orange-500/12 bg-[linear-gradient(180deg,rgba(242,140,40,0.05),rgba(0,0,0,0.76))] p-5">
      <div className="flex items-center justify-between gap-4">
        <div className="text-xs uppercase tracking-[0.18em] text-orange-200/45">{label}</div>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-[0.9rem] border border-orange-500/16 px-3 py-1.5 text-xs text-[#cfb69a] transition hover:border-orange-500/30 hover:text-[#ffd8af]"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="mt-4 overflow-x-auto text-sm text-[#ead7be]">
        <code>{code}</code>
      </pre>
    </div>
  )
}
