import type { Metadata } from 'next'
import ArticleClient from './ArticleClient'
import { articles, ARTICLE_SLUGS } from './articles'
import { SITE_NAME } from '@/lib/site'

export function generateStaticParams() {
  return ARTICLE_SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const article = articles[slug]
  if (!article) {
    return { title: 'مقاله', robots: { index: false, follow: true } }
  }
  const url = `/magazine/${slug}`
  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      url,
      siteName: SITE_NAME,
      images: ['/og-image.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <ArticleClient slug={slug} />
}
