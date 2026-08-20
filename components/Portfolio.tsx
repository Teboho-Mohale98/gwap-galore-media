'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const categories = ['All', 'Weddings', 'Corporate', 'Fashion', 'Sports', 'Events', 'Music', 'Docs']

const portfolio = [
  { id: 1, title: 'Luxury Vineyard Wedding', category: 'Weddings', size: 'large', color: '#2d1b1b' },
  { id: 2, title: 'BET Tese Festival', category: 'Events', size: 'medium', color: '#1a1a2e' },
  { id: 3, title: 'Corporate Brand Film', category: 'Corporate', size: 'small', color: '#1a2d1a' },
  { id: 4, title: 'SAFI Fashion Show', category: 'Fashion', size: 'medium', color: '#2d1a2d' },
  { id: 5, title: 'PSL Sports Coverage', category: 'Sports', size: 'small', color: '#1a1a1a' },
  { id: 6, title: 'Major League Gardens', category: 'Events', size: 'large', color: '#2d2d1a' },
  { id: 7, title: 'Music Video Production', category: 'Music', size: 'medium', color: '#1a2d2d' },
  { id: 8, title: 'Street Culture Doc', category: 'Docs', size: 'small', color: '#2d1b1a' },
  { id: 9, title: 'Garden Wedding Ceremony', category: 'Weddings', size: 'small', color: '#1b2d1b' },
  { id: 10, title: 'Macufe Festival 2017', category: 'Events', size: 'medium', color: '#1a1a2d' },
  { id: 11, title: 'Brand Campaign Shoot', category: 'Corporate', size: 'large', color: '#2d1a1a' },
  { id: 12, title: 'Urban Fashion Editorial', category: 'Fashion', size: 'small', color: '#1a2d1a' },
]

const gridPatterns: Record<string, string> = {
  large: 'md:col-span-2 md:row-span-2',
  medium: 'md:col-span-1 md:row-span-2',
  small: 'md:col-span-1 md:row-span-1',
}

const videoReels = [
  { title: 'Wedding Showreel 2024', duration: '3:24', tag: 'WEDDINGS' },
  { title: 'Corporate Highlights', duration: '2:15', tag: 'CORPORATE' },
  { title: 'Event Coverage Reel', duration: '4:08', tag: 'EVENTS' },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState<typeof portfolio[0] | null>(null)
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  const filtered = active === 'All' ? portfolio : portfolio.filter(p => p.category === active)

  return (
    <section id="portfolio" ref={ref} className="relative py-32 bg-gg-black overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="section-padding relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-px w-12 bg-gg-red" />
            <span className="font-heading text-xs tracking-[0.4em] uppercase text-gg-red font-semibold">Our Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white leading-[0.95] mb-6"
          >
            CINEMATIC<br />
            <span className="text-gradient-red">PORTFOLIO</span>
          </motion.h2>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 font-heading text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-full ${
                active === cat
                  ? 'bg-gg-red text-white shadow-red-glow-sm'
                  : 'text-white/40 hover:text-white border border-white/10 hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-20"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                onClick={() => setLightbox(item)}
                className={`relative rounded-lg overflow-hidden cursor-pointer group aspect-square ${
                  i === 0 ? 'col-span-2 row-span-2' : ''
                } ${i === 5 ? 'col-span-2' : ''}`}
                style={{ background: item.color }}
              >
                {/* Placeholder visual */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${item.color} 0%, rgba(8,8,8,0.5) 100%)`,
                  }}
                />

                {/* Cinematic overlay pattern */}
                <div className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)'
                  }}
                />

                {/* Camera icon placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-30 group-hover:opacity-0 transition-opacity">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" className="w-6 h-6">
                      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                      <circle cx="12" cy="13" r="4"/>
                    </svg>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />

                {/* Content on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="font-heading text-[10px] tracking-[0.3em] uppercase text-gg-red font-bold block mb-1">{item.category}</span>
                  <h4 className="font-heading font-bold text-white text-sm leading-tight">{item.title}</h4>
                </div>

                {/* Expand icon */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                </div>

                {/* Red corner accent */}
                <div className="absolute top-0 left-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-px bg-gg-red" />
                  <div className="w-px h-full bg-gg-red" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Video Reels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-gg-red" />
            <span className="font-heading text-xs tracking-[0.4em] uppercase text-gg-red font-semibold">Video Reels</span>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {videoReels.map((reel, i) => (
              <motion.div
                key={reel.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="glass-card rounded-lg p-6 flex items-center gap-5 group cursor-pointer hover:border-red-900/50 transition-all duration-300"
              >
                {/* Play button */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full border border-gg-red flex items-center justify-center group-hover:bg-gg-red transition-colors duration-300">
                  <svg className="w-5 h-5 text-gg-red group-hover:text-white transition-colors duration-300 ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </div>
                <div>
                  <span className="font-heading text-[10px] tracking-widest uppercase text-gg-red font-bold block mb-1">{reel.tag}</span>
                  <h4 className="font-heading font-bold text-white text-sm">{reel.title}</h4>
                  <span className="font-heading text-xs text-white/30">{reel.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-8"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="relative max-w-4xl w-full aspect-video rounded-xl overflow-hidden"
              style={{ background: lightbox.color }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-heading text-xs tracking-[0.4em] uppercase text-gg-red font-bold mb-3">{lightbox.category}</span>
                <h3 className="font-display text-4xl text-white text-center">{lightbox.title}</h3>
                <p className="font-heading text-white/40 text-sm mt-3">Cinematic Portfolio Work</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-gg-red transition-colors duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
