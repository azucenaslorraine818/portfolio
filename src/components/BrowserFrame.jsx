/** Wraps a screenshot in a tiny browser window. `flush` removes the bottom
 *  border so it can sit on the edge of a card. */
export default function BrowserFrame({ image, flush = false, className = '' }) {
  return (
    <div
      className={`overflow-hidden rounded-t-2xl border-2 border-ink bg-paper ${
        flush ? 'border-b-0' : 'rounded-b-2xl shadow-pop'
      } ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b-2 border-ink bg-cream px-3 py-2" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full border border-ink bg-coral" />
        <span className="h-2.5 w-2.5 rounded-full border border-ink bg-butter" />
        <span className="h-2.5 w-2.5 rounded-full border border-ink bg-sage" />
      </div>
      <img
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full"
      />
    </div>
  )
}
