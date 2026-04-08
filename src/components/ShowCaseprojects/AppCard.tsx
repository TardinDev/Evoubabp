'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Application } from "../../types/applications";
import { ExternalLink } from "lucide-react";

interface AppCardProps {
  app: Application;
  index: number;
  type: "mobile" | "web";
  variants: any;
  onCardClick?: (app: Application) => void;
}

const AppCard = ({ app, index, type, variants, onCardClick }: AppCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    if (type === "web" && app.url) {
      window.open(app.url, "_blank", "noopener,noreferrer");
    } else if (onCardClick) {
      onCardClick(app);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    console.error(`Failed to load image: ${app.image}`);
    setImageError(true);
  };

  const isClickable = (type === "web" && app.url) || onCardClick;

  return (
      <motion.div variants={variants} className="shrink-0 w-[220px] md:w-[380px]">
        <div
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex={isClickable ? 0 : -1}
          role={isClickable ? "button" : undefined}
          aria-label={isClickable ? `Voir ${app.title}` : undefined}
          className="bg-white rounded-xl md:rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:outline-2 focus:outline-blue-500 focus:outline-offset-2 h-full"
          style={{
            cursor: isClickable ? "pointer" : "default",
          }}
        >
          <div className="relative w-full min-h-[120px] md:min-h-[200px]" style={{ backgroundColor: '#f8fafc' }}>
            {!imageLoaded && !imageError && (
              <div
                className="absolute top-0 left-0 w-full h-full min-h-[120px] md:min-h-[200px] flex flex-col items-center justify-center z-[1]"
                style={{
                  background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                  backgroundSize: '200% 100%',
                  animation: 'appcard-loading 1.5s infinite',
                }}
              >
                <div
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                  style={{
                    border: '4px solid #f3f3f3',
                    borderTop: '4px solid #3b82f6',
                    animation: 'appcard-spin 1s linear infinite',
                  }}
                />
                <p className="text-gray-500 text-xs md:text-sm mt-2">Chargement...</p>
              </div>
            )}
            {imageError && (
              <div className="absolute top-0 left-0 w-full h-full min-h-[120px] md:min-h-[200px] flex flex-col items-center justify-center z-[1]" style={{ background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)', backgroundSize: '200% 100%' }}>
                <p className="text-red-500 text-xs md:text-sm font-semibold">&#x274C; Image non disponible</p>
                <p className="text-gray-500 text-[10px] md:text-xs mt-1 break-all px-2 text-center">{app.image}</p>
              </div>
            )}
            <img
              src={app.image}
              alt={`Capture d'écran de ${app.title} - ${app.description}`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              className="relative z-[2] w-full transition-opacity duration-300"
              style={{
                display: imageLoaded && !imageError ? "block" : "none",
                height: type === "mobile"
                  ? "clamp(8rem, 20vw, 22rem)"
                  : "clamp(9rem, 22vw, 20rem)",
                objectFit: type === "mobile" ? "contain" : "cover",
                objectPosition: "center",
                backgroundColor: type === "mobile" ? "#f8fafc" : "transparent",
              }}
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="p-3 md:p-5">
            <div className="flex justify-between items-start mb-1 md:mb-2">
              <h3 className="font-semibold text-sm md:text-xl text-gray-800 flex-1 line-clamp-1">{app.title}</h3>
              {type === "web" && app.url && (
                <div className="text-blue-500 ml-1 md:ml-2 shrink-0" aria-label="Lien externe">
                  <ExternalLink size={14} className="md:hidden" />
                  <ExternalLink size={18} className="hidden md:block" />
                </div>
              )}
            </div>

            <p className="text-gray-500 text-xs md:text-base leading-5 md:leading-6 mb-2 md:mb-4 line-clamp-2 md:line-clamp-none">{app.description}</p>

            {app.technologies && app.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1 md:gap-2 mb-1 md:mb-3">
                {app.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-medium transition-colors duration-200 hover:bg-sky-200"
                    style={{ backgroundColor: '#e0f2fe', color: '#0369a1' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
  );
};

export default AppCard;
