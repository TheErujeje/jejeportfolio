'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend_Stack',
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
        'Amplify',
      ],
      color: 'text-lime-400',
      border: 'border-lime-400',
    },
    {
      title: 'Backend_Stack',
      skills: [
        'Python',
        'Node.js',
        'PostgreSQL',
        'FastAPI',
        'Django',
        'GraphQL',
      ],
      color: 'text-fuchsia-400',
      border: 'border-fuchsia-400',
    },
    {
      title: 'AI_&_Data',
      skills: [
        'TensorFlow',
        'LLMs',
        'RAG',
        'MLFlow',
        'LangChain',
        'Notebooks',
        'Airflow',
        'Kafka'
      ],
      color: 'text-cyan-400',
      border: 'border-cyan-400',
    },
    {
      title: 'DevOps & Cloud',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Linux'],
      color: 'text-yellow-400',
      border: 'border-yellow-400',
    },
  ]

  return (
    <section id="skills" className="py-20 px-4">
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
          className="mb-16 text-right"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white dark:text-white light:text-zinc-900 mb-4">
            MY <span className="text-fuchsia-400">TOOLKIT</span>
          </h2>
          <motion.div 
            animate={{ x: [0, -150, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="h-1 w-20 bg-fuchsia-400 ml-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
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
                delay: idx * 0.1,
              }}
              className="bg-zinc-900 dark:bg-zinc-900 light:bg-white rounded-lg overflow-hidden border border-zinc-800 dark:border-zinc-800 light:border-zinc-200"
            >
              {/* Terminal Header */}
              <div className="bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-100 px-4 py-2 flex items-center gap-2 border-b border-zinc-700 dark:border-zinc-700 light:border-zinc-300">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 font-mono text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
                  ~/skills/{category.title}.sh
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono">
                <div className="mb-4 text-zinc-500 dark:text-zinc-500 light:text-zinc-600">
                  <span className="text-green-500">jeje@dev:~$</span> cat{' '}
                  {category.title}.txt
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 bg-zinc-800/50 dark:bg-zinc-800/50 light:bg-zinc-200/50 ${category.color} border ${category.border} border-opacity-30 rounded text-sm hover:bg-zinc-800 dark:hover:bg-zinc-800 light:hover:bg-zinc-300 transition-colors cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <span className="text-green-500">jeje@dev:~$</span>{' '}
                  <motion.span 
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-2 h-4 bg-green-500 inline-block align-middle" 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}