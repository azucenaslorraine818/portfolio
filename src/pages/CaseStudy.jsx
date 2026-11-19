import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProject, projects } from '../data/projects'
import BrowserFrame from '../components/BrowserFrame'
import Lightbox from '../components/Lightbox'
import Reveal from '../components/Reveal'
import NotFound from './NotFound'

const TOC = [
  ['overview', 'Overview'],
  ['problem', 'The problem'],
  ['users', 'Who it’s for'],
  ['role', 'My role'],
  ['process', 'Process'],
  ['designs', 'Designs'],
  ['decisions', 'Key decisions'],
  ['result', 'Final result'],
  ['lessons', 'Lessons learned'],
]

function Section({ id, title, children }) {
  return (
    <Reveal>
      <section id={id} aria-labelledby={`${id}-title`} className="py-8">
        <h2 id={`${id}-title`} className="mb-5 text-3xl sm:text-4xl">
          {title}
        </h2>
        {children}
      </section>
    </Reveal>
  )
}

function ExternalLink({ href, children, className = '' }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`btn ${className}`}>
      {children}
      <span aria-hidden="true"> ↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

export default function CaseStudy() {
  const { slug } = useParams()
  const project = getProject(slug)
  const [openShot, setOpenShot] = useState(null)

  useEffect(() => {
    if (project) document.title = `${project.title} case study — Lorraine Azucenas`
  }, [project])

  if (!project) return <NotFound />

  const next = projects[(projects.indexOf(project) + 1) % projects.length]
  const meta = [
    ['My role', project.role],
    ['Team', project.team],
    project.timeline && ['Timeline', project.timeline],
    ['Status', project.status],
  ].filter(Boolean)

  return (
    <article>
      {/* Header */}
      <header className="mx-auto max-w-6xl px-5 pt-8 sm:px-8">
        <Link to="/#work" className="inline-flex items-center gap-2 font-bold underline decoration-2 underline-offset-4 hover:bg-accent">
          <span aria-hidden="true">←</span> All work
        </Link>

        <div className={`card mt-6 p-6 sm:p-10 ${project.accent}`}>
          <p className="chip -rotate-2 bg-paper">Case study</p>
          <h1 className="mt-4 text-5xl sm:text-7xl">{project.title}</h1>
          <p className="mt-3 font-display text-xl font-bold sm:text-2xl">{project.subtitle}</p>
          <p className="mt-2 font-hand text-2xl">“{project.tagline}”</p>

          <dl className="mt-8 grid gap-5 sm:grid-cols-2">
            {meta.map(([label, value]) => (
              <div key={label}>
                <dt className="text-sm font-bold uppercase tracking-wide">{label}</dt>
                <dd className="text-lg font-semibold">{value}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
            {project.stack.map((s) => (
              <li key={s} className="chip bg-paper text-sm">
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ExternalLink href={project.links.live} className="bg-paper">
              Visit live site
            </ExternalLink>
            {project.links.repo ? (
              <ExternalLink href={project.links.repo} className="bg-paper">
                View code on GitHub
              </ExternalLink>
            ) : (
              <span className="chip bg-paper">{project.links.repoNote}</span>
            )}
          </div>
        </div>

        <div className="mt-10">
          <BrowserFrame image={project.cover} />
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto grid max-w-6xl gap-x-12 px-5 pt-6 sm:px-8 lg:grid-cols-[13rem_1fr]">
        <nav aria-label="On this page" className="hidden lg:block">
          <div className="sticky top-28 pt-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-ink-soft">On this page</p>
            <ul className="flex flex-col gap-1">
              {TOC.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="block rounded-lg px-3 py-1.5 font-semibold hover:bg-accent">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="min-w-0 max-w-3xl">
          <Section id="overview" title="Overview">
            <p className="text-lg">{project.overview}</p>
          </Section>

          <Section id="problem" title="The problem">
            <p className="text-lg">{project.problem}</p>
          </Section>

          <Section id="users" title="Who it’s for">
            <ul className="grid gap-3">
              {project.users.map((u) => (
                <li key={u} className="card flex gap-3 p-4 shadow-pop-sm">
                  <span className={`mt-2 h-3 w-3 shrink-0 rounded-full border-2 border-ink ${project.accent}`} aria-hidden="true" />
                  {u}
                </li>
              ))}
            </ul>
          </Section>

          <Section id="role" title="My role & contributions">
            <div className="card p-6 sm:p-8">
              <p className="font-display text-2xl font-extrabold leading-tight">{project.ownership.role}</p>
              <p className="mt-3 text-lg">{project.ownership.summary}</p>
              <h3 className="mt-6 text-xl">What I did</h3>
              <ul className="mt-3 grid gap-3">
                {project.ownership.contributions.map((c) => (
                  <li key={c} className="flex gap-3">
                    <span aria-hidden="true" className={`mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-ink text-xs font-bold ${project.accent}`}>
                      ✓
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <Section id="process" title="Process">
            <ol className="grid gap-4">
              {project.process.map((step, i) => (
                <li key={step.title} className="card flex gap-4 p-5 shadow-pop-sm">
                  <span
                    aria-hidden="true"
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-ink font-display text-xl font-extrabold ${project.accent}`}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl">{step.title}</h3>
                    <p className="mt-1 text-ink-soft">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          <Section id="designs" title="Designs">
            <p className="mb-5 text-ink-soft">Select a screenshot to enlarge it.</p>
            <ul className="grid gap-6 sm:grid-cols-2">
              {project.gallery.map((shot, i) => (
                <li key={shot.src}>
                  <button
                    type="button"
                    onClick={() => setOpenShot(i)}
                    aria-haspopup="dialog"
                    className="group block w-full text-left"
                  >
                    <span className="block overflow-hidden rounded-2xl border-2 border-ink bg-paper shadow-pop-sm transition-transform group-hover:-translate-y-1">
                      <img
                        src={shot.src}
                        width={shot.width}
                        height={shot.height}
                        alt={shot.alt}
                        loading="lazy"
                        decoding="async"
                        className="block h-auto w-full"
                      />
                    </span>
                    <span className="mt-2 block font-semibold">
                      {shot.caption} <span className="sr-only">Opens a larger view.</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <Lightbox items={project.gallery} index={openShot} onChange={setOpenShot} onClose={() => setOpenShot(null)} />
          </Section>

          <Section id="decisions" title="Key decisions">
            <ul className="grid gap-4 sm:grid-cols-3">
              {project.decisions.map((d) => (
                <li key={d.title} className="card p-5 shadow-pop-sm">
                  <h3 className="text-xl">{d.title}</h3>
                  <p className="mt-2 text-ink-soft">{d.text}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="result" title="Final result">
            <p className="text-lg">{project.result}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <ExternalLink href={project.links.live} className={project.accent}>
                Visit the live site
              </ExternalLink>
              {project.links.repo && (
                <ExternalLink href={project.links.repo} className="bg-paper">
                  View code on GitHub
                </ExternalLink>
              )}
            </div>
          </Section>

          <Section id="lessons" title="Lessons learned">
            <ol className="grid gap-4">
              {project.lessons.map((l, i) => (
                <li key={l} className="card flex gap-4 p-5 shadow-pop-sm">
                  <span aria-hidden="true" className="font-hand text-5xl leading-none">
                    {i + 1}
                  </span>
                  <p className="text-lg">{l}</p>
                </li>
              ))}
            </ol>
          </Section>
        </div>
      </div>

      {/* Next project */}
      <aside aria-label="Next case study" className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <Link
          to={`/projects/${next.slug}`}
          className={`card flex flex-col gap-2 p-6 transition-transform hover:-translate-y-1 sm:p-8 ${next.accent}`}
        >
          <span className="text-sm font-bold uppercase tracking-wide">Next case study</span>
          <span className="font-display text-3xl font-extrabold sm:text-5xl">
            {next.title} <span aria-hidden="true">→</span>
          </span>
          <span className="text-lg">{next.summary}</span>
        </Link>
      </aside>
    </article>
  )
}
