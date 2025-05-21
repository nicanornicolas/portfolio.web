import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

// Initialize the Inter font with specific subsets and weights
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// Define metadata for the entire site
export const metadata: Metadata = {
  title: {
    default: 'Nicanor Nicolas | Portfolio',
    template: '%s | Nicanor Nicolas'
  },
  description: 'Professional portfolio of Nicanor Nicolas, Computer Engineer specializing in web development, AI/ML, and blockchain technologies.',
  keywords: ['portfolio', 'web development', 'computer engineer', 'AI', 'blockchain', 'machine learning'],
  authors: [{ name: 'Nicanor Nicolas' }],
  creator: 'Nicanor Nicolas',
  publisher: 'Nicanor Nicolas',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Nicanor Nicolas | Professional Portfolio',
    description: 'Computer Engineer specializing in web development, AI/ML, and blockchain technologies.',
    url: 'https://nicanor-nicolas.netlify.app',
    siteName: 'Nicanor Nicolas Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nicanor Nicolas - Professional Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nicanor Nicolas | Professional Portfolio',
    description: 'Computer Engineer specializing in web development, AI/ML, and blockchain technologies.',
    creator: '@Nik_aNo',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 