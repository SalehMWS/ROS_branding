export const SITE_URL = 'https://rosbrand.ir'
export const SITE_NAME = 'رُس | آژانس هوشمند برندینگ'

/** Public routes included in the sitemap. Private areas (dashboard, admin,
 *  onboarding) and auth pages are intentionally excluded. */
export const SERVICE_ROUTES = [
  '/services',
  '/services/brand-strategy',
  '/services/brand-strategy/architecture',
  '/services/brand-strategy/brand-document',
  '/services/brand-strategy/experience',
  '/services/brand-strategy/naming',
  '/services/brand-strategy/performance',
  '/services/brand-strategy/rebranding',
  '/services/brand-design',
  '/services/brand-design/brandbook',
  '/services/brand-design/stationery',
  '/services/brand-design/visual-identity',
]

export const STATIC_ROUTES = [
  '/',
  '/about',
  '/ai',
  '/contact',
  '/contact/request-consultation',
  '/portfolio',
  '/portfolio/rahkar-sanat',
  '/portfolio/zoodex-mockup',
  '/magazine',
]

/** Routes reachable without a session. Kept here so AuthGuard and the
 *  sitemap can never disagree about what is public. */
export const PUBLIC_ROUTES = [
  ...STATIC_ROUTES,
  ...SERVICE_ROUTES,
  '/magazine',
  '/team',
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
]

export function isPublicPath(pathname: string) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
  return PUBLIC_ROUTES.some(p => path === p || path.startsWith(p + '/'))
}
