import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to #hash targets, or to the top on a new page, and moves focus
 *  to <main> after navigation so screen-reader users land on the content. */
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  const firstRender = useRef(true)

  useEffect(() => {
    if (hash) {
      // wait a tick so the target section has rendered
      const t = setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView()
      }, 50)
      return () => clearTimeout(t)
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
    if (!firstRender.current) document.getElementById('main')?.focus({ preventScroll: true })
    firstRender.current = false
  }, [pathname, hash, key])

  return null
}
