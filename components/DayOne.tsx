'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

export default function DayOne() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['5%', '-5%'])

  return (
    <section
      ref={ref}
      className="relative py-40 overflow-hidden bg-gg-black"
    >
      {/* Deep red atmospheric bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(139,0,0,0.2) 0%, rgba(8,8,8,0) 60%)',
        }}
      />

      {/* Large background text */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none"
      >
        <span
          className="font-display text-[clamp(8rem,25vw,22rem)] text-white/[0.015] leading-none whitespace-nowrap"
        >
          DAY ONE
        </span>
      </motion.div>

      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      {/* Horizontal scan lines */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute left-0 right-0 h-px"
          style={{
            top: `${20 + i * 20}%`,
            background: 'linear-gradient(90deg, transparent, rgba(204,0,0,0.06), transparent)',
          }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      <div className="section-padding relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Pre-label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-4 mb-12"
          >
            <span className="h-px w-12 bg-gg-red" />
            <span className="font-heading text-xs tracking-[0.4em] uppercase text-gg-red font-semibold">The Philosophy</span>
          </motion.div>

          {/* Main headline — split animation */}
          <div className="overflow-hidden mb-6">
            <motion.div
              initial={{ y: '100%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-display text-[clamp(3.5rem,10vw,9rem)] text-white leading-[0.88]">
                ONE DAY
              </h2>
            </motion.div>
          </div>

          <div className="overflow-hidden mb-4">
            <motion.div
              initial={{ y: '100%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ delay: 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-display text-[clamp(3.5rem,10vw,9rem)] leading-[0.88]">
                <span className="text-gradient-red" style={{ filter: 'drop-shadow(0 0 25px rgba(204,0,0,0.4))' }}>
                  OR DAY ONE.
                </span>
              </h2>
            </motion.div>
          </div>

          <div className="overflow-hidden mb-16">
            <motion.div
              initial={{ y: '100%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-display text-[clamp(3.5rem,10vw,9rem)] text-white/20 leading-[0.88]">
                YOU DECIDE.
              </h2>
            </motion.div>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-6"
            >
              <p className="font-heading text-white/70 text-base leading-relaxed">
                In 2017, Gwap Galore Media was born from a dream, not a boardroom. Two words drove everything we built: <span className="text-white font-semibold">Day One</span>. Not "one day I'll have the right equipment." Not "one day I'll get the big clients." Day One — we start now, we build now, we earn it.
              </p>
              <p className="font-heading text-white/50 text-base leading-relaxed">
                Every frame we shoot is a declaration that South African stories deserve cinematic excellence. Every wedding, every corporate brand film, every documentary — it's proof that passion, when disciplined, creates legacy.
              </p>
              <p className="font-heading text-white/40 text-base leading-relaxed italic">
                "From Vision to Legacy — because the difference between those who make it and those who don't isn't talent. It's who decided that today is Day One."
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-gg-red to-transparent w-40" />

              <p className="font-heading text-xs tracking-[0.3em] uppercase text-white/30">
                — Gwap Galore Media, Est. 2017
              </p>
            </motion.div>

            {/* Visual side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative"
            >
              {/* Large stylized GG emblem */}
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Outer ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-red-900/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute inset-4 rounded-full border border-red-900/20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                />
                <div
                  className="absolute inset-0 m-auto flex items-center justify-center"
                  style={{
                    background: 'radial-gradient(circle, rgba(139,0,0,0.15) 0%, transparent 60%)'
                  }}
                >
                  <div
                    className="font-display text-[8rem] text-gradient-red leading-none select-none"
                    style={{ filter: 'drop-shadow(0 0 40px rgba(204,0,0,0.5))' }}
                  >
                    GG
                  </div>
                </div>

                {/* Orbiting dots */}
                {[0, 90, 180, 270].map((deg, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-gg-red"
                    style={{
                      top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 45}%)`,
                      left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 45}%)`,
                      transform: 'translate(-50%, -50%)',
                      boxShadow: '0 0 10px rgba(204,0,0,0.8)',
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.5,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>

              {/* Tagline below emblem */}
              <div className="text-center mt-6">
                <p className="font-heading text-xs tracking-[0.4em] uppercase text-white/30">
                  CAPTURING STORIES IN CINEMATIC EXCELLENCE
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="grid grid-cols-3 gap-6 mt-20 pt-12 border-t border-white/5"
          >
            {[
              { label: 'VISION', desc: 'See it before it exists' },
              { label: 'CRAFT', desc: 'Execute with precision' },
              { label: 'LEGACY', desc: 'Build for what lasts' },
            ].map((v) => (
              <div key={v.label} className="text-center">
                <div className="font-display text-2xl text-gradient-red mb-2">{v.label}</div>
                <p className="font-heading text-xs text-white/30 tracking-wider">{v.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
