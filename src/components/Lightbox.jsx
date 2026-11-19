import { useEffect, useRef } from 'react'

/** Accessible screenshot viewer built on the native <dialog> element:
 *  focus is trapped, Esc closes it, arrow keys move between images, and
 *  focus returns to the thumbnail that opened it. */
export default function Lightbox({ items, index, onClose, onChange }) {
  const ref = useRef(null)
  const isOpen = index !== null

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (isOpen && !d.open) d.showModal()
    if (!isOpen && d.open) d.close()
  }, [isOpen])

  const item = items[index ?? 0]
  const go = (step) => onChange((index + step + items.length) % items.length)

  return (
    <dialog
      ref={ref}
      aria-label="Screenshot viewer"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(1)
        if (e.key === 'ArrowLeft') go(-1)
      }}
      className="m-auto w-[min(96vw,1100px)] max-w-none bg-transparent p-0 backdrop:bg-ink/75"
    >
      {isOpen && (
        <div className="card overflow-hidden bg-paper">
          <img src={item.src} alt={item.alt} className="block max-h-[68vh] w-full bg-cream object-contain" />
          <div className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-ink p-4">
            <p className="font-semibold">
              <span className="sr-only">Image {index + 1} of {items.length}: </span>
              {item.caption}
            </p>
            <div className="flex items-center gap-2">
              <button type="button" className="btn bg-paper min-h-10! px-4!" onClick={() => go(-1)} aria-label="Previous screenshot">
                ←
              </button>
              <span className="text-sm font-semibold" aria-hidden="true">
                {index + 1} / {items.length}
              </span>
              <button type="button" className="btn bg-paper min-h-10! px-4!" onClick={() => go(1)} aria-label="Next screenshot">
                →
              </button>
              <button type="button" className="btn bg-butter min-h-10! px-4!" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </dialog>
  )
}
