'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'

const milestones = [
  { year: '2017', title: 'Founded', desc: 'Born from passion in South Africa — Gwap Galore Media opens its doors with a vision to redefine local storytelling.' },
  { year: '2019', title: 'Breaking Ground', desc: 'First major broadcast partnerships with SABC 1, Mzansi Magic, and Moja Love. The vision starts taking shape.' },
  { year: '2021', title: 'Going Premium', desc: 'Upgraded to full 4K/8K production. Weddings, corporates, and government projects elevate the brand nationally.' },
  { year: '2023', title: 'Cinematic Excellence', desc: 'BET Tese Festival, Major League Gardens, SAFI — Gwap Galore takes the stage on Africa\'s biggest platforms.' },
  { year: '2024+', title: 'Legacy in Motion', desc: 'Expanding into documentary production, drone cinematography, and international creative partnerships.' },
]

const stats = [
  { end: 100, suffix: '+', label: 'Productions Delivered' },
  { end: 7, suffix: '+', label: 'Years of Excellence' },
  { end: 500, suffix: '+', label: 'Clients Served' },
  { end: 98, suffix: '%', label: 'Client Satisfaction' },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="about" ref={ref} className="relative py-32 bg-gg-dark overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(139,0,0,0.08) 0%, transparent 60%)' }}
      />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(204,0,0,0.06) 0%, transparent 60%)' }}
      />

      <div className="section-padding relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="h-px w-12 bg-gg-red" />
          <span className="font-heading text-xs tracking-[0.4em] uppercase text-gg-red font-semibold">Our Story</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left: headline + text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white leading-[0.95] mb-8"
            >
              BUILT FROM<br />
              <span className="text-gradient-red">PASSION.</span><br />
              DRIVEN BY<br />VISION.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="space-y-5"
            >
              <p className="font-heading text-white/60 leading-relaxed text-sm md:text-base">
                Gwap Galore Media is a <span className="text-white font-semibold">young, black-owned South African media production company</span> founded in 2017. We emerged from the streets of South Africa with one mission: to tell our stories with the cinematic excellence they deserve.
              </p>
              <p className="font-heading text-white/50 leading-relaxed text-sm md:text-base">
                From humble beginnings to national broadcast platforms — SABC 1, Mzansi Magic, Moja Love — we have consistently delivered premium visual experiences for weddings, corporates, government projects, and major cultural events.
              </p>
              <p className="font-heading text-white/50 leading-relaxed text-sm md:text-base">
                We are not just a production company. We are storytellers, creatives, and visionaries. Every frame we capture is a testament to South African excellence on the world stage.
              </p>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-2 mt-8"
            >
              {['Black-Owned', 'Youth-Led', 'South African', 'Est. 2017', '4K/8K Production', 'Award-Winning'].map(tag => (
                <span
                  key={tag}
                  className="glass-card-red px-3 py-1 rounded-full text-xs font-heading font-semibold tracking-wider text-red-400"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                className="glass-card rounded-lg p-6 text-center group hover:border-red-800/40 transition-all duration-300"
              >
                <div className="stat-number mb-2">
                  {inView && (
                    <CountUp end={stat.end} duration={2.5} delay={0.3 + i * 0.15} suffix={stat.suffix} />
                  )}
                </div>
                <p className="font-heading text-xs tracking-widest uppercase text-white/40">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="font-display text-3xl md:text-4xl text-white text-center mb-16"
          >
            THE <span className="text-gradient-red">JOURNEY</span>
          </motion.h3>

          <div className="relative">
            {/* Center line - desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-900/50 to-transparent" />

            <div className="space-y-8 md:space-y-0">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.9 + i * 0.12, duration: 0.7 }}
                  className={`relative md:flex md:items-center md:gap-8 mb-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Card */}
                  <div className={`glass-card rounded-lg p-6 md:w-5/12 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="font-display text-5xl text-gradient-red leading-none block mb-2">{m.year}</span>
                    <h4 className="font-heading font-bold text-white mb-2">{m.title}</h4>
                    <p className="font-heading text-white/50 text-sm leading-relaxed">{m.desc}</p>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-gg-red shadow-red-glow" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
