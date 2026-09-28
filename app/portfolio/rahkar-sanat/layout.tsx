import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'راهکار صنعت',
  description: 'مطالعه موردی پروژه برندینگ راهکار صنعت.',
  alternates: { canonical: '/portfolio/rahkar-sanat' },
  openGraph: {
    title: 'راهکار صنعت',
    description: 'مطالعه موردی پروژه برندینگ راهکار صنعت.',
    url: '/portfolio/rahkar-sanat',
    images: ['/og-image.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
