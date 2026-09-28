'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main style={{
      minHeight: '70vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: 'var(--c-bg)', padding: '2rem', textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--c-text)', marginBottom: '.6rem' }}>
        مشکلی پیش آمد
      </h1>
      <p style={{ fontSize: '.92rem', color: 'var(--c-text-muted)', lineHeight: 1.9, maxWidth: 440, marginBottom: '2rem' }}>
        بارگذاری این بخش با خطا مواجه شد. دوباره تلاش کنید؛ اگر ادامه داشت با ما تماس بگیرید.
      </p>
      <button onClick={reset} style={{
        padding: '.8rem 1.6rem', background: 'var(--c-primary)', color: '#fff',
        border: 'none', borderRadius: 'var(--r-sm)',
        fontSize: '.9rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
      }}>تلاش دوباره</button>
    </main>
  )
}
