'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const followerPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const moveCursor = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }

    const animateFollower = () => {
      followerPos.current.x += (pos.current.x - followerPos.current.x) * 0.12
      followerPos.current.y += (pos.current.y - followerPos.current.y) * 0.12
      if (followerRef.current) {
        followerRef.current.style.left = `${followerPos.current.x}px`
        followerRef.current.style.top = `${followerPos.current.y}px`
      }
      requestAnimationFrame(animateFollower)
    }

    const handleHover = () => {
      cursorRef.current?.classList.add('scale-150')
      followerRef.current?.classList.add('scale-150', 'border-red-600')
    }
    const handleLeave = () => {
      cursorRef.current?.classList.remove('scale-150')
      followerRef.current?.classList.remove('scale-150', 'border-red-600')
    }

    document.addEventListener('mousemove', moveCursor)
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', handleHover)
      el.addEventListener('mouseleave', handleLeave)
    })

    const raf = requestAnimationFrame(animateFollower)
    return () => {
      document.removeEventListener('mousemove', moveCursor)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={followerRef}
        className="cursor-follower"
        style={{ transform: 'translate(-50%, -50%)', transition: 'transform 0.3s ease' }}
      />
    </>
  )
}
