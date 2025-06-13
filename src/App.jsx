import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import Nav from './component/Nav'
import PageTransition from './component/PageTransition'
import Social from './component/Social'
import { About, Contact, Home, Projects, Skills } from './index'

function App() {
  const [animating, setAnimating] = useState(false)

  return (
    <Router>
      <Social />
      <Nav setAnimating={setAnimating} animating={animating} />
      <PageTransition animating={animating}>
        <AnimatedRoutes animating={animating} />
      </PageTransition>
    </Router>
  )
}

function AnimatedRoutes({ animating }) {
  const location = useLocation()

  // If animating, render nothing to prevent flicker
  if (animating) return null

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  )
}

export default App
