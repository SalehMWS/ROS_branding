'use client'

export default function Spinner({ size = 32, speed = '1s' }: { size?: number; speed?: string }) {
  return (
    <>
      <div style={{
        width: size, height: size,
        border: '3px solid rgba(74,140,124,.2)',
        borderTop: '3px solid var(--c-primary-lt)',
        borderRadius: '50%',
        animation: `ros-spin ${speed} linear infinite`,
      }} />
      <style>{`@keyframes ros-spin { to { transform: rotate(360deg) } }`}</style>
    </>
  )
}
