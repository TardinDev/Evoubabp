import { notFound } from 'next/navigation'
import { blogArticles } from '@/data/blogArticles'
import BlogArticlePage from '@/views/BlogArticlePage'

export async function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }))
}

export default async function BlogArticle({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = blogArticles.find((a) => a.slug === slug)
  if (!article) notFound()
  return <BlogArticlePage slug={slug} />
}
