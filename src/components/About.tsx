'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { RetroCard } from './ui/RetroCard'
import { Code2, Brain, Coffee, Rocket } from 'lucide-react'

export function About() {
  const initialStats = [
    {
      icon: Code2,
      label: 'Lines of Code',
      value: 'Too Many',
      color: 'text-lime-400',
    },
    {
      icon: Coffee,
      label: 'Caffeine Level',
      value: 'Critical',
      color: 'text-yellow-400',
    },
    {
      icon: Brain,
      label: 'AI Models Trained',
      value: 'Several',
      color: 'text-fuchsia-400',
    },
    {
      icon: Rocket,
      label: 'Production Crashes',
      value: '0*',
      color: 'text-cyan-400',
    },
  ]

  const [stats, setStats] = useState(initialStats)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStats([...stats].sort(() => Math.random() - 0.5))
    }, 2000)
    return () => clearTimeout(timeout)
  }, [stats])

  return (
    <section id="about" className="py-20 px-4 bg-zinc-900/50 dark:bg-zinc-900/50 light:bg-zinc-100/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white dark:text-white light:text-zinc-900 mb-4">
            WHO IS <span className="text-cyan-400">JEJE?</span>
          </h2>
          <motion.div 
            animate={{ x: [0, 150, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="h-1 w-20 bg-cyan-400"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-lg text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed">
            <p>
              <strong className="text-white dark:text-white light:text-zinc-900">Official Bio:</strong> I&apos;m a 
              Software Developer and AI Engineer with a passion for building
              scalable, intelligent systems. I specialize in the Python
              ecosystem, React frontends, and cloud infrastructure.
            </p>
            <p>
              <strong className="text-white dark:text-white light:text-zinc-900">Real Bio:</strong> Most days, I’m somewhere between learning something new, untangling AWS deployment issues, and convincing myself that watching tech videos absolutely counts as productivity. 
              
            </p>

            <p>
              When I’m not writing code, I’m playing chess, watching football, or chasing down puzzles and brain teasers — because breaking problems (and fixing them again) is kind of my thing.
            </p>


            <div className="pt-6">
              <p className="font-mono text-sm text-zinc-500 dark:text-zinc-500 light:text-zinc-600 mb-2">
                * Disclaimer: &quot;0 Production Crashes&quot; refers to the last 24 hours
                only.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={`${stat.label}-${stat.value}`}
                layout
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                }}
              >
                <RetroCard color="cyan" className="text-center py-6">
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-2xl font-bold text-white dark:text-white light:text-zinc-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600 uppercase">
                    {stat.label}
                  </div>
                </RetroCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}