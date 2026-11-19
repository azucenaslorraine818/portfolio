import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BrowserFrame from './BrowserFrame'

export default function ProjectCard({ project, index }) {
  const tilt = index % 2 === 0 ? -0.8 : 0.8
  return (
    <motion.article
      whileHover={{ y: -6, rotate: tilt }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="card relative flex flex-col overflow-hidden"
    >
      <div className={`${project.accent} border-b-2 border-ink px-5 pt-6 sm:px-7`}>
        <span className="chip mb-4 bg-paper -rotate-2">★ Featured case study</span>
        <BrowserFrame image={project.cover} flush />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
        <h3 className="text-3xl sm:text-4xl">
          <Link to={`/projects/${project.slug}`} className="stretched">
            {project.title}
          </Link>
        </h3>
        <p className="font-bold">{project.subtitle}</p>
        <p className="text-ink-soft">{project.summary}</p>

        <ul className="flex flex-wrap gap-2" aria-label="Technologies">
          {project.stack.map((s) => (
            <li key={s} className="chip bg-cream text-sm">
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-3">
          <span className="font-extrabold">
            Read the case study <span aria-hidden="true">→</span>
          </span>
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 font-bold underline decoration-2 underline-offset-4 hover:bg-accent"
          >
            Live site<span aria-hidden="true"> ↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </motion.article>
  )
}
