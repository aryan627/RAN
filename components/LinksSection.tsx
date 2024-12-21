'use client'

import { motion } from 'framer-motion'
import { LinkButton } from './LinkButton'
import { Globe, Instagram, CreditCard } from 'lucide-react'

export function LinksSection() {
  const links = [
    { 
      href: 'https://ranranran.co/', 
      text: 'Website',
      icon: <Globe className="w-5 h-5" />
    },
    { 
      href: 'https://www.instagram.com/ranmilkco', 
      text: 'Instagram',
      icon: <Instagram className="w-5 h-5" />
    },
    { 
      href: 'https://www.venmo.com/u/ranclo', 
      text: 'Venmo',
      icon: <CreditCard className="w-5 h-5" />
    },
  ]

  return (
    <motion.div 
      className="flex flex-col items-center gap-4 w-full max-w-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {links.map((link, index) => (
        <LinkButton 
          key={index} 
          href={link.href}
          icon={link.icon}
        >
          {link.text}
        </LinkButton>
      ))}
    </motion.div>
  )
}

