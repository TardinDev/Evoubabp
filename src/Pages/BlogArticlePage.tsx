import { useParams, Link, Navigate } from 'react-router-dom'
import { useMemo } from 'react'
import styled from 'styled-components'
import SEOHead from '../components/SEO/SEOHead'
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

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>()
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
    return <Navigate to="/blog" replace />
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
    <PageWrapper>
      <SEOHead
        title={`${article.title} — Davy Tardin`}
        description={article.metaDescription}
        canonical={`https://evoubap.com/blog/${article.slug}`}
        keywords={article.keywords}
        ogType="article"
        jsonLd={jsonLd}
      />

      <HeroSection>
        <HeroContent>
          <BackLink to="/blog">
            <FaArrowLeft size={14} />
            Retour au blog
          </BackLink>
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleMeta>
            <MetaItem>
              <FaCalendarAlt size={14} />
              {new Date(article.date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </MetaItem>
            <MetaItem>
              <FaClock size={14} />
              {article.readingTime}
            </MetaItem>
          </ArticleMeta>
        </HeroContent>
      </HeroSection>

      <ContentLayout>
        {headings.length > 0 && (
          <TOCSidebar>
            <TOCTitle>Table des matières</TOCTitle>
            <TOCList>
              {headings.map(({ id, text, level }) => (
                <TOCItem key={id} $level={level}>
                  <TOCLink href={`#${id}`}>{text}</TOCLink>
                </TOCItem>
              ))}
            </TOCList>
          </TOCSidebar>
        )}

        <ArticleContent dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </ContentLayout>

      <FooterNav>
        <FooterLink to="/blog">&larr; Tous les articles</FooterLink>
        <FooterLink to="/">Accueil</FooterLink>
      </FooterNav>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
`

const HeroSection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 3rem 2rem 4rem;
  color: white;
`

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`

const ArticleTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`

const ArticleMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.9;
  font-size: 0.95rem;
`

const ContentLayout = styled.div`
  max-width: 1100px;
  margin: -2rem auto 0;
  padding: 0 2rem 4rem;
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const TOCSidebar = styled.aside`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.04);

  @media (max-width: 900px) {
    position: static;
  }
`

const TOCTitle = styled.h3`
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #667eea;
  margin-bottom: 1rem;
`

const TOCList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const TOCItem = styled.li<{ $level: number }>`
  padding-left: ${(props) => (props.$level === 3 ? '1rem' : '0')};
`

const TOCLink = styled.a`
  color: #6b7280;
  text-decoration: none;
  font-size: 0.85rem;
  line-height: 1.4;
  transition: color 0.2s;

  &:hover {
    color: #667eea;
  }
`

const ArticleContent = styled.article`
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.04);
  line-height: 1.8;
  color: #374151;
  font-size: 1.05rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  h2 {
    font-size: 1.6rem;
    font-weight: 700;
    color: #1a1a2e;
    margin: 2.5rem 0 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #667eea;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1a1a2e;
    margin: 2rem 0 0.75rem;
  }

  p {
    margin-bottom: 1rem;
  }

  strong {
    color: #1a1a2e;
  }

  ul {
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  code {
    background: #f3f4f6;
    padding: 0.15rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9em;
    color: #764ba2;
  }

  pre {
    background: #1e1e2e;
    border-radius: 12px;
    padding: 1.5rem;
    overflow-x: auto;
    margin: 1.5rem 0;

    code {
      background: none;
      color: #cdd6f4;
      padding: 0;
      font-size: 0.85rem;
      line-height: 1.6;
    }
  }

  .table-wrapper {
    overflow-x: auto;
    margin: 1.5rem 0;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  tr:first-child {
    background: linear-gradient(135deg, #667eea, #764ba2);

    td {
      color: white;
      font-weight: 600;
    }
  }

  tr:nth-child(2) {
    td {
      border-bottom: 2px solid #e5e7eb;
      font-size: 0.85rem;
      color: #9ca3af;
    }
  }

  td {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #f3f4f6;
  }

  tr:not(:first-child):hover {
    background: #f9fafb;
  }
`

const FooterNav = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
  display: flex;
  justify-content: space-between;
`

const FooterLink = styled(Link)`
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;

  &:hover {
    color: #764ba2;
  }
`
