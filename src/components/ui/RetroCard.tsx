import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface RetroCardProps {
  children: ReactNode
  className?: string
  title?: string
  color?: 'lime' | 'fuchsia' | 'cyan' | 'yellow'
}

export function RetroCard({
  children,
  className = '',
  title,
  color = 'lime',
}: RetroCardProps) {
  const borderColors = {
    lime: 'border-lime-400 shadow-[4px_4px_0px_0px_rgba(163,230,53,1)]',
    fuchsia: 'border-fuchsia-500 shadow-[4px_4px_0px_0px_rgba(217,70,239,1)]',
    cyan: 'border-cyan-400 shadow-[4px_4px_0px_0px_rgba(34,211,238,1)]',
    yellow: 'border-yellow-400 shadow-[4px_4px_0px_0px_rgba(250,204,21,1)]',
  }

  const headerColors = {
    lime: 'bg-lime-400 text-zinc-900',
    fuchsia: 'bg-fuchsia-500 text-white',
    cyan: 'bg-cyan-400 text-zinc-900',
    yellow: 'bg-yellow-400 text-zinc-900',
  }

  return (
    <motion.div
      whileHover={{
        y: -4,
        x: -2,
        transition: {
          duration: 0.2,
        },
      }}
      className={`border-2 bg-zinc-900 dark:bg-zinc-900 light:bg-white ${borderColors[color]} ${className} overflow-hidden`}
    >
      {title && (
        <div
          className={`${headerColors[color]} px-4 py-2 font-mono font-bold border-b-2 border-inherit flex justify-between items-center`}
        >
          <span>{title}</span>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-zinc-900/20" />
            <div className="w-3 h-3 rounded-full bg-zinc-900/20" />
          </div>
        </div>
      )}
      <div className="p-6">{children}</div>
    </motion.div>
  )
}