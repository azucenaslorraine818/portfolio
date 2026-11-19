import { profile } from '../../data/profile'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'

const DOTS = ['bg-periwinkle', 'bg-coral', 'bg-sage', 'bg-butter']

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <SectionHeading id="about-title" eyebrow="About me" title="A little bit of everything" color="bg-periwinkle" />
      <div className="grid items-start gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="prose-lite text-lg">
          {profile.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="card grid gap-5 p-6 sm:p-7">
            {profile.facts.map((f, i) => (
              <div key={f.label} className="flex gap-3">
                <span className={`mt-2 h-3 w-3 shrink-0 rounded-full border-2 border-ink ${DOTS[i % DOTS.length]}`} aria-hidden="true" />
                <div>
                  <dt className="text-sm font-bold uppercase tracking-wide text-ink-soft">{f.label}</dt>
                  <dd className="font-semibold">{f.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
