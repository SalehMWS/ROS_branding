import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ساخت پروفایل برند',
  alternates: { canonical: '/onboarding/create-brand-profile' },
  robots: { index: false, follow: false },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
