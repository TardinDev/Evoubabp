'use client'

import Image from 'next/image';
import { FaFacebook, FaGithub, FaTiktok, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useTranslation } from "../../hooks/useTranslation";

const tardinimage = '/images/tardin.jpg'
const cv = '/documents/tardinDev.pdf'

export default function UnderHeader() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselWords = [
    "Tardin",
    <>{t.hero.developer}<br />{t.hero.software}</>
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-bg-primary mt-4 mb-8">
      {/* Section container */}
      <div
        className="relative bg-bg-primary z-[1]"
        style={{ padding: 'clamp(8px, 1vw, 16px) clamp(20px, 4vw, 50px)' }}
      >
        {/* upElement */}
        <div
          className="flex justify-between items-center flex-wrap max-sm:justify-center max-sm:items-center max-sm:gap-8"
          style={{ fontSize: 'clamp(1.1rem, 1.9vw + 0.9rem, 2rem)' }}
        >
          <span
            className="uh-animate-right cursor-pointer transition-all duration-500 ease-in-out p-2 rounded-[10px] font-semibold text-black relative z-[2] -ml-6 hover:bg-[#4b0082] hover:text-white hover:scale-110 hover:border hover:border-purple-800 hover:rounded-[10px] hover:px-4 hover:py-2 hover:no-underline hover:z-10 group"
          >
            {t.hero.greeting}<br /> {t.hero.iAm}{" "}
            <span className="inline-block relative w-[min(280px,70vw)] h-[2.4em] align-top">
              <span
                key={currentIndex}
                className="uh-carousel-word absolute left-0 top-0 text-black font-bold leading-[1.2] transition-colors duration-300 group-hover:text-white"
              >
                {carouselWords[currentIndex]}
              </span>
            </span>
            .
          </span>
          <span
            className="uh-animate-left relative rounded-[10px] inline-block cursor-pointer px-4 py-2 transition-all duration-500 ease-in-out text-black font-semibold z-[2] hover:bg-[#4b0082] hover:text-white hover:scale-110 hover:border hover:border-purple-800 hover:rounded-[10px] hover:px-4 hover:py-2 hover:no-underline hover:z-10 max-sm:relative max-sm:hidden"
          >
            <span>{t.hero.smartSolutions1}</span>
            <br />
            <span>{t.hero.smartSolutions2}</span>
            <br />
            <span>{t.hero.smartSolutions3}</span>
          </span>
        </div>

        {/* Person image — no entrance animation (LCP element must paint immediately) */}
        <div
          className="absolute top-12 left-1/4 -translate-x-1/2 z-[1] max-sm:relative max-sm:top-0 max-sm:left-0 max-sm:translate-x-0 max-sm:flex max-sm:justify-center max-sm:items-center max-sm:mt-4 group"
        >
          <Image
            src={tardinimage}
            alt="Tardin"
            width={280}
            height={280}
            priority
            fetchPriority="high"
            sizes="(max-width: 640px) 130px, (max-width: 1024px) 26vw, 280px"
            className="h-auto object-contain border-[3px] border-purple-800 rounded-full mb-[5px] opacity-90 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-105"
            style={{ width: 'clamp(130px, 26vw, 280px)', height: 'auto' }}
          />
        </div>

        {/* CV download */}
        <a
          className="uh-animate-right absolute top-1/2 left-0 text-orange-500 cursor-pointer hover:bg-[#4b0082] hover:text-white hover:text-[30px] hover:border hover:border-purple-800 hover:rounded-[10px] hover:px-2 hover:py-[0.3rem] hover:no-underline transition-all duration-500 ease-in-out max-sm:relative max-sm:hidden"
          style={{ marginLeft: 'clamp(1rem, 4vw, 3rem)' }}
          href={cv}
          download={cv}
        >
          {t.hero.downloadCV}
        </a>

        {/* Down element */}
        <div
          className="flex flex-wrap justify-between text-xl max-sm:mt-8 max-sm:gap-6 max-sm:flex-col"
          style={{ marginTop: 'clamp(2rem, 4vw, 5rem)' }}
        >
          <div
            className="uh-animate-right gap-4"
          >
            {/* numberofyearsExperience */}
            <div className="flex items-center gap-[10px]">
              <div className="cursor-pointer transition-all duration-500 ease-in-out p-2 rounded-[10px] font-semibold text-black relative z-[2] -ml-6 hover:bg-[#4b0082] hover:text-white hover:scale-110 hover:border hover:border-purple-800 hover:rounded-[10px] hover:px-4 hover:py-2 hover:no-underline hover:z-10">
                4
              </div>
              <div className="relative rounded-[10px] inline-block cursor-pointer px-4 py-2 transition-all duration-500 ease-in-out text-black font-semibold z-[2] hover:bg-[#4b0082] hover:text-white hover:scale-110 hover:border hover:border-purple-800 hover:rounded-[10px] hover:px-4 hover:py-2 hover:no-underline hover:z-10 max-sm:relative max-sm:hidden">
                <div>{t.hero.years}</div>
                <div>{t.hero.experience}</div>
              </div>
            </div>
            {/* iconsContact */}
            <div className="flex gap-4 mt-2 [&>svg]:transition-transform [&>svg]:duration-300 [&>svg]:ease-in-out hover:[&>svg]:scale-[1.2]">
              <FaFacebook role="img" aria-label="Facebook" color="blue" className="w-9 h-9 sm:w-[44px] sm:h-[44px] transition-transform duration-300 ease-in-out hover:scale-[1.2]" />
              <FaTiktok role="img" aria-label="TikTok" color="#000" className="w-9 h-9 sm:w-[44px] sm:h-[44px] transition-transform duration-300 ease-in-out hover:scale-[1.2]" />
              <IoLogoWhatsapp role="img" aria-label="WhatsApp" color="green" className="w-9 h-9 sm:w-[44px] sm:h-[44px] transition-transform duration-300 ease-in-out hover:scale-[1.2]" />
              <FaYoutube role="img" aria-label="YouTube" color="red" className="w-9 h-9 sm:w-[44px] sm:h-[44px] transition-transform duration-300 ease-in-out hover:scale-[1.2]" />
            </div>
          </div>

          <div
            className="uh-animate-left flex gap-5 items-center ml-auto max-sm:flex-col max-sm:items-start max-sm:ml-0 max-sm:gap-3"
          >
            <div className="text-lg leading-snug max-w-[520px] font-bold max-sm:text-sm max-sm:leading-relaxed">
              {t.hero.discoverProjects}
            </div>

            <div className="flex flex-col gap-4 max-sm:flex-row max-sm:gap-6">
              <a
                href="https://vercel.com/tardindevs-projects"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir mes projets sur Vercel"
                className="flex gap-[10px] items-center no-underline text-inherit"
              >
                <IoLogoVercel aria-hidden size={48} color="#000" className="mb-4 w-14 max-sm:mb-0 max-sm:w-10" />
                <span className="text-purple-800 font-bold">Vercel</span>
              </a>

              <a
                href="https://github.com/TardinDev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir mon profil GitHub"
                className="flex gap-[10px] items-center no-underline text-inherit"
              >
                <FaGithub aria-hidden size={40} color="#000" className="mb-4 transition-transform duration-300 ease-in-out hover:scale-[1.15] max-sm:mb-0" />
                <span className="text-purple-800 font-bold">GitHub</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
