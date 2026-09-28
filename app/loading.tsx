import Spinner from '@/components/ui/Spinner'

export default function Loading() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--c-bg)',
    }}>
      <Spinner />
    </div>
  )
}
