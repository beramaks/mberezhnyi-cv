import { cv } from '../data/cv'
import { IconDocument, IconTerminal } from './Icons'

function SummaryText() {
  const parts = cv.summary.split(
    new RegExp(`(${cv.summaryHighlights.map(escapeRegExp).join('|')})`, 'g'),
  )

  return (
    <>
      {parts.map((part, index) =>
        cv.summaryHighlights.includes(part as (typeof cv.summaryHighlights)[number]) ? (
          <span
            key={`${part}-${index}`}
            className="font-semibold not-italic text-white"
          >
            {part}
          </span>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        ),
      )}
    </>
  )
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function Summary({ variant }: { variant: 'desktop' | 'mobile' }) {
  if (variant === 'desktop') {
    return (
      <section className="relative" aria-labelledby="summary-heading">
        <div
          className="pointer-events-none absolute -left-6 top-2 font-mono text-xl text-slate-700 opacity-50"
          aria-hidden="true"
        >
          {'{'}
        </div>
        <div
          className="pointer-events-none absolute -right-6 bottom-2 font-mono text-xl text-slate-700 opacity-50"
          aria-hidden="true"
        >
          {'}'}
        </div>
        <h2
          id="summary-heading"
          className="mb-4 flex items-center gap-2 font-mono text-sm font-bold text-primary"
        >
          <IconTerminal className="size-4" />
          ./summary.md
        </h2>
        <blockquote className="summary-desktop-quote font-light italic leading-relaxed text-slate-300">
          “
          <SummaryText />”
        </blockquote>
      </section>
    )
  }

  return (
    <section
      className="relative overflow-hidden rounded-2xl border border-slate-800/90 bg-[#0A101E] p-4 sm:p-5"
      aria-labelledby="summary-heading-mobile"
    >
      <div
        id="summary-heading-mobile"
        className="mb-3 flex items-center space-x-2 font-mono text-xs text-sky-400"
      >
        <IconDocument className="size-3.5 shrink-0" />
        <span>./summary.md</span>
      </div>
      <blockquote className="text-sm italic leading-relaxed text-slate-300 sm:text-base">
        “
        <SummaryText />”
      </blockquote>
    </section>
  )
}
