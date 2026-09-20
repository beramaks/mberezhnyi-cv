import { cv } from '../data/cv'
import { IconDownload, IconLink, IconLocation, IconMail, IconPhone } from './Icons'

const linkClass =
  'focus-ring flex items-center gap-3 rounded-lg transition-colors hover:text-white'

type ContactLinksProps = {
  variant: 'sidebar' | 'mobile'
}

export function ContactLinks({ variant }: ContactLinksProps) {
  if (variant === 'sidebar') {
    return (
      <ul className="space-y-4">
        <li>
          <a className={`${linkClass} group text-sm font-medium text-slate-300`} href={`mailto:${cv.email}`}>
            <IconMail className="size-5 shrink-0 text-primary" />
            <span>{cv.email}</span>
          </a>
        </li>
        <li>
          <a className={`${linkClass} group text-sm font-medium text-slate-300`} href={`tel:${cv.phoneHref}`}>
            <IconPhone className="size-5 shrink-0 text-primary" />
            <span>{cv.phone}</span>
          </a>
        </li>
        <li className="flex items-center gap-3 text-sm font-medium text-slate-300">
          <IconLocation className="size-5 shrink-0 text-primary" />
          <span>{cv.location}</span>
        </li>
        <li>
          <a
            className={`${linkClass} group text-sm font-medium text-slate-300`}
            href={cv.linkedIn.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconLink className="size-5 shrink-0 text-primary" />
            <span>{cv.linkedIn.label}</span>
          </a>
        </li>
      </ul>
    )
  }

  return (
    <div className="w-full space-y-2 text-xs font-mono text-slate-300">
      <a
        className="focus-ring flex items-center space-x-2.5 rounded-lg border border-slate-800/80 bg-slate-900/60 p-2.5 transition-colors hover:border-slate-700 active:bg-slate-800"
        href={`mailto:${cv.email}`}
      >
        <IconMail className="size-4 shrink-0 text-sky-400" />
        <span className="truncate">{cv.email}</span>
      </a>
      <a
        className="focus-ring flex items-center space-x-2.5 rounded-lg border border-slate-800/80 bg-slate-900/60 p-2.5 transition-colors hover:border-slate-700 active:bg-slate-800"
        href={`tel:${cv.phoneHref}`}
      >
        <IconPhone className="size-4 shrink-0 text-sky-400" />
        <span className="truncate">{cv.phone}</span>
      </a>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex items-center space-x-2 rounded-lg border border-slate-800/80 bg-slate-900/60 p-2.5">
          <IconLocation className="size-4 shrink-0 text-sky-400" />
          <span className="truncate">{cv.location}</span>
        </div>
        <a
          className="focus-ring flex items-center space-x-2 rounded-lg border border-slate-800/80 bg-slate-900/60 p-2.5 transition-colors hover:border-slate-700 active:bg-slate-800"
          href={cv.linkedIn.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <IconLink className="size-4 shrink-0 text-sky-400" />
          <span className="truncate">{cv.linkedIn.shortLabel}</span>
        </a>
      </div>
    </div>
  )
}

export function DownloadCvButton({
  className = '',
  label = 'Download CV',
}: {
  className?: string
  label?: string
}) {
  return (
    <a
      className={`focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-primary font-semibold text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90 ${className}`}
      download
      href={cv.cvPdfSrc}
    >
      <IconDownload className="size-4" />
      <span>{label}</span>
    </a>
  )
}
