import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { AccentProvider } from './components/AccentContext'
import ScrollManager from './components/ScrollManager'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      {/* Respects the visitor's "reduce motion" setting for every animation */}
      <MotionConfig reducedMotion="user">
        <AccentProvider>
          <ScrollManager />
          <a
            className="skip-link"
            href="#main"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('main')?.focus()
            }}
          >
            Skip to content
          </a>
          <Header />
          <main id="main" tabIndex={-1} className="focus:outline-none">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:slug" element={<CaseStudy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </AccentProvider>
      </MotionConfig>
    </BrowserRouter>
  )
}
