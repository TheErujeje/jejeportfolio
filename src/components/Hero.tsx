'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Terminal, ArrowDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-20">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="font-mono text-lime-400 mb-4 flex items-center gap-2"
          >
            <Terminal size={20} />
            <span>&gt; initializing_jeje_protocol.exe</span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            className="text-5xl md:text-7xl font-black text-white dark:text-white light:text-zinc-900 mb-6 tracking-tighter"
          >
            HELLO, I&apos;M <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-fuchsia-500 animate-pulse">
              ERUJEJE
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
            }}
            className="text-xl md:text-2xl text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mb-12 leading-relaxed"
          >
            Full-stack sorcerer, AI whisperer, and professional bug hunter. I
            teach rocks how to think (AI) and make browsers do backflips.
            <span className="block mt-4 text-fuchsia-400 font-mono text-lg">
              // You can just call me &quot;Jeje&quot; because life is too short for long
              names.
            </span>
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.6,
            }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="#projects"
              className="px-8 py-4 bg-lime-400 text-zinc-900 font-bold font-mono hover:bg-lime-300 transition-colors border-b-4 border-lime-600 active:border-b-0 active:translate-y-1"
            >
              SEE MY CHAOS
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200 text-white dark:text-white light:text-zinc-900 font-bold font-mono hover:bg-zinc-700 dark:hover:bg-zinc-700 light:hover:bg-zinc-300 transition-colors border-b-4 border-zinc-950 dark:border-zinc-950 light:border-zinc-400 active:border-b-0 active:translate-y-1"
            >
              SAY HELLO
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            x: 20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-lime-400 via-cyan-400 to-fuchsia-500 blur-xl opacity-30 animate-pulse" />
            <div className="relative bg-zinc-900 dark:bg-zinc-900 light:bg-white border-2 border-lime-400 shadow-[4px_4px_0px_0px_rgba(163,230,53,1)] p-2 overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Erujeje Profile"
                width={300}
                height={300}
                className="w-full h-full object-cover scale-150 -translate-x-8"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 text-zinc-500 dark:text-zinc-500 light:text-zinc-600"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  )
}