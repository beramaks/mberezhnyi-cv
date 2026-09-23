import { cv } from '../data/cv'

export function Experience({ variant }: { variant: 'desktop' | 'mobile' }) {
  return (
    <section className="space-y-6" aria-labelledby="experience-heading">
      <div className="flex items-center gap-3">
        <h2
          id="experience-heading"
          className={
            variant === 'desktop'
              ? 'text-2xl font-black uppercase tracking-tighter text-white'
              : 'font-mono text-sm font-bold uppercase tracking-widest text-white'
          }
        >
          Work Experience
        </h2>
        <div className="h-px flex-1 bg-slate-800" />
      </div>

      <ol className="relative ml-1 space-y-8 border-l-2 border-slate-800 pl-0">
        {cv.experience.map((job) => (
          <li key={`${job.company}-${job.title}-${job.period}`} className="relative pl-10">
            <span
              className={`absolute -left-[9px] top-1.5 size-4 rounded-full ring-4 ring-brand-dark ${
                job.current ? 'bg-primary' : 'bg-slate-600'
              }`}
              aria-hidden="true"
            />
            {variant === 'mobile' ? (
              <article className="rounded-xl border border-slate-800/80 bg-slate-900/80 p-4">
                <JobHeader job={job} />
                <JobBullets bullets={job.bullets} />
              </article>
            ) : (
              <article>
                <JobHeader job={job} />
                <JobBullets bullets={job.bullets} />
              </article>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}

function JobHeader({
  job,
}: {
  job: (typeof cv.experience)[number]
}) {
  return (
    <>
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-bold text-white sm:text-xl">{job.title}</h3>
        <span className="rounded bg-slate-800 px-3 py-1 font-mono text-xs text-slate-300">
          {job.period}
        </span>
      </div>
      <p className="mb-3 font-bold text-primary">{job.company}</p>
    </>
  )
}

function JobBullets({ bullets }: { bullets: readonly string[] }) {
  return (
    <ul className="space-y-2 text-sm leading-relaxed text-slate-300">
      {bullets.map((bullet) => (
        <li key={bullet} className="flex gap-2">
          <span className="font-mono text-primary" aria-hidden="true">
            •
          </span>
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  )
}
