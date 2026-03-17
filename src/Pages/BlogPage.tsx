import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SEOHead from '../components/SEO/SEOHead'
import { blogArticles } from '../data/blogArticles'
import { FaArrowLeft, FaClock, FaCalendarAlt } from 'react-icons/fa'

export default function BlogPage() {
  return (
    <PageWrapper>
      <SEOHead
        title="Blog — Davy Tardin | Articles techniques React, Node.js & Mobile"
        description="Articles techniques sur React, React Native, Node.js et TypeScript. Guides, tutoriels et bonnes pratiques par un développeur freelance à Paris."
        canonical="https://evoubap.com/blog"
        keywords="blog développeur React, tutoriel React Native, Node.js TypeScript, articles techniques, développeur Paris"
        ogType="website"
      />

      <HeroSection>
        <BackLink to="/">
          <FaArrowLeft size={14} />
          Retour à l'accueil
        </BackLink>
        <HeroTitle>Blog Technique</HeroTitle>
        <HeroSubtitle>
          Articles sur React, React Native, Node.js et TypeScript — retours d'expérience et bonnes pratiques.
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <ArticlesGrid>
          {blogArticles.map((article) => (
            <ArticleCard key={article.slug} to={`/blog/${article.slug}`}>
              <ArticleTag>Article</ArticleTag>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleSummary>{article.summary}</ArticleSummary>
              <ArticleMeta>
                <MetaItem>
                  <FaCalendarAlt size={12} />
                  {new Date(article.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </MetaItem>
                <MetaItem>
                  <FaClock size={12} />
                  {article.readingTime}
                </MetaItem>
              </ArticleMeta>
              <ReadMore>Lire l'article &rarr;</ReadMore>
            </ArticleCard>
          ))}
        </ArticlesGrid>
      </ContentSection>
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
  text-align: center;
  color: white;
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

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const HeroSubtitle = styled.p`
  font-size: 1.15rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`

const ContentSection = styled.section`
  max-width: 1100px;
  margin: -2rem auto 0;
  padding: 0 2rem 4rem;
`

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const ArticleCard = styled(Link)`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.04);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(102, 126, 234, 0.15);
    border-color: rgba(102, 126, 234, 0.2);
  }
`

const ArticleTag = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  width: fit-content;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const ArticleTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 0.75rem;
  line-height: 1.4;
`

const ArticleSummary = styled.p`
  color: #6b7280;
  font-size: 0.95rem;
  line-height: 1.6;
  flex: 1;
  margin-bottom: 1rem;
`

const ArticleMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
`

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #9ca3af;
  font-size: 0.85rem;
`

const ReadMore = styled.span`
  color: #667eea;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.3s;

  ${ArticleCard}:hover & {
    color: #764ba2;
  }
`
