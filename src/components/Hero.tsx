'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal, ArrowDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface HeroProps {
  onAnimationComplete?: () => void
  skipAnimation?: boolean
}

export function Hero({ onAnimationComplete, skipAnimation = false }: HeroProps) {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = '$ cat jeje_portfolio.web'

  useEffect(() => {
    if (skipAnimation) {
      setDisplayedText(fullText)
      onAnimationComplete?.()
      return
    }
    
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [skipAnimation, fullText])

  useEffect(() => {
    if (skipAnimation) return
    
    const timer = setTimeout(() => {
      onAnimationComplete?.()
    }, 4800)
    return () => clearTimeout(timer)
  }, [onAnimationComplete, skipAnimation])

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-20">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="font-mono text-lime-400 mb-4 flex items-center gap-2">
            <Terminal size={20} />
            <span>{displayedText}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              _
            </motion.span>
          </div>

          {skipAnimation ? (
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              HELLO, I&apos;M <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-fuchsia-500 animate-pulse">
                ERUJEJE
              </span>
            </h1>
          ) : (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.0, duration: 0.8 }}
              className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter"
            >
              HELLO, I&apos;M <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-fuchsia-500 animate-pulse">
                ERUJEJE
              </span>
            </motion.h1>
          )}

          {skipAnimation ? (
            <p className="text-xl md:text-2xl text-zinc-400 mb-12 leading-relaxed">
              Software developer, AI enthusiast, and problem solver. I turn complex systems into smart solutions and make browsers dance to my code
              <span className="block mt-4 text-fuchsia-400 font-mono text-lg">
                {/* You can just call me "Jeje" because life is too short for long names. */}
              </span>
            </p>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-zinc-400 mb-12 leading-relaxed"
            >
              Software developer, AI enthusiast, and problem solver. I turn complex systems into smart solutions and make browsers dance to my code
              <span className="block mt-4 text-fuchsia-400 font-mono text-lg">
                {/* You can just call me "Jeje" because life is too short for long names. */}
              </span>
            </motion.p>
          )}

          {skipAnimation ? (
            <div className="flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="px-8 py-4 bg-lime-400 text-zinc-900 font-bold font-mono hover:bg-lime-300 transition-colors border-b-4 border-lime-600 active:border-b-0 active:translate-y-1"
              >
                SEE MY WORK
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 bg-zinc-800 text-white font-bold font-mono hover:bg-zinc-700 transition-colors border-b-4 border-zinc-950 active:border-b-0 active:translate-y-1"
              >
                SAY HELLO
              </Link>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.7, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#projects"
                className="px-8 py-4 bg-lime-400 text-zinc-900 font-bold font-mono hover:bg-lime-300 transition-colors border-b-4 border-lime-600 active:border-b-0 active:translate-y-1"
              >
                SEE MY WORK
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 bg-zinc-800 text-white font-bold font-mono hover:bg-zinc-700 transition-colors border-b-4 border-zinc-950 active:border-b-0 active:translate-y-1"
              >
                SAY HELLO
              </Link>
            </motion.div>
          )}
        </div>

        {skipAnimation ? (
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-lime-400 via-cyan-400 to-fuchsia-500 blur-xl opacity-30 animate-pulse" />
              <div className="relative bg-zinc-900 border-2 border-lime-400 shadow-[4px_4px_0px_0px_rgba(163,230,53,1)] p-2 overflow-hidden">
                <Image
                  src="/Profile.jpg"
                  alt="Erujeje Profile"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover scale-150 -translate-x-8"
                  priority
                />
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.8, duration: 0.8 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-lime-400 via-cyan-400 to-fuchsia-500 blur-xl opacity-30 animate-pulse" />
              <div className="relative bg-zinc-900 border-2 border-lime-400 shadow-[4px_4px_0px_0px_rgba(163,230,53,1)] p-2 overflow-hidden">
                <Image
                  src="/Profile.jpg"
                  alt="Erujeje Profile"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover scale-150 -translate-x-8"
                  priority
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {skipAnimation ? (
        <div className="absolute bottom-10 text-zinc-500">
          <div>
            <ArrowDown size={32} />
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.0, duration: 0.8 }}
          className="absolute bottom-10 text-zinc-500"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown size={32} />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}