'use client'
import Link from 'next/link'
import { articles, placeholder } from './articles'

const catColors: Record<string,string> = { 'برندینگ':'rgba(74,140,124,.15)','طراحی لوگو':'rgba(99,102,241,.15)','هویت بصری':'rgba(236,72,153,.12)','استراتژی برند':'rgba(245,158,11,.12)','هوش مصنوعی':'rgba(14,165,233,.12)' }
const catText: Record<string,string> = { 'برندینگ':'rgba(74,140,124,.9)','طراحی لوگو':'rgba(129,140,248,.9)','هویت بصری':'rgba(244,114,182,.9)','استراتژی برند':'rgba(251,191,36,.9)','هوش مصنوعی':'rgba(56,189,248,.9)' }

export default function ArticleClient({ slug }: { slug: string }) {
  const article = articles[slug] || placeholder

  return (
    <main style={{ background: 'var(--c-bg)', color: 'var(--c-text)', minHeight: '100vh', paddingTop: 80 }}>
      <article style={{ maxWidth: 780, margin: '0 auto', padding: '4rem 1.5rem 8rem' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '2.5rem', fontSize: '.72rem', color: 'var(--c-text-light)' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>خانه</Link>
          <span>/</span>
          <Link href="/magazine" style={{ color: 'inherit', textDecoration: 'none' }}>مجله</Link>
          <span>/</span>
          <span style={{ color: 'var(--c-primary)' }}>{article.category}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '.62rem', fontWeight: 700, background: catColors[article.category] || 'rgba(74,140,124,.15)', color: catText[article.category] || 'rgba(74,140,124,.9)', borderRadius: 100, padding: '.25rem .75rem' }}>{article.category}</span>
          <span style={{ fontSize: '.65rem', color: 'var(--c-text-light)' }}>{article.readTime} دقیقه مطالعه</span>
          <span style={{ fontSize: '.65rem', color: 'var(--c-text-light)' }}>·</span>
          <span style={{ fontSize: '.65rem', color: 'var(--c-text-light)' }}>{article.date}</span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, letterSpacing: '-.04em', lineHeight: 1.3, marginBottom: '1.5rem' }}>{article.title}</h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--c-text-muted)', lineHeight: 1.9, marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid var(--c-border)' }}>{article.excerpt}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {article.content.map((block, i) => (
            <div key={i}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-.02em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                <span style={{ width: 3, height: 20, background: 'linear-gradient(to bottom, #7dcfbe, #2E6B5E)', borderRadius: 2, flexShrink: 0, display: 'inline-block' }} />
                {block.h2}
              </h2>
              <p style={{ fontSize: '.92rem', color: 'var(--c-text-muted)', lineHeight: 2, paddingRight: '1.25rem' }}>{block.p}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--c-border)' }}>
          <div style={{ fontSize: '.65rem', color: 'var(--c-text-light)', marginBottom: '.75rem', letterSpacing: '.08em' }}>کلمات کلیدی:</div>
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
            {article.keywords.map(k => <span key={k} style={{ fontSize: '.65rem', background: 'var(--c-surface-2)', border: '1px solid var(--c-border)', borderRadius: 100, padding: '.2rem .65rem', color: 'var(--c-text-muted)' }}>{k}</span>)}
          </div>
        </div>

        <div style={{ marginTop: '3.5rem', padding: '2rem', background: 'var(--c-primary-bg)', border: '1px solid rgba(74,140,124,.2)', borderRadius: 20, textAlign: 'center' }}>
          <div style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.5rem' }}>برند خود را حرفه‌ای بسازید</div>
          <div style={{ fontSize: '.82rem', color: 'var(--c-text-muted)', marginBottom: '1.25rem' }}>آژانس رس آماده است تا در مسیر برندسازی همراه شما باشد</div>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', background: '#4A8C7C', color: 'white', borderRadius: 10, padding: '.7rem 1.5rem', fontSize: '.82rem', fontWeight: 700, textDecoration: 'none' }}>مشاوره رایگان</Link>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/magazine" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', fontSize: '.82rem', fontWeight: 600, color: 'var(--c-primary)', textDecoration: 'none' }}>
            بازگشت به مجله
          </Link>
        </div>
      </article>
    </main>
  )
}
