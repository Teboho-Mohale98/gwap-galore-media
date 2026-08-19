'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const socialPosts = [
  { type: 'reel', label: 'Wedding Reel', views: '24K', tag: '#WeddingCinema', color: '#1a0f0f' },
  { type: 'photo', label: 'Corporate Shoot', views: '8.2K', tag: '#BrandFilm', color: '#0f0f1a' },
  { type: 'reel', label: 'BTS Festival', views: '41K', tag: '#BehindTheScenes', color: '#1a0f0f' },
  { type: 'photo', label: 'Fashion Shoot', views: '19K', tag: '#SAFI2024', color: '#1a0f1a' },
  { type: 'reel', label: 'Drone Footage', views: '67K', tag: '#DroneCinema', color: '#0f1a1a' },
  { type: 'photo', label: 'Event Coverage', views: '12K', tag: '#MajorLeague', color: '#1a1a0f' },
]

const platforms = [
  {
    name: 'Instagram',
    handle: '@gwapgaloremedia',
    followers: '12.4K',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    color: '#e1306c',
  },
  {
    name: 'TikTok',
    handle: '@gwapgaloremedia',
    followers: '31.8K',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.79a4.85 4.85 0 01-1.02-.1z"/>
      </svg>
    ),
    color: '#ff0050',
  },
  {
    name: 'YouTube',
    handle: 'Gwap Galore Media',
    followers: '4.2K',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    color: '#ff0000',
  },
  {
    name: 'Facebook',
    handle: 'Gwap Galore Media',
    followers: '6.9K',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    color: '#1877f2',
  },
]

export default function Social() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="relative py-32 bg-gg-dark overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom, rgba(139,0,0,0.07) 0%, transparent 50%)' }}
      />

      <div className="section-padding relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="h-px w-12 bg-gg-red" />
            <span className="font-heading text-xs tracking-[0.4em] uppercase text-gg-red font-semibold">Follow Us</span>
            <span className="h-px w-12 bg-gg-red" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white leading-[0.95] mb-6"
          >
            WE LIVE ON<br />
            <span className="text-gradient-red">SOCIAL MEDIA.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="font-heading text-white/50 text-base"
          >
            Follow our journey — behind the scenes, reels, and premium content daily.
          </motion.p>
        </div>

        {/* Platform stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="glass-card rounded-xl p-5 text-center group hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div
                className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
                style={{ background: `${p.color}20`, color: p.color }}
              >
                {p.icon}
              </div>
              <div className="font-heading font-black text-white text-sm mb-1">{p.name}</div>
              <div className="font-heading text-xs text-white/30 mb-2">{p.handle}</div>
              <div className="font-display text-2xl" style={{ color: p.color }}>{p.followers}</div>
              <div className="font-heading text-[9px] tracking-widest uppercase text-white/20">followers</div>
            </motion.div>
          ))}
        </div>

        {/* Simulated feed grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2"
        >
          {socialPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.06 }}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
              style={{ background: post.color }}
            >
              {/* Grid pattern */}
              <div className="absolute inset-0 grid-bg opacity-20" />

              {/* Reel indicator */}
              {post.type === 'reel' && (
                <div className="absolute top-2 right-2 z-10">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1 p-2">
                <div className="font-heading font-bold text-white text-xs text-center">{post.label}</div>
                <div className="font-heading text-[10px] text-gg-red">{post.tag}</div>
                <div className="flex items-center gap-1 text-white/50">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                  </svg>
                  <span className="font-heading text-[10px]">{post.views}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="font-heading text-white/30 text-sm mb-6 tracking-wider">Follow us for daily behind-the-scenes content</p>
          <div className="flex flex-wrap justify-center gap-3">
            {platforms.map((p) => (
              <a
                key={p.name}
                href="#"
                className="flex items-center gap-2 glass-card px-5 py-2.5 rounded-full hover:border-white/20 transition-all duration-300 font-heading text-sm font-semibold text-white/70 hover:text-white"
              >
                <span style={{ color: p.color }}>{p.icon}</span>
                {p.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
