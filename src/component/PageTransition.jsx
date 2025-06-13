import { AnimatePresence, motion } from 'framer-motion'

export default function PageTransition({ animating, children }) {
  return (
    <>
      <AnimatePresence>
        {animating && (
          <motion.div
            key="overlay"
            initial={{ scaleX: 0, transformOrigin: 'right' }}
            animate={{ scaleX: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }}
            exit={{ scaleX: 0, transformOrigin: 'left', transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              height: '100vh',
              width: '100vw',
              backgroundColor: 'black',
              zIndex: 9999,
              willChange: 'transform',
            }}
          />
        )}
      </AnimatePresence>

      {!animating && children}
    </>
  )
}
