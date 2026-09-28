export const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1'

const TIMEOUT_MS = 20_000

export class ApiError extends Error {
  status: number
  constructor(message: string, status: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

export const TOKEN_KEY = 'ros_token'
export const USER_KEY = 'ros_user'

function getToken() {
  if (typeof window === 'undefined') return null
  try {
    return localStorage.getItem(TOKEN_KEY)
  } catch {
    return null
  }
}

export function clearSession() {
  if (typeof window === 'undefined') return
  try {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
  } catch {
    /* storage unavailable */
  }
}

/** Parses JSON defensively: a 204 or an HTML error page must not blow up
 *  with an opaque "Unexpected token <" further up the stack. */
async function parseBody(res: Response): Promise<unknown> {
  if (res.status === 204) return null
  const text = await res.text()
  if (!text) return null
  try {
    return JSON.parse(text)
  } catch {
    return { error: text.slice(0, 200) }
  }
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getToken()
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

  let res: Response
  try {
    res = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      signal: options.signal ?? controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
      },
    })
  } catch (err) {
    clearTimeout(timer)
    if (err instanceof DOMException && err.name === 'AbortError') {
      throw new ApiError('زمان پاسخ سرور به پایان رسید. دوباره تلاش کنید.', 0)
    }
    throw new ApiError('ارتباط با سرور برقرار نشد. اتصال اینترنت را بررسی کنید.', 0)
  }
  clearTimeout(timer)

  const data = await parseBody(res)

  if (!res.ok) {
    if (res.status === 401) clearSession()
    const message =
      (data && typeof data === 'object' && 'error' in data
        ? String((data as { error: unknown }).error)
        : '') || 'خطای سرور'
    throw new ApiError(message, res.status)
  }

  return data as T
}

// Auth
export const authAPI = {
  register: (body: { email: string; password: string; full_name: string; phone?: string }) =>
    request<{ token: string; user: User }>('/auth/register', { method: 'POST', body: JSON.stringify(body) }),

  login: (body: { email: string; password: string }) =>
    request<{ token: string; user: User }>('/auth/login', { method: 'POST', body: JSON.stringify(body) }),

  me: () => request<User>('/auth/me'),

  forgotPassword: (body: { email: string }) =>
    request<{ message: string }>('/auth/forgot-password', { method: 'POST', body: JSON.stringify(body) }),

  resetPassword: (body: { token: string; password: string }) =>
    request<{ message: string }>('/auth/reset-password', { method: 'POST', body: JSON.stringify(body) }),
}

// Brand
export const brandAPI = {
  create: (body: BrandCreateInput) =>
    request<Brand>('/brands', { method: 'POST', body: JSON.stringify(body) }),

  get: () => request<Brand>('/brands/me'),

  update: (id: string, body: Partial<BrandCreateInput>) =>
    request<{ message: string }>(`/brands/${id}`, { method: 'PUT', body: JSON.stringify(body) }),

  updatePhase: (id: string, phase: number) =>
    request<{ message: string }>(`/brands/${id}/phase`, { method: 'PUT', body: JSON.stringify({ phase }) }),
}

// Analysis
export const analysisAPI = {
  create: (body: AnalysisCreateInput) =>
    request<Analysis>('/analyses', { method: 'POST', body: JSON.stringify(body) }),

  getByBrand: (brandId: string) =>
    request<Analysis[]>(`/analyses/brand/${brandId}`),

  getScores: (brandId: string) =>
    request<ChannelScore[]>(`/analyses/brand/${brandId}/scores`),
}

// User
export const userAPI = {
  getProfile: () => request<User>('/users/profile'),
  updateProfile: (body: { full_name: string; phone: string }) =>
    request<{ message: string }>('/users/profile', { method: 'PUT', body: JSON.stringify(body) }),
  changePassword: (body: { current_password: string; new_password: string }) =>
    request<{ message: string }>('/users/change-password', { method: 'PUT', body: JSON.stringify(body) }),
}

