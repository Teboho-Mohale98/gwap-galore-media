'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1,
  x: Math.random() * 100,
  delay: Math.random() * 8,
  duration: Math.random() * 6 + 6,
}))

const stats = [
  { value: '100+', label: 'Productions' },
  { value: '7+', label: 'Years Experience' },
  { value: '4K/8K', label: 'Production' },
  { value: '500+', label: 'Clients Served' },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNav = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gg-black">
      {/* Cinematic background grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Red atmospheric glow — top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(204,0,0,0.25) 0%, transparent 60%)',
        }}
      />
      {/* Red glow — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom left, rgba(139,0,0,0.2) 0%, transparent 60%)',
        }}
      />

      {/* Animated particles */}
      {mounted && particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-red-700/40 pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            bottom: '-5px',
          }}
          animate={{
            y: [0, -(window.innerHeight + 20)],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Diagonal cinematic lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(204,0,0,0.15), transparent)',
              top: `${25 + i * 25}%`,
              left: 0,
              right: 0,
              transform: `rotate(${-3 + i * 3}deg) scaleX(1.5)`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 section-padding text-center pt-32 pb-24">
        {/* Pre-headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="h-px w-12 bg-gg-red" />
          <span className="font-heading text-xs tracking-[0.4em] uppercase text-gg-red font-semibold">
            South African Media Production
          </span>
          <span className="h-px w-12 bg-gg-red" />
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(3rem,9vw,8rem)] text-white leading-[0.92] tracking-tight"
          >
            LUXURY<br />
            <span
              className="text-gradient-red"
              style={{ filter: 'drop-shadow(0 0 20px rgba(204,0,0,0.4))' }}
            >
              CINEMATIC
            </span>
            <br />
            STORYTELLING
          </motion.h1>
        </div>

        {/* Sub headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="font-heading text-base md:text-lg text-white/60 max-w-2xl mb-4 leading-relaxed font-light"
        >
          For Weddings, Brands &amp; Culture.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="font-heading text-sm md:text-base text-white/40 max-w-xl mb-12 leading-relaxed"
        >
          We create unforgettable visuals that turn moments into timeless experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 items-center mb-20"
        >
          <button
            onClick={() => handleNav('#contact')}
            className="btn-primary text-white min-w-[200px]"
          >
            <span className="relative z-10">Book A Shoot</span>
          </button>
          <button
            onClick={() => handleNav('#portfolio')}
            className="btn-secondary text-white min-w-[200px]"
          >
            View Portfolio
          </button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-3xl"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 + i * 0.1 }}
              className="flex flex-col items-center"
            >
              <span className="font-display text-4xl md:text-5xl text-gradient-red mb-1">
                {stat.value}
              </span>
              <span className="font-heading text-xs tracking-[0.2em] uppercase text-white/40">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-heading text-[10px] tracking-[0.3em] uppercase text-white/30">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-gg-red to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>

      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gg-black to-transparent pointer-events-none" />
    </section>
  )
}
