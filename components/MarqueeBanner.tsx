'use client'

interface Props {
  items: string[]
  reverse?: boolean
  className?: string
}

export default function MarqueeBanner({ items, reverse = false, className = '' }: Props) {
  const repeated = [...items, ...items, ...items, ...items]

  return (
    <div className={`relative overflow-hidden py-4 ${className}`}>
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{
          animation: `marquee ${reverse ? 'marqueeReverse' : 'marquee'} 30s linear infinite`,
          animationName: reverse ? 'marqueeReverse' : 'marquee',
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="flex-shrink-0 font-display text-2xl md:text-3xl text-white/10 tracking-widest flex items-center gap-8"
          >
            {item}
            <span className="text-gg-red text-sm align-middle">★</span>
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
