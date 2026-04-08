'use client'

import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-5"
      style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
    >
      <div className="text-center text-white">
        <h1 className="text-[5rem] sm:text-[8rem] font-extrabold m-0 leading-none opacity-90">
          404
        </h1>
        <h2 className="text-2xl sm:text-[2rem] my-4 font-semibold">
          Page non trouvée
        </h2>
        <p className="text-lg opacity-85 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-block py-3.5 px-8 bg-white text-[#667eea] no-underline rounded-lg font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
