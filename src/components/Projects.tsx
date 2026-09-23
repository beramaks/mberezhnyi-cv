import { cv } from '../data/cv'

export function Projects({ variant }: { variant: 'desktop' | 'mobile' }) {
  return (
    <section className="space-y-6" aria-labelledby="projects-heading">
      <div className="flex items-center gap-3">
        <h2
          id="projects-heading"
          className={
            variant === 'desktop'
              ? 'text-2xl font-black uppercase tracking-tighter text-white'
              : 'font-mono text-sm font-bold uppercase tracking-widest text-white'
          }
        >
          Project Highlights
        </h2>
        <div className="h-px flex-1 bg-slate-800" />
      </div>

      <ul
        className={
          variant === 'desktop' ? 'grid gap-6 md:grid-cols-1' : 'grid grid-cols-1 gap-3'
        }
      >
        {cv.projects.map((project) => (
          <li
            key={project.title}
            className="rounded-xl border border-slate-800 bg-slate-900 p-4 transition-colors hover:border-primary/50 sm:p-6"
          >
            <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-bold text-white">{project.title}</h3>
              <span className="rounded bg-slate-800 px-2 py-1 font-mono text-[10px] font-semibold text-accent-cyan">
                {project.stack}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
