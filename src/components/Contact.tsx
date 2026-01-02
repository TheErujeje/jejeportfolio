'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function Contact() {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-lime-400 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-fuchsia-500 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-white dark:text-white light:text-zinc-900 mb-8">
            LET&apos;S MAKE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">
              SOMETHING COOL
            </span>
          </h2>

          <p className="text-xl text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mb-12 max-w-2xl mx-auto">
            Have a project that needs some AI magic? Or just want to play some chess? My inbox is open.
          </p>

          <a
            href="mailto:erujeje@example.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-white light:bg-zinc-900 text-zinc-900 dark:text-zinc-900 light:text-white font-bold text-xl rounded-full hover:scale-105 transition-transform duration-200 mb-16"
          >
            <Mail className="w-6 h-6" />
            ucheohanado@gmail.com
          </a>

          <div className="flex justify-center gap-8">
            {[
              {
                icon: Github,
                href: 'https://github.com/TheErujeje',
                label: 'GitHub',
              },
              {
                icon: Linkedin,
                href: 'https://www.linkedin.com/in/uchechukwu-ohanado/',
                label: 'LinkedIn',
              },
              {
                icon: MessageCircle,
                href: 'https://wa.me/2349033676622?text=Hi%20Erujeje,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.',
                label: 'WhatsApp',
              },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -5,
                }}
                className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={32} />
              </motion.a>
            ))}
          </div>

          <footer className="mt-32 text-zinc-600 dark:text-zinc-600 light:text-zinc-500 font-mono text-sm">
            <p>
              © {new Date().getFullYear()} Erujeje. Built with React, Caffeine,
              and a bit of Chaos.
            </p>
          </footer>
        </motion.div>
      </div>
    </section>
  )
}