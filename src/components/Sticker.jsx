import { motion } from 'framer-motion'

/** Decorative, draggable sticker. Hidden from assistive tech because it
 *  only repeats information that is available as normal text elsewhere. */
export default function Sticker({ children, color, rotate = 0, constraints, className = '' }) {
  return (
    <motion.div
      aria-hidden="true"
      drag
      dragConstraints={constraints}
      dragElastic={0.2}
      dragMomentum={false}
      initial={{ rotate }}
      whileHover={{ scale: 1.1, rotate: rotate + 5 }}
      whileDrag={{ scale: 1.15 }}
      className={`chip absolute z-40 cursor-grab select-none shadow-pop-sm active:cursor-grabbing ${color} ${className}`}
    >
      {children}
    </motion.div>
  )
}