// Contact
export const contactAPI = {
  submit: (body: ContactForm) =>
    request<{ message: string; id: string }>('/contact', { method: 'POST', body: JSON.stringify(body) }),
}

// Types
export interface User {
  id: string
  email: string
  full_name: string
  phone: string
  role: string
  is_verified: boolean
  created_at: string
}

export interface Brand {
  id: string
  user_id: string
  name: string
  industry: string
  description: string
  has_strategy: boolean
  phase: number
  score: number
  personality: string[]
  values: string[]
  tone: string
  created_at: string
  updated_at: string
}

export interface BrandCreateInput {
  has_strategy?: boolean
  name: string
  industry: string
  description?: string
  personality?: string[]
  values?: string[]
  tone?: string
}

export interface Analysis {
  id: string
  brand_id: string
  channel: string
  score: number
  data: string
  created_at: string
}

export interface AnalysisCreateInput {
  brand_id: string
  channel: string
  score: number
  data: Record<string, number>
}

export interface ChannelScore {
  channel: string
  personality: number
  tone: number
  values: number
  status: string
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

// ─── Admin Types ───────────────────────────────────────────
export interface AdminStats {
  total_users: number
  total_brands: number
  total_analyses: number
  total_contacts: number
  new_contacts: number
  active_users?: number
  avg_brand_score?: number
  ai_documents?: number
  monthly_growth?: { month: string; users: number }[]
}

export interface AdminUser {
  id: string
  full_name: string
  email: string
  phone: string
  role: string
  is_verified: boolean
  created_at: string
  brand_name?: string
  plan?: string
  last_active?: string
}

export interface AdminContact {
  phone?: string
  id: string
  name: string
  email: string
  subject: string
  message: string
  status: string
  created_at: string
}

export interface AdminAnalysis {
  id: string
  brand_id: string
  brand_name: string
  channel: string
  score: number
  created_at: string
}

// ─── Admin API ─────────────────────────────────────────────

/** The backend returns either a bare array or a `{ <key>: [], total }`
 *  envelope depending on the endpoint; normalise both into one shape. */
function normalizeList<T>(data: unknown, key: string): { items: T[]; total: number } {
  if (Array.isArray(data)) return { items: data as T[], total: data.length }
  if (data && typeof data === 'object') {
    const obj = data as Record<string, unknown>
    const items = Array.isArray(obj[key]) ? (obj[key] as T[]) : []
    const total = typeof obj.total === 'number' ? obj.total : items.length
    return { items, total }
  }
  return { items: [], total: 0 }
}
export const adminAPI = {
  getStats: () =>
    request<AdminStats>('/admin/stats'),

  getUsers: (params?: { page?: number; limit?: number; search?: string }) => {
    const q = new URLSearchParams()
    if (params?.page)   q.set('page',   String(params.page))
    if (params?.limit)  q.set('limit',  String(params.limit))
    if (params?.search) q.set('search', params.search)
    return request<unknown>(`/admin/users?${q}`).then(data => {
      const { items, total } = normalizeList<AdminUser>(data, 'users')
      return { users: items, total }
    })
  },

  updateUserRole: (id: string, role: 'user' | 'admin') =>
    request<{ message: string }>(`/admin/users/${id}/role`, {
      method: 'PUT',
      body: JSON.stringify({ role }),
    }),

  getAnalyses: () =>
    request<unknown>('/admin/analyses').then(data => {
      const { items, total } = normalizeList<AdminAnalysis>(data, 'analyses')
      return { analyses: items, total }
    }),

  getContacts: () =>
    request<unknown>('/admin/contacts').then(data => {
      const { items, total } = normalizeList<AdminContact>(data, 'contacts')
      return { contacts: items, total }
    }),

  updateContactStatus: (id: string, status: 'read' | 'unread' | 'resolved') =>
    request<{ message: string }>(`/admin/contacts/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    }),
}

