'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Wedding Photography & Videography',
    tag: 'WEDDINGS',
    description: 'Luxury cinematic wedding coverage with 4K/8K cameras, drone footage, and highlight films that last forever.',
    features: ['Full-day coverage', 'Cinematic highlight films', 'Drone footage', 'Premium lighting'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Corporate Media Production',
    tag: 'CORPORATE',
    description: 'Brand documentaries, company profiles, commercial ads, and corporate event coverage that positions your brand as elite.',
    features: ['Brand documentaries', 'Commercial ads', 'Company profiles', 'Corporate events'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Event Coverage',
    tag: 'EVENTS',
    description: 'From festivals and fashion shows to sports events and conferences — we capture energy with cinematic precision.',
    features: ['Festivals & sports', 'Fashion events', 'Conferences', 'Government events'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M4 6h16M4 12h16M4 18h7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 18l3 3 3-3m-3 3v-6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Content Creation',
    tag: 'DIGITAL',
    description: 'Scroll-stopping social media reels, TikTok campaigns, Instagram content, and YouTube productions built for virality.',
    features: ['Instagram reels', 'TikTok content', 'YouTube production', 'Social campaigns'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Branding & Marketing',
    tag: 'BRANDING',
    description: 'Full creative direction — graphic design, campaign strategy, digital marketing — everything your brand needs to dominate.',
    features: ['Graphic design', 'Campaign strategy', 'Digital marketing', 'Creative direction'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Audio & Podcast Production',
    tag: 'AUDIO',
    description: 'Studio-quality audio recording, podcast production, voice-over, and full media post-production with professional sound design.',
    features: ['Studio recording', 'Podcast production', 'Voice-over', 'Sound design'],
  },
]

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="services" ref={ref} className="relative py-32 bg-gg-black overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,0,0,0.05) 0%, transparent 60%)' }}
      />

      <div className="section-padding relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-px w-12 bg-gg-red" />
            <span className="font-heading text-xs tracking-[0.4em] uppercase text-gg-red font-semibold">What We Do</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white leading-[0.95] mb-6"
          >
            PREMIUM<br />
            <span className="text-gradient-red">SERVICES</span><br />
            BUILT FOR IMPACT.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-heading text-white/50 text-base leading-relaxed max-w-xl"
          >
            From intimate weddings to large-scale corporate productions — we deliver cinematic excellence across every medium.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              className="group glass-card rounded-lg p-7 hover:border-red-900/40 transition-all duration-500 cursor-default relative overflow-hidden"
            >
              {/* Hover bg glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at top left, rgba(139,0,0,0.08) 0%, transparent 60%)' }}
              />

              {/* Tag */}
              <span className="font-heading text-[10px] tracking-[0.35em] uppercase text-gg-red font-bold mb-4 block">
                {service.tag}
              </span>

              {/* Icon */}
              <div className="text-white/40 group-hover:text-gg-red transition-colors duration-300 mb-5">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading font-black text-white text-lg mb-3 group-hover:text-gg-chrome transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-heading text-white/50 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-1.5">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-xs text-white/40 font-heading">
                    <span className="w-1 h-1 rounded-full bg-gg-red flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Bottom border glow on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gg-red to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-white"
          >
            Enquire About A Service
          </button>
        </motion.div>
      </div>
    </section>
  )
}
