import type { MetadataRoute } from 'next'
import { SITE_URL, STATIC_ROUTES, SERVICE_ROUTES } from '@/lib/site'
import { ARTICLE_SLUGS } from './magazine/[slug]/articles'
import { TEAM_SLUGS } from './team/[slug]/members'

/** trailingSlash is enabled in next.config.ts, so canonical URLs end with "/". */
function url(path: string) {
  if (path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path}/`
}

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const priorityOf = (path: string) => {
    if (path === '/') return 1
    if (path === '/services' || path === '/portfolio') return 0.9
    if (path.startsWith('/services/')) return 0.8
    if (path.startsWith('/magazine')) return 0.7
    return 0.6
  }

  const paths = [
    ...STATIC_ROUTES,
    ...SERVICE_ROUTES,
    ...ARTICLE_SLUGS.map(s => `/magazine/${s}`),
    ...TEAM_SLUGS.map(s => `/team/${s}`),
  ]

  return paths.map(path => ({
    url: url(path),
    lastModified: now,
    changeFrequency: path.startsWith('/magazine') ? 'weekly' : 'monthly',
    priority: priorityOf(path),
  }))
}
