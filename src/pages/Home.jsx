import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import Work from '../components/sections/Work'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import BeyondCode from '../components/sections/BeyondCode'
import Contact from '../components/sections/Contact'

export default function Home() {
  useEffect(() => {
    document.title = 'Lorraine Azucenas — Portfolio'
  }, [])

  return (
    <>
      <Hero />
      <Work />
      <About />
      <Skills />
      <BeyondCode />
      <Contact />
    </>
  )
}
