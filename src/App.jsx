import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import Nav from './component/Nav'
import PageTransition from './component/PageTransition'
import Social from './component/Social'
import { About, Contact, Home, Projects, Skills } from './index'

function App() {
  const [animating, setAnimating] = useState(false)

  return (
    <div className='relative min-h-screen w-screen'>
      <Router>
      <Social />
      <Nav setAnimating={setAnimating} animating={animating} />
      <PageTransition animating={animating}>
        <AnimatedRoutes animating={animating} />
      </PageTransition>
    </Router>
    </div>
  )
}

function AnimatedRoutes({ animating }) {
  const location = useLocation()

  return (
    <div className='bg-[#fffaf6] h-auto'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={animating ? null : <Home />} />
        <Route path="/About" element={animating ? null : <About />} />
        <Route path="/Skills" element={animating ? null : <Skills />} />
        <Route path="/Projects" element={animating ? null : <Projects />} />
        <Route path="/Contact" element={animating ? null : <Contact />} />
      </Routes>
    </div>
  )
}

export default App
