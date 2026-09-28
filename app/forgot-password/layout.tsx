import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'بازیابی رمز عبور',
  description: 'بازیابی رمز عبور حساب کاربری رُس.',
  alternates: { canonical: '/forgot-password' },
  robots: { index: false, follow: false },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
