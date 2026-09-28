import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'درخواست مشاوره',
  description: 'فرم درخواست مشاوره استراتژی برند با تیم رُس.',
  alternates: { canonical: '/contact/request-consultation' },
  openGraph: {
    title: 'درخواست مشاوره',
    description: 'فرم درخواست مشاوره استراتژی برند با تیم رُس.',
    url: '/contact/request-consultation',
    images: ['/og-image.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
