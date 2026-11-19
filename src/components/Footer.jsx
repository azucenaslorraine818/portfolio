import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="mt-10 border-t-2 border-ink bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center sm:px-8">
        <p className="text-sm">
          © {new Date().getFullYear()} {profile.name}. Designed and built by me with React and Tailwind, deployed on Vercel.
        </p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="rounded-full border-2 border-cream px-4 py-2 text-sm font-bold hover:bg-butter hover:text-ink"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}
