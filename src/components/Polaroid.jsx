import { motion } from 'framer-motion'

/** A pinned photo with a handwritten caption. Tilts straight on hover. */
export default function Polaroid({ photo, caption, rotate = 0, className = '', priority = false }) {
  return (
    <motion.figure
      initial={{ rotate }}
      whileHover={{ rotate: 0, scale: 1.05, zIndex: 50 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className={`relative rounded-md border-2 border-ink bg-paper p-2 pb-10 shadow-pop ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute -top-3 left-1/2 z-10 h-5 w-5 -translate-x-1/2 rounded-full border-2 border-ink bg-accent transition-colors"
      />
      <img
        src={photo.src}
        width={photo.width}
        height={photo.height}
        alt={photo.alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        className="block h-auto w-full rounded-sm"
      />
      {caption && (
        <figcaption className="absolute inset-x-0 bottom-2 text-center font-hand text-xl leading-none">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  )
}
