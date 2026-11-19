import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../../data/profile'
import Polaroid from '../Polaroid'
import Sticker from '../Sticker'

// Cut-out "sticker" look: white outline + hard shadow, drawn with drop-shadows
const stickerOutline = {
  filter:
    'drop-shadow(3px 0 0 #fff) drop-shadow(-3px 0 0 #fff) drop-shadow(0 3px 0 #fff) drop-shadow(0 -3px 0 #fff) drop-shadow(6px 6px 0 #2a2b3d)',
}

export default function Hero() {
  const area = useRef(null)
  const { photos } = profile

  return (
    <section aria-labelledby="hero-title" className="relative overflow-x-clip">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pb-24 lg:pt-16">
        <div>
          <p className="chip rotate-1 bg-paper">{profile.status}</p>
          <h1 id="hero-title" className="mt-5 text-[clamp(3.25rem,10vw,6rem)]">
            Hi, I’m <span className="highlight">Lorraine</span>.
          </h1>
          <p className="mt-5 font-display text-2xl font-bold leading-tight sm:text-3xl">{profile.tagline}</p>
          <p className="mt-5 max-w-xl text-lg text-ink-soft">
            I design, build and lead — from React and Supabase apps to student-org presidency and stage hosting.
          </p>

          <ul className="mt-6 flex flex-wrap gap-3" aria-label="In three words">
            {profile.traits.map((t) => (
              <li key={t.label} className={`chip text-base shadow-pop-sm ${t.color} ${t.rotate}`}>
                {t.label}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/#work" className="btn bg-accent transition-colors">
              See my work <span aria-hidden="true">↓</span>
            </Link>
            <Link to="/#contact" className="btn bg-paper">
              Say hello
            </Link>
          </div>
        </div>

        {/* Pinboard collage */}
        <div ref={area} className="relative mx-auto h-[31rem] w-full max-w-[34rem] sm:h-[37rem]">
          <div
            aria-hidden="true"
            className="absolute inset-x-[6%] top-[8%] h-[78%] rounded-[46%_54%_48%_52%/52%_46%_54%_48%] bg-accent transition-colors duration-300"
          />
          <div aria-hidden="true" className="absolute right-[2%] top-[2%] h-16 w-16 rounded-full border-2 border-ink bg-periwinkle" />
          <div aria-hidden="true" className="absolute bottom-[3%] left-[6%] h-12 w-12 rotate-12 rounded-xl border-2 border-ink bg-butter" />

          <img
            src={photos.cutout.src}
            width={photos.cutout.width}
            height={photos.cutout.height}
            alt={photos.cutout.alt}
            fetchPriority="high"
            style={stickerOutline}
            className="absolute right-[3%] top-0 z-20 h-auto w-[46%]"
          />

          <Polaroid
            photo={photos.matcha}
            caption="matcha enjoyer"
            rotate={-6}
            priority
            className="absolute left-0 top-[9%] z-10 w-[45%]"
          />

          <Polaroid
            photo={photos.event}
            caption="on stage"
            rotate={5}
            className="absolute bottom-0 left-[39%] z-30 w-[33%]"
          />

          <Sticker constraints={area} color="bg-periwinkle" rotate={-8} className="left-[2%] top-[1%]">
            React
          </Sticker>
          <Sticker constraints={area} color="bg-sage" rotate={6} className="right-[0%] top-[52%]">
            Supabase
          </Sticker>
          <Sticker constraints={area} color="bg-butter" rotate={-4} className="bottom-[17%] left-[1%]">
            Team lead
          </Sticker>
          <Sticker constraints={area} color="bg-paper" rotate={7} className="bottom-[2%] right-[2%]">
            SPECS president
          </Sticker>
        </div>
      </div>
    </section>
  )
}
