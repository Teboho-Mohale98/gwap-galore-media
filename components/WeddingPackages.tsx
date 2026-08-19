'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const packages = [
  {
    name: 'Essential Elegance',
    tier: 'STARTER',
    price: 'R9 000',
    tagline: 'The perfect foundation for your special day',
    color: 'silver',
    features: [
      'Full-Day Indoor & Outdoor Wedding Photography',
      'Professional 4K Cinematic Videography',
      '150+ Professionally Edited Images',
      '3–5 Minute Cinematic Highlight Film',
      'Professional Indoor Lighting Setup',
      'Premium Ceremony Audio Capture',
      'Private Online Gallery Delivery',
    ],
  },
  {
    name: 'Signature Experience',
    tier: 'PREMIUM',
    price: 'R12 000',
    tagline: 'The ultimate cinematic wedding experience',
    color: 'gold',
    popular: true,
    features: [
      'Full-Day Premium Photography',
      'Advanced 4K Cinematic Videography',
      '250+ Edited High-Resolution Images',
      '5–7 Minute Cinematic Highlight Film',
      'Professional Stabilizers & Advanced Lighting',
      'Premium Wireless Audio System',
      'Private Online Gallery + Download Access',
      'Dedicated Creative Director',
      'Same-Day Preview Reel',
    ],
  },
]

export default function WeddingPackages() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="weddings" ref={ref} className="relative py-32 bg-gg-dark overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(139,0,0,0.12) 0%, transparent 50%)',
        }}
      />
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="section-padding relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="h-px w-12 bg-gg-red" />
            <span className="font-heading text-xs tracking-[0.4em] uppercase text-gg-red font-semibold">Wedding Packages</span>
            <span className="h-px w-12 bg-gg-red" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white leading-[0.95] mb-6"
          >
            YOUR WEDDING,<br />
            <span className="text-gradient-red">IMMORTALISED</span><br />
            IN CINEMA.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="font-heading text-white/50 text-base leading-relaxed"
          >
            Every wedding is a masterpiece. We ensure your story is told with the luxury it deserves — frame by frame, moment by moment.
          </motion.p>
        </div>

        {/* Package cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.7 }}
              className={`relative rounded-xl overflow-hidden group ${
                pkg.popular
                  ? 'ring-1 ring-gg-red shadow-red-glow'
                  : 'ring-1 ring-white/10'
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gg-red to-transparent" />
              )}
              {pkg.popular && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="font-heading text-[10px] tracking-widest uppercase text-black font-black bg-gg-red px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card background */}
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                  background: pkg.popular
                    ? 'linear-gradient(145deg, rgba(139,0,0,0.15) 0%, rgba(8,8,8,0.95) 100%)'
                    : 'linear-gradient(145deg, rgba(26,26,26,0.9) 0%, rgba(8,8,8,0.95) 100%)',
                }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(ellipse at top, rgba(204,0,0,0.08) 0%, transparent 60%)',
                }}
              />

              <div className="relative z-10 p-8 md:p-10">
                {/* Tier badge */}
                <span className={`font-heading text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block ${
                  pkg.popular ? 'text-gg-red' : 'text-gg-silver'
                }`}>
                  {pkg.tier}
                </span>

                {/* Package name */}
                <h3 className="font-heading font-black text-white text-2xl mb-2">{pkg.name}</h3>
                <p className="font-heading text-white/40 text-sm mb-8">{pkg.tagline}</p>

                {/* Price */}
                <div className="mb-8 pb-8 border-b border-white/10">
                  <div className={`font-display text-[clamp(3rem,7vw,4.5rem)] leading-none mb-1 ${
                    pkg.popular ? 'text-gradient-red' : 'text-gradient-chrome'
                  }`}>
                    {pkg.price}
                  </div>
                  <span className="font-heading text-xs text-white/30 tracking-widest uppercase">Once-off package</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-10">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 font-heading text-sm text-white/70">
                      <svg className="w-4 h-4 text-gg-red flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-4 font-heading font-bold text-sm tracking-widest uppercase transition-all duration-300 rounded-lg ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-red-900 to-gg-red text-white hover:shadow-red-glow hover:scale-[1.02]'
                      : 'border border-white/20 text-white hover:border-gg-red hover:text-gg-red'
                  }`}
                >
                  Book This Package
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center font-heading text-xs text-white/30 mt-10 tracking-wide"
        >
          * Custom packages available. All prices exclude travel outside Gauteng. Contact us for destination weddings.
        </motion.p>
      </div>
    </section>
  )
}
