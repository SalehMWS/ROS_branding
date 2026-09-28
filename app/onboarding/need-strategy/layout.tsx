import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'نیاز به استراتژی',
  alternates: { canonical: '/onboarding/need-strategy' },
  robots: { index: false, follow: false },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
