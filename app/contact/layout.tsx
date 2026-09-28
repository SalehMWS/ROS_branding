import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'تماس با ما',
  description: 'ارتباط با آژانس برندینگ رُس؛ مشاوره، همکاری و پاسخ به پرسش‌های شما.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'تماس با ما',
    description: 'ارتباط با آژانس برندینگ رُس؛ مشاوره، همکاری و پاسخ به پرسش‌های شما.',
    url: '/contact',
    images: ['/og-image.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
