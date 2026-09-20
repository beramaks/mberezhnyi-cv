import { cv } from '../data/cv'

export function Skills() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <h2 className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">
          Skills
        </h2>
        <div className="h-px flex-1 bg-slate-800" />
      </div>
      <ul className="flex flex-wrap gap-2">
        {cv.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-slate-700/60 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-300 transition-colors hover:border-primary/50 hover:text-white"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Languages() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <h2 className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">
          Languages
        </h2>
        <div className="h-px flex-1 bg-slate-800" />
      </div>
      <ul className="grid grid-cols-2 gap-3">
        {cv.languages.map((lang) => (
          <li
            key={lang.name}
            className="rounded-lg border border-slate-800/80 bg-slate-950/60 p-2.5"
          >
            <p className="text-[10px] uppercase tracking-wider text-slate-400">{lang.name}</p>
            <p className="text-sm font-bold text-white">{lang.level}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
