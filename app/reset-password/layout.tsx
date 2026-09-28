import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'تغییر رمز عبور',
  description: 'تعیین رمز عبور جدید برای حساب کاربری رُس.',
  alternates: { canonical: '/reset-password' },
  robots: { index: false, follow: false },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
