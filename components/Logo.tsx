import Image from 'next/image'
import ranLogo from './ran_logo.png'

export function Logo() {
  return (
    <div className="w-64 h-64 relative mx-auto">
      <Image
        src={ranLogo}
        alt="RAN Clothing Logo"
        fill
        className="object-contain"
      />
    </div>
  )
}

