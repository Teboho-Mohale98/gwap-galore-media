'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const equipment = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
        <circle cx="12" cy="13" r="4"/>
      </svg>
    ),
    name: '4K / 8K Cameras',
    spec: 'Cinema-Grade',
    desc: 'Sony FX6, RED Komodo-class sensors delivering stunning detail in every frame.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    name: 'DJI Drone Systems',
    spec: 'Aerial Cinematography',
    desc: 'DJI Inspire 3 & Mavic 3 Pro for sweeping cinematic aerial shots.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    name: 'Gimbal Stabilizers',
    spec: 'Zero-Shake',
    desc: 'DJI RS 3 Pro & Ronin for buttery-smooth cinematic movement.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10">
        <path d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"/>
      </svg>
    ),
    name: 'Premium Lighting',
    spec: 'Studio-Grade',
    desc: 'Aputure 600D Pro, LED panels, and custom lighting setups for any environment.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10">
        <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
      </svg>
    ),
    name: 'Wireless Audio',
    spec: 'Studio-Quality',
    desc: 'Sennheiser, Rode Wireless GO II — crystal clear audio capture in any setting.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    name: 'Professional Editing Suite',
    spec: 'Post-Production',
    desc: 'DaVinci Resolve Studio, Adobe CC — color grading and editing at the highest level.',
  },
]

const specs = [
  { label: 'Max Resolution', value: '8K' },
  { label: 'Frame Rate', value: '240fps' },
  { label: 'Dynamic Range', value: '15+ Stops' },
  { label: 'Drone Height', value: '400m AGL' },
  { label: 'Audio Quality', value: '32-bit Float' },
  { label: 'Color Grading', value: 'HDR' },
]

export default function Equipment() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="relative py-32 bg-gg-dark overflow-hidden">
      {/* Tech grid bg */}
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />

      {/* Horizontal glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(204,0,0,0.12), transparent)' }}
      />

      <div className="section-padding relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="h-px w-12 bg-gg-red" />
            <span className="font-heading text-xs tracking-[0.4em] uppercase text-gg-red font-semibold">The Arsenal</span>
            <span className="h-px w-12 bg-gg-red" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white leading-[0.95] mb-6"
          >
            POWERED BY<br />
            <span className="text-gradient-chrome">PROFESSIONAL</span><br />
            <span className="text-gradient-red">4K &amp; 8K PRODUCTION.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="font-heading text-white/50 text-base leading-relaxed"
          >
            We invest in world-class equipment to ensure every project we deliver meets international broadcast standards.
          </motion.p>
        </div>

        {/* Tech specs strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-16"
        >
          {specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.06 }}
              className="glass-card rounded-lg p-4 text-center border-t border-t-gg-red/20"
            >
              <div className="font-display text-2xl text-gradient-red mb-1">{spec.value}</div>
              <div className="font-heading text-[9px] tracking-widest uppercase text-white/30">{spec.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Equipment cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {equipment.map((eq, i) => (
            <motion.div
              key={eq.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.6 }}
              className="glass-card rounded-lg p-6 group hover:border-white/15 transition-all duration-400 cursor-default relative overflow-hidden"
            >
              {/* Chrome border effect on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(192,192,192,0.5), transparent)' }}
              />

              {/* Icon */}
              <div className="text-white/20 group-hover:text-gg-silver transition-colors duration-300 mb-5 animate-float">
                {eq.icon}
              </div>

              {/* Spec badge */}
              <span className="font-heading text-[9px] tracking-[0.35em] uppercase text-gg-red font-bold mb-2 block">
                {eq.spec}
              </span>

              {/* Name */}
              <h3 className="font-heading font-black text-white mb-3 group-hover:text-gradient-chrome transition-all duration-300">
                {eq.name}
              </h3>

              <p className="font-heading text-white/40 text-sm leading-relaxed">{eq.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
