import type { Metadata } from 'next'
import TeamClient from './TeamClient'
import { members, TEAM_SLUGS } from './members'
import { SITE_NAME } from '@/lib/site'

export function generateStaticParams() {
  return TEAM_SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const m = members[slug]
  if (!m) {
    return { title: 'تیم رُس', robots: { index: false, follow: true } }
  }
  const title = `${m.name} — ${m.role}`
  const url = `/team/${slug}`
  return {
    title,
    description: m.bio,
    alternates: { canonical: url },
    openGraph: {
      type: 'profile',
      title,
      description: m.bio,
      url,
      siteName: SITE_NAME,
      images: [m.photo ?? '/og-image.jpg'],
    },
  }
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <TeamClient slug={slug} />
}
