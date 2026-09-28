import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'صفحه پیدا نشد',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main style={{
      minHeight: '70vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: 'var(--c-bg)', padding: '2rem', textAlign: 'center',
    }}>
      <div style={{
        fontSize: '4rem', fontWeight: 800,
        color: 'var(--c-primary-lt)', lineHeight: 1, marginBottom: '1rem',
      }}>۴۰۴</div>
      <h1 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--c-text)', marginBottom: '.6rem' }}>
        این صفحه پیدا نشد
      </h1>
      <p style={{ fontSize: '.92rem', color: 'var(--c-text-muted)', lineHeight: 1.9, maxWidth: 420, marginBottom: '2rem' }}>
        ممکن است آدرس تغییر کرده باشد یا صفحه حذف شده باشد.
      </p>
      <div style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" style={{
          padding: '.8rem 1.6rem', background: 'var(--c-primary)', color: '#fff',
          borderRadius: 'var(--r-sm)', textDecoration: 'none', fontSize: '.9rem', fontWeight: 600,
        }}>بازگشت به صفحه اصلی</Link>
        <Link href="/contact" style={{
          padding: '.8rem 1.6rem', background: 'var(--c-surface-2)', color: 'var(--c-text)',
          border: '1px solid var(--c-border)',
          borderRadius: 'var(--r-sm)', textDecoration: 'none', fontSize: '.9rem', fontWeight: 600,
        }}>تماس با ما</Link>
      </div>
    </main>
  )
}
