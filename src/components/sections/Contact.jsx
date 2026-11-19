import { useState } from 'react'
import { profile } from '../../data/profile'
import Reveal from '../Reveal'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <Reveal>
        <div className="card relative overflow-hidden bg-butter p-8 sm:p-12">
          <div aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-2 border-ink bg-coral" />
          <div aria-hidden="true" className="absolute -bottom-8 right-24 h-24 w-24 rotate-12 rounded-2xl border-2 border-ink bg-periwinkle" />
          <div className="relative max-w-2xl">
            <h2 id="contact-title" className="text-4xl sm:text-6xl">
              Let’s build something together.
            </h2>
            <p className="mt-4 text-lg">
              Got an idea, an internship, or an event that needs a host? Email me — I read everything.
            </p>
            <p className="mt-4 font-display text-xl font-bold sm:text-2xl">{profile.email}</p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a href={`mailto:${profile.email}`} className="btn bg-ink text-cream!">
                Send an email
              </a>
              <button type="button" onClick={copyEmail} className="btn bg-paper">
                {copied ? 'Copied ✓' : 'Copy email address'}
              </button>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn bg-paper">
                GitHub<span aria-hidden="true"> ↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <p role="status" className="sr-only">
              {copied ? 'Email address copied to clipboard' : ''}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
