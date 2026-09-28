import type { Metadata } from 'next'
import DashboardShell from './DashboardShell'

export const metadata: Metadata = {
  title: 'داشبورد',
  robots: { index: false, follow: false },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardShell>{children}</DashboardShell>
}
