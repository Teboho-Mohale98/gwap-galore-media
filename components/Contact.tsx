'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  'Wedding Photography & Videography',
  'Corporate Media Production',
  'Event Coverage',
  'Content Creation',
  'Branding & Marketing',
  'Audio & Podcast Production',
  'Documentary Production',
  'Other',
]

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', date: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = `w-full bg-transparent border-b border-white/10 hover:border-white/30 focus:border-gg-red outline-none py-3 font-heading text-white text-sm placeholder:text-white/20 transition-colors duration-300`

  return (
    <section id="contact" ref={ref} className="relative py-32 bg-gg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom, rgba(139,0,0,0.12) 0%, transparent 60%)' }}
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
            <span className="font-heading text-xs tracking-[0.4em] uppercase text-gg-red font-semibold">Get In Touch</span>
            <span className="h-px w-12 bg-gg-red" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-[clamp(2.5rem,7vw,6rem)] text-white leading-[0.95] mb-6"
          >
            LET&apos;S CREATE<br />
            <span className="text-gradient-red">SOMETHING</span><br />
            TIMELESS.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="font-heading text-white/50 text-base leading-relaxed max-w-xl mx-auto"
          >
            Ready to bring your vision to life? Reach out and let&apos;s discuss how we can craft something extraordinary together.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="space-y-8 mb-12">
              {/* Phone */}
              <div className="group">
                <span className="font-heading text-xs tracking-[0.3em] uppercase text-white/30 mb-2 block">Call / WhatsApp</span>
                <a
                  href="tel:0680846191"
                  className="font-display text-3xl text-white group-hover:text-gg-red transition-colors duration-300 block"
                >
                  068 084 6191
                </a>
              </div>

              {/* Email */}
              <div className="group">
                <span className="font-heading text-xs tracking-[0.3em] uppercase text-white/30 mb-2 block">Email</span>
                <a
                  href="mailto:info@gwapgaloremedia.co.za"
                  className="font-heading text-white/70 hover:text-gg-red transition-colors duration-300 text-sm"
                >
                  info@gwapgaloremedia.co.za
                </a>
              </div>

              {/* Location */}
              <div>
                <span className="font-heading text-xs tracking-[0.3em] uppercase text-white/30 mb-2 block">Location</span>
                <p className="font-heading text-white/70 text-sm">Gauteng, South Africa</p>
                <p className="font-heading text-white/30 text-xs mt-1">Available Nationwide & Internationally</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/27680846191"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass-card-red rounded-xl p-5 mb-8 group hover:border-green-800/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-green-900/30 border border-green-800/30 flex items-center justify-center flex-shrink-0 group-hover:bg-green-900/50 transition-colors duration-300">
                <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div className="font-heading font-bold text-white text-sm">WhatsApp Us</div>
                <div className="font-heading text-white/40 text-xs">Instant response available</div>
              </div>
              <div className="ml-auto text-white/20 group-hover:text-gg-red transition-colors duration-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </a>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '🏆', label: 'Award-Winning', sub: 'Production Quality' },
                { icon: '📸', label: '4K / 8K', sub: 'Cinema Grade' },
                { icon: '⚡', label: 'Fast Delivery', sub: 'On-time Always' },
                { icon: '🎬', label: 'TV Broadcast', sub: 'Ready Output' },
              ].map((badge) => (
                <div key={badge.label} className="glass-card rounded-lg p-4 flex items-center gap-3">
                  <span className="text-2xl">{badge.icon}</span>
                  <div>
                    <div className="font-heading font-bold text-white text-xs">{badge.label}</div>
                    <div className="font-heading text-[10px] text-white/30">{badge.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card-red rounded-xl p-10 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-red-950/50 border border-gg-red flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-gg-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="font-display text-3xl text-white mb-3">MESSAGE SENT!</h3>
                <p className="font-heading text-white/50 text-sm leading-relaxed">
                  Thank you for reaching out. We'll get back to you within 24 hours to discuss your project.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8 space-y-6">
                <h3 className="font-heading font-black text-white text-lg mb-6">Send Us A Message</h3>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="font-heading text-[10px] tracking-widest uppercase text-white/30 mb-2 block">Full Name *</label>
                    <input
                      className={inputClass}
                      placeholder="Your name"
                      required
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="font-heading text-[10px] tracking-widest uppercase text-white/30 mb-2 block">Phone / WhatsApp</label>
                    <input
                      className={inputClass}
                      placeholder="068 084 6191"
                      value={form.phone}
                      onChange={e => setForm({...form, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-heading text-[10px] tracking-widest uppercase text-white/30 mb-2 block">Email Address *</label>
                  <input
                    className={inputClass}
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="font-heading text-[10px] tracking-widest uppercase text-white/30 mb-2 block">Service Required</label>
                  <select
                    className={`${inputClass} cursor-pointer`}
                    value={form.service}
                    onChange={e => setForm({...form, service: e.target.value})}
                    style={{ appearance: 'none', background: 'transparent' }}
                  >
                    <option value="" className="bg-gg-dark">Select a service...</option>
                    {services.map(s => <option key={s} value={s} className="bg-gg-dark">{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="font-heading text-[10px] tracking-widest uppercase text-white/30 mb-2 block">Event / Project Date</label>
                  <input
                    className={inputClass}
                    type="date"
                    value={form.date}
                    onChange={e => setForm({...form, date: e.target.value})}
                    style={{ colorScheme: 'dark' }}
                  />
                </div>

                <div>
                  <label className="font-heading text-[10px] tracking-widest uppercase text-white/30 mb-2 block">Tell Us About Your Project *</label>
                  <textarea
                    className={`${inputClass} resize-none`}
                    rows={4}
                    placeholder="Describe your vision, project requirements, budget, and any special details..."
                    required
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-white py-4 rounded-none"
                >
                  Send Enquiry
                </button>

                <p className="font-heading text-xs text-white/20 text-center">
                  We respond within 24 hours. All inquiries are confidential.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
