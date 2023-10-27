import type { Metadata } from 'next'
import { Roboto_Slab } from 'next/font/google'
import './globals.css'

import { Footer } from '~/components/Footer'
import { GoogleAnalytics } from '~/components/GoogleAnalytics'
import { Header } from '~/components/Header'

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'O lorem ipsum do Delicio - Delicio Ipsum',
  description:
    'Gere quantos parágrafos você quiser, usando o Lorem Ipsum do Delicio!',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  openGraph: {
    siteName: 'Delicio Ipsum',
    type: 'website',
    locale: 'pt_BR',
    title: 'O lorem ipsum do Delicio - Delicio Ipsum',
    description:
      'Gere quantos parágrafos você quiser, usando o Lorem Ipsum do Delicio!'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${robotoSlab.className} flex min-h-screen flex-col bg-slate-50 text-slate-900`}
      >
        <GoogleAnalytics />
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
