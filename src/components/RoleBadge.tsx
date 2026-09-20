import { cv } from '../data/cv'

export function RoleBadge({ className = '' }: { className?: string }) {
  return (
    <p
      className={`font-mono text-xs font-semibold uppercase tracking-widest text-accent-cyan ${className}`}
      aria-label={cv.role}
    >
      <span aria-hidden="true">&lt;</span>
      {cv.roleBadge}
      <span aria-hidden="true"> /&gt;</span>
    </p>
  )
}
