import { projects } from '../../data/projects'
import ProjectCard from '../ProjectCard'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <SectionHeading id="work-title" eyebrow="Featured work" title="Things I’ve built" color="bg-sage">
        Two web apps, two roles: team lead and main developer on SJC Care, solo full-stack developer on MindBloom. Open a
        case study to see the problem, my process, the designs and what I learned.
      </SectionHeading>
      <div className="grid gap-10 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.1} className="flex">
            <div className="flex w-full">
              <ProjectCard project={p} index={i} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
