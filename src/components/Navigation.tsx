'use client'

import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export function Navigation() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }
    
    const timer = setTimeout(() => {
      handleScroll()
      window.addEventListener('scroll', handleScroll)
    }, 1000)
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  const handleNavClick = () => setIsMenuOpen(false)

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-lime-400 via-cyan-400 to-fuchsia-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-4 flex justify-between items-center bg-zinc-950/80 dark:bg-zinc-950/80 light:bg-white/80 backdrop-blur-md border-b border-zinc-800 dark:border-zinc-800 light:border-zinc-200">
        <Link
          href="#"
          className="text-2xl font-black tracking-tighter hover:text-lime-400 transition-colors"
        >
          JEJE<span className="text-lime-400">.DEV</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 font-mono text-sm items-center">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item === 'Home' ? 'hero' : item.toLowerCase()}`}
              className={`hover:text-lime-400 transition-colors ${
                activeSection === (item === 'Home' ? 'hero' : item.toLowerCase()) ? 'text-lime-400' : ''
              }`}
            >
              &lt;{item} /&gt;
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-30 bg-zinc-950 pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-8 text-2xl font-black">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item === 'Home' ? 'hero' : item.toLowerCase()}`}
                onClick={handleNavClick}
                className={`hover:text-lime-400 transition-colors flex items-center gap-4 ${
                  activeSection === (item === 'Home' ? 'hero' : item.toLowerCase()) ? 'text-lime-400' : ''
                }`}
              >
                <span className="text-lime-400 text-sm font-mono">
                  0{['Home', 'About', 'Skills', 'Projects', 'Contact'].indexOf(item) + 1}
                </span>
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </>
  )
}