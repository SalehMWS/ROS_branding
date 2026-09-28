import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'زودِکس',
  description: 'مطالعه موردی پروژه برندینگ زودِکس.',
  alternates: { canonical: '/portfolio/zoodex-mockup' },
  openGraph: {
    title: 'زودِکس',
    description: 'مطالعه موردی پروژه برندینگ زودِکس.',
    url: '/portfolio/zoodex-mockup',
    images: ['/og-image.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
