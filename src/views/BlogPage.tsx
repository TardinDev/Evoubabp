'use client'

import Link from 'next/link'
import { blogArticles } from '../data/blogArticles'
import { FaArrowLeft, FaClock, FaCalendarAlt } from 'react-icons/fa'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <section
        className="px-8 pt-12 pb-16 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/80 no-underline text-[0.9rem] mb-8 transition-colors duration-300 ease-in-out hover:text-white"
        >
          <FaArrowLeft size={14} />
          Retour &agrave; l&apos;accueil
        </Link>
        <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold mb-4">
          Blog Technique
        </h1>
        <p className="text-[1.15rem] opacity-90 max-w-[600px] mx-auto leading-relaxed">
          Articles sur React, React Native, Node.js et TypeScript — retours
          d&apos;exp&eacute;rience et bonnes pratiques.
        </p>
      </section>

      <section className="max-w-[1100px] -mt-8 mx-auto px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8">
          {blogArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-white rounded-2xl p-8 no-underline text-inherit shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 ease-in-out flex flex-col border border-black/[0.04] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(102,126,234,0.15)] hover:border-[rgba(102,126,234,0.2)]"
            >
              <span
                className="inline-block text-white text-xs font-semibold py-1 px-3 rounded-full w-fit mb-4 uppercase tracking-[0.5px]"
                style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
              >
                Article
              </span>
              <h2 className="text-[1.3rem] font-bold text-[#1a1a2e] mb-3 leading-snug">
                {article.title}
              </h2>
              <p className="text-gray-500 text-[0.95rem] leading-relaxed flex-1 mb-4">
                {article.summary}
              </p>
              <div className="flex gap-6 mb-4">
                <span className="flex items-center gap-[0.4rem] text-gray-400 text-[0.85rem]">
                  <FaCalendarAlt size={12} />
                  {new Date(article.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-[0.4rem] text-gray-400 text-[0.85rem]">
                  <FaClock size={12} />
                  {article.readingTime}
                </span>
              </div>
              <span className="text-[#667eea] font-semibold text-[0.9rem] transition-colors duration-300 group-hover:text-[#764ba2]">
                Lire l&apos;article &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
