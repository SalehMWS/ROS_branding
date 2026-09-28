import ScrollToHash from '@/components/shared/ScrollToHash'
import AuthGuard from '@/components/shared/AuthGuard'
import type { Metadata } from 'next'
import { SITE_URL, SITE_NAME } from '@/lib/site'
import './globals.css'
import { ThemeProvider } from '../lib/theme'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const DESCRIPTION =
  'آژانس هوشمند برندینگ — ترکیب دقیق تحلیل داده و درک فرهنگی بازار ایران'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: '%s | رُس',
  },
  description: DESCRIPTION,
  applicationName: 'ROS',
  keywords: [
    'برندینگ', 'آژانس برندینگ', 'استراتژی برند', 'هویت بصری',
    'طراحی لوگو', 'نام‌گذاری برند', 'برندبوک', 'رُس', 'ROS',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: '/',
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: DESCRIPTION,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: DESCRIPTION,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" data-theme="dark">
      <head>
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        {/* prevent flash — set dark before paint */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            document.documentElement.setAttribute('data-theme','dark');
            
          })();
        `}} />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <ScrollToHash />
          <AuthGuard>{children}</AuthGuard>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
