'use client'
import Link from 'next/link'
import { useState } from 'react'
import { members } from './members'

export default function TeamClient({ slug }: { slug: string }) {
  const m = members[slug]
  const [activeImg, setActiveImg] = useState<string | null>(null)
  if (!m) return <div style={{ color: 'white', padding: '8rem', textAlign: 'center' }}>عضو یافت نشد</div>

  return (
    <main style={{ background: '#0C0F0E', color: 'white', minHeight: '100vh', paddingTop: 80 }}>
      <style>{`@keyframes fadeIn{from{opacity:0;transform:scale(.96)}to{opacity:1;transform:scale(1)}}`}</style>

      {activeImg && (
        <div onClick={() => setActiveImg(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.94)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out', padding: '2rem' }}>
          <img src={activeImg} alt="" style={{ maxWidth: '88vw', maxHeight: '88vh', objectFit: 'contain', borderRadius: 16, animation: 'fadeIn .25s ease', boxShadow: '0 40px 80px rgba(0,0,0,.6)' }} />
          <button onClick={() => setActiveImg(null)} style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.12)', color: 'white', width: 42, height: 42, borderRadius: '50%', cursor: 'pointer', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
        </div>
      )}

      <div style={{ maxWidth: 920, margin: '0 auto', padding: '4rem 1.5rem 8rem' }}>

        {/* breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '3rem', fontSize: '.72rem', color: 'rgba(255,255,255,.2)' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>خانه</Link>
          <span>/</span>
          <Link href="/about#team" style={{ color: 'inherit', textDecoration: 'none' }}>درباره رُس</Link>
          <span>/</span>
          <span style={{ color: m.color, opacity: .8 }}>{m.name}</span>
        </div>

        {/* هدر */}
        <div style={{ background: 'rgba(255,255,255,.02)', border: `1px solid ${m.color}25`, borderRadius: 28, padding: '2.5rem', marginBottom: '1.5rem', display: 'flex', gap: '2rem', alignItems: 'flex-start', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 2, background: `linear-gradient(to right, transparent, ${m.color}60, transparent)` }} />
          <div style={{ position: 'absolute', top: 0, right: 0, width: 250, height: 250, background: `radial-gradient(circle at top right, ${m.color}08, transparent 65%)`, pointerEvents: 'none' }} />

          <div style={{ width: 96, height: 96, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: `2.5px solid ${m.color}40`, background: `${m.color}12` }}>
            {m.photo ? <img src={m.photo} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
              : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 900, color: m.color }}>{m.name[0]}</div>}
          </div>

          <div style={{ flex: 1, position: 'relative' }}>
            <h1 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.2rem)', fontWeight: 900, letterSpacing: '-.04em', marginBottom: '.4rem' }}>{m.name}</h1>
            <div style={{ fontSize: '.82rem', color: m.color, fontWeight: 600, opacity: .85, marginBottom: '.75rem' }}>{m.role}</div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', background: `${m.color}10`, border: `1px solid ${m.color}20`, borderRadius: 100, padding: '.22rem .8rem', fontSize: '.65rem', color: 'rgba(255,255,255,.4)', marginBottom: '1rem' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={m.color} strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              {m.edu}
            </div>
            <p style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.38)', lineHeight: 1.9, margin: 0 }}>{m.bio}</p>
          </div>
        </div>

        {/* skills */}
        <div style={{ background: 'rgba(255,255,255,.015)', border: '1px solid rgba(255,255,255,.06)', borderRadius: 20, padding: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '.6rem', fontWeight: 700, letterSpacing: '.14em', color: 'rgba(255,255,255,.2)', textTransform: 'uppercase' as const, marginBottom: '.85rem' }}>تخصص‌ها</div>
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' as const }}>
            {m.skills.map(s => <span key={s} style={{ fontSize: '.75rem', fontWeight: 600, background: `${m.color}10`, border: `1px solid ${m.color}22`, color: m.color, borderRadius: 100, padding: '.28rem .85rem' }}>{s}</span>)}
          </div>
        </div>

        {/* رزومه */}
        {m.resumePages.length > 0 && (
          <div style={{ background: 'rgba(255,255,255,.015)', border: '1px solid rgba(255,255,255,.06)', borderRadius: 20, padding: '1.5rem' }}>
            <div style={{ fontSize: '.6rem', fontWeight: 700, letterSpacing: '.14em', color: 'rgba(255,255,255,.2)', textTransform: 'uppercase' as const, marginBottom: '1.25rem' }}>رزومه</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
              {m.resumePages.map((src, i) => (
                <div key={i} onClick={() => setActiveImg(src)}
                  style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,.07)', cursor: 'zoom-in', transition: 'all .3s ease', background: 'rgba(255,255,255,.02)' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform='scale(1.03)'; el.style.borderColor=`${m.color}50`; el.style.boxShadow=`0 12px 30px rgba(0,0,0,.3)` }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform='scale(1)'; el.style.borderColor='rgba(255,255,255,.07)'; el.style.boxShadow='none' }}
                >
                  <img src={src} alt={`صفحه ${i+1}`} style={{ width: '100%', display: 'block' }} />
                  <div style={{ padding: '.5rem .75rem', fontSize: '.62rem', color: 'rgba(255,255,255,.2)', textAlign: 'center' as const, borderTop: '1px solid rgba(255,255,255,.05)' }}>صفحه {i+1}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: '2.5rem', textAlign: 'center' as const }}>
          <a href="/about#team" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', fontSize: '.78rem', fontWeight: 600, color: 'rgba(74,140,124,.6)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            بازگشت به تیم
          </a>
        </div>
      </div>
    </main>
  )
}
