import { Navigate, useParams } from 'react-router-dom'
import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'
import { getCliCommandDoc } from './docsContent'

export function DocsCommandPage() {
  const { slug } = useParams<{ slug: string }>()
  const doc = slug ? getCliCommandDoc(slug) : undefined

  if (!doc) {
    return <Navigate to="/docs/cli" replace />
  }

  return (
    <DocsShell title={doc.title} description={doc.summary} eyebrow="CLI Guide">
      <div className="space-y-8 text-sm leading-8 text-neutral-300">
        <p>{doc.description}</p>

        <CodeBlock label="Command" code={doc.command} />

        <section className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6">
          <div className="text-[11px] uppercase tracking-[0.24em] text-white/40">When To Use It</div>
          <div className="mt-4 space-y-3">
            {doc.whenToUse.map((item) => (
              <div key={item} className="rounded-[1.2rem] border border-white/10 bg-black px-4 py-3 text-white">
                {item}
              </div>
            ))}
          </div>
        </section>

        {doc.notes?.length ? (
          <section className="rounded-[1.8rem] border border-white/10 bg-black p-6">
            <div className="text-[11px] uppercase tracking-[0.24em] text-white/40">Notes</div>
            <div className="mt-4 space-y-3">
              {doc.notes.map((item) => (
                <p key={item} className="text-neutral-300">
                  {item}
                </p>
              ))}
            </div>
          </section>
        ) : null}

        {doc.related?.length ? (
          <section className="rounded-[1.8rem] border border-white/10 bg-black p-6">
            <div className="text-[11px] uppercase tracking-[0.24em] text-white/40">Related Pages</div>
            <div className="mt-4 flex flex-wrap gap-3">
              {doc.related.map((item) => (
                <a key={item} href={item} className="rounded-full border border-white/12 px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black">
                  {item.replace('/docs/', '').replace('/cli/', 'CLI / ')}
                </a>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </DocsShell>
  )
}
