import { profile } from '../../data/profile'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'

export default function BeyondCode() {
  return (
    <section id="beyond" aria-labelledby="beyond-title" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <SectionHeading id="beyond-title" eyebrow="Beyond code" title="Leading, hosting, showing up" color="bg-butter">
        Leadership and public speaking are part of how I build, too.
      </SectionHeading>
      <div className="grid gap-10 md:grid-cols-2">
        {profile.beyondCode.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1}>
            <article className="card flex h-full flex-col overflow-hidden">
              <div className={`${item.color} flex h-72 items-end justify-center overflow-hidden border-b-2 border-ink`}>
                <img
                  src={item.photo.src}
                  width={item.photo.width}
                  height={item.photo.height}
                  alt={item.photo.alt}
                  loading="lazy"
                  decoding="async"
                  className={`h-full w-auto max-w-full ${i === 0 ? 'object-contain' : 'w-full object-cover object-[50%_46%]'}`}
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <h3 className="text-2xl sm:text-3xl">{item.title}</h3>
                <p className="font-bold">{item.org}</p>
                <p className="text-sm font-semibold text-ink-soft">{item.meta}</p>
                <p className="mt-2 text-ink-soft">{item.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
