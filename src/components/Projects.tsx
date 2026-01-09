'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { RetroCard } from './ui/RetroCard'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/data/projects'

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-zinc-900/50 dark:bg-zinc-900/50 light:bg-zinc-100/50">
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
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white dark:text-white light:text-zinc-900 mb-4">
            STUFF I <span className="text-lime-400">BUILT</span>
          </h2>
          <motion.div 
            animate={{ x: [0, 150, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="h-1 w-20 bg-lime-400"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: idx * 0.2,
              }}
              className="flex"
            >
              <Link
                href={`/projects/${project.id}`}
                className="block w-full group"
              >
                <RetroCard
                  title={`PROJECT_0${idx + 1}`}
                  color={project.color}
                  className="h-full flex flex-col transition-transform duration-300 group-hover:-translate-y-2"
                >
                  <h3 className={`text-2xl font-bold text-white dark:text-white light:text-zinc-900 mb-3 transition-colors ${project.color === 'lime' ? 'group-hover:text-lime-400' : project.color === 'cyan' ? 'group-hover:text-cyan-400' : 'group-hover:text-fuchsia-400'}`}>
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-1 bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs font-mono px-2 py-1 bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200 text-zinc-500 dark:text-zinc-500 light:text-zinc-600 rounded">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-200 mt-auto">
                    <span className="text-sm font-bold text-zinc-500 dark:text-zinc-500 light:text-zinc-600 group-hover:text-white dark:group-hover:text-white light:group-hover:text-zinc-900 transition-colors flex items-center gap-2">
                      VIEW DETAILS <ArrowRight size={16} />
                    </span>
                  </div>
                </RetroCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}