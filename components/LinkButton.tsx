'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface LinkButtonProps {
  href: string
  children: React.ReactNode
  icon?: React.ReactNode
  onClick?: () => void
}

export function LinkButton({ href, children, icon, onClick }: LinkButtonProps) {
  return (
    <motion.div
      className="w-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link 
        href={href} 
        className="block w-full py-4 px-6 bg-white text-[#1E90FF] rounded-full text-center font-semibold transition-colors hover:bg-white/90 flex items-center justify-center gap-3 text-lg"
        onClick={onClick}
      >
        {icon}
        {children}
      </Link>
    </motion.div>
  )
}

