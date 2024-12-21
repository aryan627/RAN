'use client'

import { motion } from 'framer-motion'
import { Logo } from './Logo'
import { LinksSection } from './LinksSection'

export function Hero() {
  return (
    <motion.section 
      className="text-center py-12 flex flex-col items-center justify-center min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="w-full max-w-2xl mb-8" 
      >
        <Logo />
      </motion.div>
      <motion.h1 
        className="text-6xl font-bold mb-2"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        RAN
      </motion.h1>
      <motion.p 
        className="text-xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        Streetwear that stands out.
      </motion.p>
      <LinksSection />
    </motion.section>
  )
}
