import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مجله برندینگ',
  description: 'مقالات تخصصی برندینگ، استراتژی برند و هویت بصری برای بازار ایران.',
  alternates: { canonical: '/magazine' },
  openGraph: {
    title: 'مجله برندینگ',
    description: 'مقالات تخصصی برندینگ، استراتژی برند و هویت بصری برای بازار ایران.',
    url: '/magazine',
    images: ['/og-image.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
