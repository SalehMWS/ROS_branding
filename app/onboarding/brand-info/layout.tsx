import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'اطلاعات برند',
  alternates: { canonical: '/onboarding/brand-info' },
  robots: { index: false, follow: false },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
