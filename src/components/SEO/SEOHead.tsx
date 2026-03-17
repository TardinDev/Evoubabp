import { useEffect } from 'react'

interface SEOHeadProps {
  title: string
  description: string
  canonical: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogType?: string
  jsonLd?: Record<string, unknown>
}

function setMetaTag(property: string, content: string, isProperty = false) {
  const attr = isProperty ? 'property' : 'name'
  let element = document.querySelector(`meta[${attr}="${property}"]`)
  if (element) {
    element.setAttribute('content', content)
  } else {
    element = document.createElement('meta')
    element.setAttribute(attr, property)
    element.setAttribute('content', content)
    document.head.appendChild(element)
  }
}

function setCanonical(href: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (link) {
    link.href = href
  } else {
    link = document.createElement('link')
    link.rel = 'canonical'
    link.href = href
    document.head.appendChild(link)
  }
}

export default function SEOHead({
  title,
  description,
  canonical,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = 'https://evoubap.com/evoubapfavicon.jpeg',
  ogType = 'website',
  jsonLd,
}: SEOHeadProps) {
  useEffect(() => {
    document.title = title

    setMetaTag('description', description)
    if (keywords) {
      setMetaTag('keywords', keywords)
    }

    setCanonical(canonical)

    setMetaTag('og:title', ogTitle || title, true)
    setMetaTag('og:description', ogDescription || description, true)
    setMetaTag('og:url', canonical, true)
    setMetaTag('og:image', ogImage, true)
    setMetaTag('og:type', ogType, true)

    setMetaTag('twitter:title', ogTitle || title, true)
    setMetaTag('twitter:description', ogDescription || description, true)
    setMetaTag('twitter:url', canonical, true)
    setMetaTag('twitter:image', ogImage, true)

    if (jsonLd) {
      const id = 'seo-jsonld'
      let script = document.getElementById(id) as HTMLScriptElement | null
      if (!script) {
        script = document.createElement('script')
        script.id = id
        script.type = 'application/ld+json'
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(jsonLd)
    }
  }, [title, description, canonical, keywords, ogTitle, ogDescription, ogImage, ogType, jsonLd])

  return null
}
