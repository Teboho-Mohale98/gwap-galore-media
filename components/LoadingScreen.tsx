'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 400)
          return 100
        }
        return prev + Math.random() * 12
      })
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Background red glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-96 h-96 rounded-full animate-glow-pulse"
              style={{ background: 'radial-gradient(circle, rgba(204,0,0,0.15) 0%, transparent 70%)' }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* GG Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative"
            >
              <div
                className="text-[120px] font-display text-gradient-red leading-none select-none"
                style={{ filter: 'drop-shadow(0 0 30px rgba(204,0,0,0.8))' }}
              >
                GG
              </div>
              {/* Animated ring */}
              <motion.div
                className="absolute inset-0 m-auto w-40 h-40 border border-red-800 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              />
              <motion.div
                className="absolute w-36 h-36 border border-red-900 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              />
            </motion.div>

            {/* Brand name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
            >
              <p
                className="font-heading text-xs tracking-[0.4em] uppercase text-gg-silver"
              >
                GWAP GALORE MEDIA
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="w-64"
            >
              <div className="h-px bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-900 to-red-600"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-white/20 font-heading tracking-widest">LOADING</span>
                <span className="text-xs text-red-700 font-heading tracking-widest">{Math.round(progress)}%</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
