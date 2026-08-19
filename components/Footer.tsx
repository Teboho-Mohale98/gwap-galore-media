'use client'

import { motion } from 'framer-motion'

const links = {
  Services: [
    'Wedding Photography',
    'Corporate Media',
    'Event Coverage',
    'Content Creation',
    'Branding & Marketing',
    'Audio Production',
  ],
  Company: [
    'About Us',
    'Our Portfolio',
    'Wedding Packages',
    'Equipment',
    'Testimonials',
    'Contact Us',
  ],
}

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-gg-dark border-t border-white/5 overflow-hidden">
      {/* Subtle red glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(204,0,0,0.4), transparent)' }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(139,0,0,0.1) 0%, transparent 70%)' }}
      />

      <div className="section-padding py-16">
        {/* Top row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="font-display text-5xl text-gradient-red leading-none"
                style={{ filter: 'drop-shadow(0 0 15px rgba(204,0,0,0.4))' }}
              >
                GG
              </span>
              <div>
                <div className="font-heading font-black text-white text-sm tracking-[0.2em]">GWAP GALORE</div>
                <div className="font-heading text-white/30 text-[10px] tracking-[0.4em]">MEDIA</div>
              </div>
            </div>

            <p className="font-heading text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              South Africa's premier luxury cinematic media production company. Turning moments into timeless visual legacies since 2017.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { name: 'IG', label: 'Instagram', href: '#' },
                { name: 'TT', label: 'TikTok', href: '#' },
                { name: 'YT', label: 'YouTube', href: '#' },
                { name: 'FB', label: 'Facebook', href: '#' },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center font-display text-xs text-white/40 hover:text-white hover:border-gg-red hover:shadow-red-glow-sm transition-all duration-300"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-heading font-black text-white text-xs tracking-[0.25em] uppercase mb-5">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleNav('#services')}
                      className="font-heading text-sm text-white/40 hover:text-white transition-colors duration-300 text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="flex flex-col md:flex-row gap-6 py-8 border-t border-b border-white/5 mb-8">
          <a
            href="tel:0680846191"
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-full border border-gg-red/30 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-gg-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
              </svg>
            </div>
            <span className="font-heading text-white/60 text-sm group-hover:text-white transition-colors duration-300">068 084 6191</span>
          </a>

          <a
            href="mailto:info@gwapgaloremedia.co.za"
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-full border border-gg-red/30 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-gg-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <span className="font-heading text-white/60 text-sm group-hover:text-white transition-colors duration-300">info@gwapgaloremedia.co.za</span>
          </a>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-gg-red/30 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-gg-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <span className="font-heading text-white/60 text-sm">Gauteng, South Africa</span>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-heading text-xs text-white/20">
            © {year} Gwap Galore Media. All rights reserved. Black-Owned. South African.
          </div>

          <div className="flex items-center gap-2">
            <span className="font-heading text-xs text-white/20">Crafted with</span>
            <span className="text-gg-red text-sm">♥</span>
            <span className="font-heading text-xs text-white/20">in South Africa</span>
          </div>

          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use'].map((l) => (
              <a key={l} href="#" className="font-heading text-xs text-white/20 hover:text-white/50 transition-colors duration-300">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Large background GG */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display text-[20rem] leading-none text-white/[0.015] block"
          style={{ lineHeight: 0.8 }}
        >
          GG
        </span>
      </div>
    </footer>
  )
}
