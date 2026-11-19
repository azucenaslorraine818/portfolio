import { motion } from 'framer-motion'
import { profile } from '../../data/profile'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <SectionHeading id="skills-title" eyebrow="Skills" title="What’s in my toolbox" color="bg-coral">
        Technical tools, people skills and languages. I use all three on every project.
      </SectionHeading>
      <div className="grid gap-8 lg:grid-cols-3">
        {profile.skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.08}>
            <div className="card h-full p-6">
              <h3 className="flex items-center gap-3 text-2xl">
                <span className={`h-4 w-4 rounded-full border-2 border-ink ${g.color}`} aria-hidden="true" />
                {g.group}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {g.items.map((item, j) => (
                  <motion.li
                    key={item}
                    whileHover={{ rotate: j % 2 ? 3 : -3, scale: 1.07 }}
                    className={`chip cursor-default ${g.color}`}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
