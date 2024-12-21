import { Hero } from '@/components/Hero'
// import { Footer } from './components/Footer'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1E90FF] text-white flex flex-col justify-between">
      <Hero />
      <Footer />
    </main>
  )
}

