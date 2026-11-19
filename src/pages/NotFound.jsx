import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page not found — Lorraine Azucenas'
  }, [])

  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
      <p className="chip -rotate-3 bg-coral">404</p>
      <h1 className="mt-6 text-5xl sm:text-6xl">Oops, this page wandered off.</h1>
      <p className="mt-4 text-lg text-ink-soft">The page you’re looking for doesn’t exist, but my work does.</p>
      <Link to="/" className="btn mt-8 bg-butter">
        Back to the portfolio
      </Link>
    </section>
  )
}
