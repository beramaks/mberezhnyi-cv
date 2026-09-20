import { cv } from '../data/cv'
import { IconSchool, IconVerified } from './Icons'

export function Education({ variant }: { variant: 'desktop' | 'mobile' }) {
  return (
    <section className="space-y-6 pb-4" aria-labelledby="education-heading">
      <div className="flex items-center gap-3">
        <h2
          id="education-heading"
          className={
            variant === 'desktop'
              ? 'text-2xl font-black uppercase tracking-tighter text-white'
              : 'font-mono text-sm font-bold uppercase tracking-widest text-white'
          }
        >
          Education &amp; Certs
        </h2>
        <div className="h-px flex-1 bg-slate-800" />
      </div>

      <ul
        className={
          variant === 'desktop' ? 'grid gap-6 md:grid-cols-2' : 'grid grid-cols-1 gap-3'
        }
      >
        {cv.education.map((item) => (
          <li
            key={item.title}
            className="rounded-xl border border-slate-800 bg-slate-900 p-4 transition-colors hover:border-primary/50 sm:p-6"
          >
            <div className="mb-3 flex items-start justify-between">
              <span
                className={`flex size-8 items-center justify-center rounded-lg border ${
                  item.kind === 'school'
                    ? 'border-sky-800/50 bg-sky-950/70 text-accent-cyan'
                    : 'border-blue-800/50 bg-blue-950/70 text-primary'
                }`}
              >
                {item.kind === 'school' ? (
                  <IconSchool className="size-5" />
                ) : (
                  <IconVerified className="size-5" />
                )}
              </span>
              <span className="rounded bg-slate-800 px-2 py-1 font-mono text-[10px] font-semibold text-slate-300">
                {item.year}
              </span>
            </div>
            <h3 className="mb-1 font-bold text-white">{item.title}</h3>
            <p className="mb-2 text-xs uppercase tracking-wider text-slate-400">
              {item.subtitle}
            </p>
            <p className="text-sm text-slate-300">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
