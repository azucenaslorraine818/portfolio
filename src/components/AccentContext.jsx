import { createContext, useContext, useEffect, useState } from 'react'

export const ACCENTS = [
  { name: 'Coral', hex: '#F58F9A' },
  { name: 'Periwinkle', hex: '#9DAAD1' },
  { name: 'Sage', hex: '#8EAF92' },
  { name: 'Butter', hex: '#F4C984' },
  { name: 'Olive', hex: '#C1BB7A' },
]

const KEY = 'portfolio-accent'
const AccentContext = createContext({ accent: ACCENTS[0].hex, setAccent: () => {} })

function readSaved() {
  try {
    const saved = localStorage.getItem(KEY)
    return ACCENTS.some((a) => a.hex === saved) ? saved : ACCENTS[0].hex
  } catch {
    return ACCENTS[0].hex
  }
}

/** Lets visitors re-theme the site with the five palette colors. */
export function AccentProvider({ children }) {
  const [accent, setAccent] = useState(readSaved)

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent)
    try {
      localStorage.setItem(KEY, accent)
    } catch {
      /* storage unavailable: the choice just won't persist */
    }
  }, [accent])

  return <AccentContext.Provider value={{ accent, setAccent }}>{children}</AccentContext.Provider>
}

export const useAccent = () => useContext(AccentContext)
