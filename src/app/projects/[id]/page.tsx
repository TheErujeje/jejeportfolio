'use client'

import React, { useEffect, useMemo } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Terminal,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react'
import { projects } from '@/data/projects'
import { RetroCard } from '@/components/ui/RetroCard'
import Link from 'next/link'

export default function ProjectDetail() {
  const params = useParams()
  const id = params?.id as string
  const project = useMemo(() => projects.find((p) => p.id === id), [id])

  const colors = useMemo(() => ({
    lime: 'text-lime-400',
    cyan: 'text-cyan-400',
    fuchsia: 'text-fuchsia-400',
  }), [])

  const bgColors = useMemo(() => ({
    lime: 'bg-lime-400',
    cyan: 'bg-cyan-400',
    fuchsia: 'bg-fuchsia-500',
  }), [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-mono mb-4">404: PROJECT_NOT_FOUND</h1>
          <Link
            href="/"
            className="text-lime-400 hover:underline font-mono"
          >
            &lt; Return_to_Base /&gt;
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-lime-400 selection:text-zinc-900 pb-20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-4 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-mono"
          >
            <ArrowLeft size={20} />
            <span>cd ..</span>
          </Link>
          <div className="font-mono text-sm text-zinc-500">
            ~/projects/{project.id}
          </div>
        </div>
      </nav>

      <main className="pt-32 px-4 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mb-16"
        >
          <div
            className={`inline-block px-3 py-1 rounded-full ${bgColors[project.color]} bg-opacity-10 border border-${project.color} ${colors[project.color]} font-mono text-sm mb-6`}
          >
            PROJECT_ID: {project.id.toUpperCase()}
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
            {project.tagline}
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
          }}
          className="flex gap-4 mb-20"
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-white font-mono rounded transition-all hover:-translate-y-1"
          >
            <Github size={20} />
            SOURCE_CODE
          </a>
          {project.status === 'Live' ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 ${bgColors[project.color]} text-zinc-900 font-bold font-mono rounded transition-all hover:-translate-y-1 hover:brightness-110`}
            >
              <ExternalLink size={20} />
              LIVE_DEMO
            </a>
          ) : (
            <div className="flex items-center gap-2 px-6 py-3 bg-zinc-700 text-zinc-500 font-bold font-mono rounded cursor-not-allowed opacity-70">
              <ExternalLink size={20} />
              LIVE_DEMO
            </div>
          )}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Terminal className={colors[project.color]} />
                Overview
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed">
                {project.fullDescription}
              </p>
            </section>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <RetroCard color={project.color} className="h-full">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <AlertTriangle size={20} className="text-yellow-400" />
                  The Problem
                </h3>
                <p className="text-zinc-400">{project.problem}</p>
              </RetroCard>
              <RetroCard color={project.color} className="h-full">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Lightbulb size={20} className={colors[project.color]} />
                  The Solution
                </h3>
                <p className="text-zinc-400">{project.solution}</p>
              </RetroCard>
            </div>

            {/* Features */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                Key Features
              </h2>
              <ul className="space-y-4">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-zinc-300"
                  >
                    <span
                      className={`mt-1.5 w-2 h-2 rounded-full ${bgColors[project.color]}`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges & Learnings */}
            <section className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Dev Log</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Challenges
                  </h3>
                  <p className="text-zinc-400">{project.challenges}</p>
                </div>
                <div className="h-px bg-zinc-800" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Learnings
                  </h3>
                  <p className="text-zinc-400">{project.learnings}</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Tech Stack & Meta */}
          <div className="space-y-8">
            <RetroCard title="TECH_STACK" color={project.color}>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-zinc-950 border border-zinc-800 rounded text-sm font-mono text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </RetroCard>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-4">
                Project Stats
              </h3>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Status</span>
                  <span className={project.status === 'Live' ? 'text-green-400' : project.status === 'Paused' ? 'text-yellow-400' : 'text-zinc-400'}>{project.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Version</span>
                  <span className="text-white">{project.version}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">License</span>
                  <span className="text-white">{project.license}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}