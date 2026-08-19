import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gwap Galore Media | Luxury Cinematic Storytelling',
  description: 'South African luxury media production company specialising in cinematic videography, photography, weddings, corporate media, events, and creative content. Founded 2017.',
  keywords: 'Gwap Galore Media, South Africa, cinematic videography, wedding photography, corporate media, media production, Johannesburg, SABC, Mzansi Magic',
  openGraph: {
    title: 'Gwap Galore Media | Luxury Cinematic Storytelling',
    description: 'We create unforgettable visuals that turn moments into timeless experiences.',
    type: 'website',
    locale: 'en_ZA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gwap Galore Media | Luxury Cinematic Storytelling',
    description: 'We create unforgettable visuals that turn moments into timeless experiences.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gg-black text-gg-white antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
