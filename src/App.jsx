import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PageTransition from './components/PageTransition'
import './index.css'

// ─── Lazy-loaded pages (code split per route) ──────────────────────
const Home      = lazy(() => import('./pages/Home'))
const About     = lazy(() => import('./pages/About'))
const Work      = lazy(() => import('./pages/Work'))
const Links     = lazy(() => import('./pages/Links'))
const Guestbook = lazy(() => import('./pages/Guestbook'))
const Labs      = lazy(() => import('./pages/Labs'))
const Uses      = lazy(() => import('./pages/Uses'))
const BookCall  = lazy(() => import('./pages/BookCall'))
const Arena     = lazy(() => import('./pages/Arena'))
const Resume    = lazy(() => import('./pages/Resume'))

// Minimal inline fallback — no spinner, just bg color matches portfolio
const PageFallback = () => (
  <div className="fixed inset-0 bg-black" aria-hidden="true" />
)

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <Suspense fallback={<PageFallback />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
          <Route path="/links" element={<PageTransition><Links /></PageTransition>} />
          <Route path="/guestbook" element={<PageTransition><Guestbook /></PageTransition>} />
          <Route path="/labs" element={<PageTransition><Labs /></PageTransition>} />
          <Route path="/uses" element={<PageTransition><Uses /></PageTransition>} />
          <Route path="/book" element={<PageTransition><BookCall /></PageTransition>} />
          <Route path="/arena" element={<PageTransition><Arena /></PageTransition>} />
          <Route path="/resume" element={<PageTransition><Resume /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
