'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'

export default function Home() {
  const [showOtherSections, setShowOtherSections] = useState(false)
  const [isFirstVisit, setIsFirstVisit] = useState(true)

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedHome')
    if (hasVisited) {
      setIsFirstVisit(false)
      setShowOtherSections(true)
    }
  }, [])

  const handleAnimationComplete = () => {
    sessionStorage.setItem('hasVisitedHome', 'true')
    setShowOtherSections(true)
  }

  return (
    <>
      <Navigation />
      <main>
        <Hero 
          onAnimationComplete={handleAnimationComplete} 
          skipAnimation={!isFirstVisit}
        />
        {(showOtherSections || !isFirstVisit) && (
          <motion.div
            initial={{ opacity: isFirstVisit ? 0 : 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: isFirstVisit ? 0.8 : 0 }}
          >
            <About />
            <Skills />
            <Projects />
            <Contact />
          </motion.div>
        )}
      </main>
    </>
  )
}