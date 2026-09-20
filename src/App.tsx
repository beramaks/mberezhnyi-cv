import { cv } from './data/cv'
import { ContactLinks, DownloadCvButton } from './components/ContactLinks'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { IconMail, IconShare, IconTerminal } from './components/Icons'
import { RoleBadge } from './components/RoleBadge'
import { Languages, Skills } from './components/SkillsLanguages'
import { Summary } from './components/Summary'

export default function App() {
  return (
    <div className="bg-dot-matrix min-h-screen text-slate-100">
      {/* Mobile chrome */}
      <header className="safe-top sticky top-0 z-40 flex items-center justify-between border-b border-slate-800/80 bg-[#080C15]/90 px-4 py-3 backdrop-blur-md lg:hidden">
        <div className="flex items-center gap-2">
          {cv.available ? (
            <>
              <span className="size-2 animate-pulse rounded-full bg-emerald-400" aria-hidden="true" />
              <span className="font-mono text-xs font-medium uppercase tracking-wide text-emerald-400">
                Available for hire
              </span>
            </>
          ) : null}
        </div>
        <div className="flex items-center gap-2">
          <a
            aria-label="Share profile via LinkedIn"
            className="focus-ring rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-400 transition-colors hover:text-white"
            href={cv.linkedIn.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconShare className="size-4" />
          </a>
          <a
            aria-label="Jump to summary"
            className="focus-ring rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-400 transition-colors hover:text-cyan-400"
            href="#main-content"
          >
            <IconTerminal className="size-4" />
          </a>
        </div>
      </header>

      <div className="flex min-h-screen">
        {/* Desktop sidebar */}
        <aside
          aria-label="Candidate Profile"
          className="sticky top-0 hidden h-screen w-[320px] shrink-0 flex-col overflow-y-auto border-r border-slate-800 bg-slate-950 text-slate-300 lg:flex"
        >
          <div className="flex flex-1 flex-col gap-8 p-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="relative">
                <div
                  className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary to-accent-cyan opacity-25 blur"
                  aria-hidden="true"
                />
                <div className="relative size-32 overflow-hidden rounded-full border-2 border-slate-800 bg-slate-900">
                  <img
                    alt={`${cv.name} profile`}
                    className="size-full object-cover"
                    src={cv.avatarSrc}
                  />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-white">{cv.name}</h1>
                <RoleBadge className="mt-1" />
              </div>
            </div>

            <ContactLinks variant="sidebar" />
            <Skills />
            <div className="mt-auto">
              <Languages />
            </div>
            <DownloadCvButton className="w-full py-3 text-sm font-bold" />
          </div>
        </aside>

        {/* Main column */}
        <main id="main-content" className="flex-1 overflow-y-auto">
          {/* Mobile profile card + skills */}
          <div className="mx-auto max-w-xl space-y-6 px-4 pb-28 pt-5 lg:hidden">
            <section className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-[#0F172A] to-[#0A101D] p-5 shadow-xl">
              <div
                className="pointer-events-none absolute -right-16 -top-16 size-36 rounded-full bg-blue-600/20 blur-3xl"
                aria-hidden="true"
              />
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="size-24 overflow-hidden rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shadow-lg shadow-blue-500/10 ring-2 ring-blue-500/50 ring-offset-4 ring-offset-[#090D16]">
                    <img
                      alt={`${cv.name} profile`}
                      className="size-full rounded-full object-cover"
                      src={cv.avatarSrc}
                    />
                  </div>
                  {cv.available ? (
                    <span
                      className="absolute bottom-1 right-1 size-4 rounded-full border-2 border-[#090D16] bg-emerald-500"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
                <h1 className="mb-1 text-2xl font-bold tracking-tight text-white">{cv.name}</h1>
                <RoleBadge className="mb-5 rounded-full border border-sky-800/40 bg-sky-950/50 px-3 py-1" />
                <ContactLinks variant="mobile" />
                <DownloadCvButton className="mt-5 w-full py-3 text-sm" />
              </div>
            </section>

            <section className="space-y-4 rounded-2xl border border-slate-800/90 bg-slate-900/70 p-5">
              <Skills />
              <Languages />
            </section>

            <Summary variant="mobile" />
            <Experience variant="mobile" />
            <Education variant="mobile" />
          </div>

          {/* Desktop main */}
          <div className="grid-bg hidden min-h-screen bg-background-dark p-12 lg:block">
            <div className="mx-auto max-w-4xl space-y-12">
              <Summary variant="desktop" />
              <Experience variant="desktop" />
              <Education variant="desktop" />
            </div>
          </div>
        </main>
      </div>

      {/* Mobile bottom bar */}
      <aside
        aria-label="Quick actions"
        className="safe-bottom fixed inset-x-0 bottom-0 z-50 border-t border-slate-800/80 bg-[#080C15]/95 px-4 py-3 backdrop-blur-md lg:hidden"
      >
        <div className="mx-auto flex max-w-xl items-center gap-3">
          <a
            className="focus-ring flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 py-2.5 text-xs font-semibold text-slate-200 transition-all hover:bg-slate-800 active:scale-95"
            href={`mailto:${cv.email}`}
          >
            <IconMail className="size-4 text-sky-400" />
            <span>Get in Touch</span>
          </a>
          <DownloadCvButton className="flex-1 py-2.5 text-xs active:scale-95" />
        </div>
      </aside>
    </div>
  )
}
