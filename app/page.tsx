'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import WeddingPackages from '@/components/WeddingPackages'
import Portfolio from '@/components/Portfolio'
import DayOne from '@/components/DayOne'
import Equipment from '@/components/Equipment'
import Clients from '@/components/Clients'
import Social from '@/components/Social'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import MarqueeBanner from '@/components/MarqueeBanner'

const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false })
const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'), { ssr: false })
const Cursor = dynamic(() => import('@/components/Cursor'), { ssr: false })

const marqueeItems1 = [
  'CINEMATIC EXCELLENCE', 'LUXURY PRODUCTION', 'SOUTH AFRICAN', 'WEDDING FILMS',
  'CORPORATE MEDIA', 'DRONE CINEMATOGRAPHY', 'BROADCAST READY', '4K / 8K',
]

const marqueeItems2 = [
  'GWAP GALORE MEDIA', 'EST. 2017', 'BUILT FROM DAY ONE', 'BLACK OWNED',
  'MZANSI MAGIC', 'SABC 1', 'MOJA LOVE', 'BET TESE FESTIVAL',
]

export default function Home() {
  // Lenis-like smooth scrolling via CSS
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <>
      <LoadingScreen />
      <Cursor />
      <Navbar />

      <main>
        {/* 1. Hero */}
        <Hero />

        {/* Divider marquee */}
        <div className="bg-gg-dark border-y border-white/5 overflow-hidden">
          <MarqueeBanner items={marqueeItems1} />
        </div>

        {/* 2. About */}
        <About />

        {/* 3. Services */}
        <Services />

        {/* Divider marquee */}
        <div className="bg-gg-dark border-y border-white/5 overflow-hidden">
          <MarqueeBanner items={marqueeItems2} reverse />
        </div>

        {/* 4. Wedding Packages */}
        <WeddingPackages />

        {/* 5. Portfolio */}
        <Portfolio />

        {/* 6. Day One - Motivational */}
        <DayOne />

        {/* 7. Equipment */}
        <Equipment />

        {/* 8. Clients & Trust */}
        <Clients />

        {/* 9. Social Media */}
        <Social />

        {/* 10. Contact */}
        <Contact />
      </main>

      <Footer />
    </>
  )
}
