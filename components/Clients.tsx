'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const clients = [
  { name: 'BET Tese Festival', category: 'Entertainment', initial: 'BET' },
  { name: 'Major League Gardens', category: 'Music & Events', initial: 'ML' },
  { name: 'SABC 1', category: 'Broadcast TV', initial: 'S1' },
  { name: 'Mzansi Magic', category: 'Broadcast TV', initial: 'MM' },
  { name: 'Moja Love', category: 'Broadcast TV', initial: 'ML' },
  { name: 'SA Fashion Intl', category: 'Fashion', initial: 'SAF' },
  { name: 'Macufe Festival', category: 'Culture & Arts', initial: 'MAC' },
  { name: 'Government', category: 'Municipal Projects', initial: 'GOV' },
]

const testimonials = [
  {
    quote: 'Gwap Galore Media captured our event with a level of professionalism and creativity that exceeded all expectations. The cinematic quality was broadcast-ready.',
    author: 'Event Director',
    company: 'Major Cultural Event',
    initials: 'ED',
  },
  {
    quote: 'The team delivered exceptional wedding coverage — every frame told our story beautifully. The highlight film brought us to tears. Pure artistry.',
    author: 'Happy Bride',
    company: 'Wedding Client',
    initials: 'HB',
  },
  {
    quote: 'Our brand documentary came out better than we imagined. They understood our vision and elevated it beyond what we thought possible. Outstanding work.',
    author: 'Brand Manager',
    company: 'Corporate Client',
    initials: 'BM',
  },
]

export default function Clients() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="clients" ref={ref} className="relative py-32 bg-gg-black overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(139,0,0,0.08) 0%, transparent 60%)' }}
      />

      <div className="section-padding relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-px w-12 bg-gg-red" />
            <span className="font-heading text-xs tracking-[0.4em] uppercase text-gg-red font-semibold">Trusted By</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white leading-[0.95] mb-6"
          >
            BRANDS THAT<br />
            <span className="text-gradient-red">TRUST OUR</span><br />
            VISION.
          </motion.h2>
        </div>

        {/* Marquee client strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="relative mb-20 overflow-hidden py-4"
        >
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(90deg, #080808, transparent)' }}
          />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(-90deg, #080808, transparent)' }}
          />
          <div className="marquee-track gap-6">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0 glass-card rounded-lg px-8 py-4 flex items-center gap-4 mx-3"
              >
                <div className="w-10 h-10 rounded-full bg-red-950/50 border border-red-900/30 flex items-center justify-center">
                  <span className="font-display text-xs text-gg-red">{client.initial}</span>
                </div>
                <div>
                  <div className="font-heading font-bold text-white text-sm whitespace-nowrap">{client.name}</div>
                  <div className="font-heading text-[10px] tracking-wider uppercase text-white/30">{client.category}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Client grid cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-24">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
              className="glass-card rounded-lg p-5 text-center group hover:border-red-900/30 transition-all duration-300 cursor-default"
            >
              <div className="w-14 h-14 rounded-full bg-red-950/30 border border-red-900/20 flex items-center justify-center mx-auto mb-3 group-hover:border-red-800/50 transition-colors duration-300">
                <span className="font-display text-lg text-gradient-red">{client.initial}</span>
              </div>
              <div className="font-heading font-bold text-white text-sm mb-1">{client.name}</div>
              <div className="font-heading text-[10px] tracking-wider uppercase text-white/30">{client.category}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4 mb-12"
          >
            <span className="h-px w-12 bg-gg-red" />
            <span className="font-heading text-xs tracking-[0.4em] uppercase text-gg-red font-semibold">Client Stories</span>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.12, duration: 0.6 }}
                className="glass-card rounded-xl p-7 relative group hover:border-red-900/30 transition-all duration-300"
              >
                {/* Quote mark */}
                <div className="font-display text-6xl text-gg-red/20 leading-none mb-3 -mt-2">"</div>

                <p className="font-heading text-white/60 text-sm leading-relaxed mb-6 italic">
                  {t.quote}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-red-950/40 border border-red-900/30 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-bold text-xs text-gg-red">{t.initials}</span>
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-white text-sm">{t.author}</div>
                    <div className="font-heading text-[10px] tracking-wider uppercase text-white/30">{t.company}</div>
                  </div>
                </div>

                {/* 5 stars */}
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-3.5 h-3.5 text-gg-red" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
