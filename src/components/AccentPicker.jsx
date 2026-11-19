import { ACCENTS, useAccent } from './AccentContext'

export default function AccentPicker({ className = '' }) {
  const { accent, setAccent } = useAccent()
  return (
    <div role="group" aria-label="Choose the site's accent color" className={`flex items-center gap-1.5 ${className}`}>
      {ACCENTS.map((a) => {
        const active = accent === a.hex
        return (
          <button
            key={a.hex}
            type="button"
            aria-label={`${a.name} accent`}
            aria-pressed={active}
            onClick={() => setAccent(a.hex)}
            style={{ backgroundColor: a.hex }}
            className={`grid h-8 w-8 place-items-center rounded-full border-2 border-ink transition-transform hover:scale-110 ${
              active ? 'scale-110 ring-2 ring-ink ring-offset-2 ring-offset-cream' : ''
            }`}
          >
            {active && <span className="h-2 w-2 rounded-full bg-ink" aria-hidden="true" />}
          </button>
        )
      })}
    </div>
  )
}
