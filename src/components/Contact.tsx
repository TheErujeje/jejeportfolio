'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github, MessageCircle } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({ from: '', subject: '', body: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState({ text: '', type: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage({ text: '', type: '' })
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxHHdthRuZaFnYnzx8x-iUGK6-AoaLt_VscJAYiJ770JKlw_WuoivgG_oEJbrvysgFA4A/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: formData.subject,
          message: formData.body,
          sender: formData.from,
        }),
      })
      
      setFormData({ from: '', subject: '', body: '' })
      setMessage({ text: 'GIT PUSH SUCCESSFUL! Message deployed to inbox.', type: 'success' })
    } catch (error) {
      setMessage({ text: 'RESOLVE CONFLICT: Failed to push message. Please try again.', type: 'error' })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setMessage({ text: '', type: '' }), 5000)
    }
  }

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

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-16">
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
              {/* Terminal Header */}
              <div className="bg-zinc-800 px-4 py-2 flex items-center gap-2 border-b border-zinc-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 font-mono text-xs text-zinc-400">
                  ~/contact/message.sh
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-left space-y-4">
                <div>
                  <div className="text-zinc-500 mb-2">
                    <span className="text-green-500">jeje@dev:~$</span> echo "FROM:"
                  </div>
                  <input
                    type="email"
                    required
                    value={formData.from}
                    onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded px-3 py-2 text-lime-400 focus:outline-none focus:border-lime-400 transition-colors"
                  />
                </div>

                <div>
                  <div className="text-zinc-500 mb-2">
                    <span className="text-green-500">jeje@dev:~$</span> echo "SUBJECT:"
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Collaboration"
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded px-3 py-2 text-lime-400 focus:outline-none focus:border-lime-400 transition-colors"
                  />
                </div>

                <div>
                  <div className="text-zinc-500 mb-2">
                    <span className="text-green-500">jeje@dev:~$</span> cat message.txt
                  </div>
                  <textarea
                    required
                    value={formData.body}
                    onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                    placeholder="Your message here..."
                    rows={6}
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded px-3 py-2 text-lime-400 focus:outline-none focus:border-lime-400 transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <span className="text-zinc-500">
                    <span className="text-green-500">jeje@dev:~$</span>
                    <motion.span 
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-2 h-4 bg-green-500 inline-block align-middle ml-1" 
                    />
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2 bg-lime-400 text-zinc-900 font-bold rounded hover:bg-lime-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'PUSHING...' : 'GIT PUSH'}
                  </button>
                </div>
              </div>
            </div>
          </form>

          {message.text && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`max-w-2xl mx-auto mb-16 p-4 rounded-lg border font-mono text-center ${
                message.type === 'success' 
                  ? 'bg-green-900/20 border-green-500 text-green-400' 
                  : 'bg-red-900/20 border-red-500 text-red-400'
              }`}
            >
              {message.text}
            </motion.div>
          )}

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