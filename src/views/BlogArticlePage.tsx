'use client'

import Link from 'next/link'
import { useMemo } from 'react'
import { blogArticles } from '../data/blogArticles'
import { FaArrowLeft, FaClock, FaCalendarAlt } from 'react-icons/fa'

function parseMarkdown(md: string): string {
  let html = md
    // Code blocks
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>')
    // Tables
    .replace(/^\|(.+)\|$/gm, (match) => {
      const cells = match.split('|').filter(Boolean).map((c) => c.trim())
      return '<tr>' + cells.map((c) => `<td>${c}</td>`).join('') + '</tr>'
    })
    // Headings
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Unordered lists
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')

  // Wrap consecutive <li> in <ul>
  html = html.replace(/(<li>.*?<\/li>(\s*<li>.*?<\/li>)*)/gs, '<ul>$1</ul>')
  // Wrap consecutive <tr> in <table>
  html = html.replace(/(<tr>.*?<\/tr>(\s*<tr>.*?<\/tr>)*)/gs, '<div class="table-wrapper"><table>$1</table></div>')

  return `<p>${html}</p>`
}

function extractHeadings(content: string): { id: string; text: string; level: number }[] {
  const headings: { id: string; text: string; level: number }[] = []
  const regex = /^(#{2,3}) (.+)$/gm
  let match
  while ((match = regex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2]
    const id = text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
    headings.push({ id, text, level })
  }
  return headings
}

export default function BlogArticlePage({ slug }: { slug: string }) {
  const article = blogArticles.find((a) => a.slug === slug)

  const headings = useMemo(
    () => (article ? extractHeadings(article.content) : []),
    [article]
  )

  const htmlContent = useMemo(() => {
    if (!article) return ''
    let html = parseMarkdown(article.content)
    // Add ids to headings for TOC navigation
    headings.forEach(({ id, text }) => {
      html = html.replace(
        new RegExp(`<h([23])>${text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</h[23]>`),
        `<h$1 id="${id}">${text}</h$1>`
      )
    })
    return html
  }, [article, headings])

  if (!article) {
    return null
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Person',
      name: 'Davy Tardin',
      url: 'https://evoubap.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Evoubap',
      url: 'https://evoubap.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://evoubap.com/blog/${article.slug}`,
    },
    keywords: article.keywords,
    inLanguage: 'fr-FR',
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section
        className="px-8 pt-12 pb-16 text-white"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      >
        <div className="max-w-[800px] mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 no-underline text-[0.9rem] mb-8 transition-colors duration-300 ease-in-out hover:text-white"
          >
            <FaArrowLeft size={14} />
            Retour au blog
          </Link>
          <h1 className="text-[1.75rem] md:text-[2.2rem] font-extrabold mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex gap-6 flex-wrap">
            <span className="flex items-center gap-2 opacity-90 text-[0.95rem]">
              <FaCalendarAlt size={14} />
              {new Date(article.date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-2 opacity-90 text-[0.95rem]">
              <FaClock size={14} />
              {article.readingTime}
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] -mt-8 mx-auto px-8 pb-16 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8 items-start">
        {headings.length > 0 && (
          <aside className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] static lg:sticky lg:top-8 border border-black/[0.04]">
            <h3 className="text-[0.85rem] font-bold uppercase tracking-[0.5px] text-[#667eea] mb-4">
              Table des mati&egrave;res
            </h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-2">
              {headings.map(({ id, text, level }) => (
                <li key={id} className={level === 3 ? 'pl-4' : ''}>
                  <a
                    href={`#${id}`}
                    className="text-gray-500 no-underline text-[0.85rem] leading-snug transition-colors duration-200 hover:text-[#667eea]"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}

        <article
          className="blog-article-content bg-white rounded-2xl p-6 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-black/[0.04] leading-[1.8] text-[#374151] text-[1.05rem]"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>

      <div className="max-w-[800px] mx-auto px-8 pb-16 flex justify-between">
        <Link
          href="/blog"
          className="text-[#667eea] no-underline font-semibold transition-colors duration-300 hover:text-[#764ba2]"
        >
          &larr; Tous les articles
        </Link>
        <Link
          href="/"
          className="text-[#667eea] no-underline font-semibold transition-colors duration-300 hover:text-[#764ba2]"
        >
          Accueil
        </Link>
      </div>
    </div>
  )
}
