import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ثبت‌نام',
  description: 'ساخت حساب کاربری در پلتفرم رُس.',
  alternates: { canonical: '/register' },
  robots: { index: false, follow: false },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
