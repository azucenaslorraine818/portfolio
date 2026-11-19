export default function SectionHeading({ id, eyebrow, title, color = 'bg-butter', children }) {
  return (
    <div className="mb-10 max-w-2xl">
      <span className={`chip -rotate-2 ${color}`}>{eyebrow}</span>
      <h2 id={id} className="mt-4 text-4xl sm:text-5xl">
        {title}
      </h2>
      {children && <p className="mt-3 text-lg text-ink-soft">{children}</p>}
    </div>
  )
}
