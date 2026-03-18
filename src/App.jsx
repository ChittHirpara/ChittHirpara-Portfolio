import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Links from './pages/Links'
import Guestbook from './pages/Guestbook'
import Labs from './pages/Labs'
import Uses from './pages/Uses'
import BookCall from './pages/BookCall'
import Arena from './pages/Arena'
import Resume from './pages/Resume'
import PageTransition from './components/PageTransition'
import './index.css'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <About />
          </PageTransition>
        } />
        <Route path="/work" element={
          <PageTransition>
            <Work />
          </PageTransition>
        } />
        <Route path="/links" element={
          <PageTransition>
            <Links />
          </PageTransition>
        } />
        <Route path="/guestbook" element={
          <PageTransition>
            <Guestbook />
          </PageTransition>
        } />
        <Route path="/labs" element={
          <PageTransition>
            <Labs />
          </PageTransition>
        } />
        <Route path="/uses" element={
          <PageTransition>
            <Uses />
          </PageTransition>
        } />
        <Route path="/book" element={
          <PageTransition>
            <BookCall />
          </PageTransition>
        } />
        <Route path="/arena" element={
          <PageTransition>
            <Arena />
          </PageTransition>
        } />
        <Route path="/resume" element={
          <PageTransition>
            <Resume />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
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
