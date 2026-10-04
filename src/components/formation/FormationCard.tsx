import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { FormationCardProps } from '../../shared/types';

const ACCENT = '#4b0082';

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#4b0082]";

export default function FormationCard({ icon: Icon, title, text, countdown, navigateUrl, featured, price, className = "" }: FormationCardProps) {
  const body = (
    <>
      <div className="flex items-start justify-between gap-4 mb-7">
        <Icon aria-hidden="true" className="text-3xl shrink-0" style={{ color: ACCENT }} />
        <div className="flex flex-wrap justify-end gap-2">
          {featured && (
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 text-white bg-[#4b0082]">
              Nouveau
            </span>
          )}
          {price && (
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 border border-black/15 text-black/65">
              {price}
            </span>
          )}
        </div>
      </div>

      <h3 className={`font-bold leading-tight mb-3 ${featured ? 'text-2xl md:text-[1.75rem]' : 'text-xl'}`}>
        {title}
      </h3>

      <p className="text-[0.95rem] leading-relaxed text-black/70 mb-6">
        {text}
      </p>

      {countdown && (
        <div className="mb-6 pt-5 border-t border-black/10">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-black/50 mb-1.5">
            Prochaine session dans
          </p>
          <p className="font-mono text-xl font-bold m-0" style={{ color: ACCENT }}>
            {countdown.replace('d ', ' j ')}
          </p>
        </div>
      )}
    </>
  );

  const cell = `relative border-r border-b border-black/15 transition-colors duration-300 ${featured ? 'bg-white' : 'hover:bg-white'} ${className}`;

  if (navigateUrl) {
    return (
      <article className={cell}>
        <Link
          href={navigateUrl}
          className={`group flex flex-col h-full p-7 md:p-9 text-[#0a0a0a] no-underline ${focusRing}`}
        >
          {body}
          <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold" style={{ color: ACCENT }}>
            Voir le programme
            <HiArrowRight aria-hidden="true" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
        </Link>
      </article>
    );
  }

  return (
    <article className={`${cell} flex flex-col p-7 md:p-9`}>
      {body}
      <a
        href={`https://wa.me/33766450771?text=${encodeURIComponent(`Bonjour Davy, je suis intéressé(e) par : ${title}.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto self-start inline-flex items-center gap-2 py-2 text-sm font-semibold text-black/80 hover:text-[#4b0082] underline underline-offset-4 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4b0082]"
      >
        <FaWhatsapp aria-hidden="true" className="text-lg text-[#25D366]" />
        Me contacter sur WhatsApp
      </a>
    </article>
  );
}
