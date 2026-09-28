import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'نمونه‌کارها',
  description: 'پروژه‌های برندینگ رُس؛ از استراتژی تا هویت بصری و اجرا.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'نمونه‌کارها',
    description: 'پروژه‌های برندینگ رُس؛ از استراتژی تا هویت بصری و اجرا.',
    url: '/portfolio',
    images: ['/og-image.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
