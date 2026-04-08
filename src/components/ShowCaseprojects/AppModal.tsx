'use client'

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink } from "lucide-react";
import { Application } from "../../types/applications";

interface AppModalProps {
  app: Application | null;
  isOpen: boolean;
  onClose: () => void;
}

const AppModal = ({ app, isOpen, onClose }: AppModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!app) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 flex items-center justify-center z-[1000] p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="bg-white rounded-2xl w-full max-w-[900px] max-h-[90vh] md:max-h-[90vh] max-md:max-h-[95vh] overflow-y-auto relative shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Fermer le modal"
              className="absolute top-4 right-4 bg-white border-none rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-10 transition-all duration-200 hover:bg-gray-100 hover:scale-110 focus:outline-2 focus:outline-blue-500 focus:outline-offset-2"
              style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}
            >
              <X size={20} />
            </button>

            <div className="flex flex-col">
              <div className="relative w-full h-[260px] md:h-[350px]">
                <Image
                  src={app.image}
                  alt={`Capture d'écran complète de ${app.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="object-cover rounded-t-2xl"
                />
              </div>

              <div className="p-8 max-[480px]:p-6">
                <h2 id="modal-title" className="text-2xl max-[480px]:text-xl font-bold text-gray-800 mb-2">{app.title}</h2>

                {app.year && <div className="text-gray-400 text-base font-medium mb-4">{app.year}</div>}

                <p className="text-gray-600 text-base leading-7 mb-8">{app.description}</p>

                {app.technologies && app.technologies.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-base font-semibold text-gray-700 mb-3 uppercase tracking-wide">Technologies utilisées</h3>
                    <div className="flex flex-wrap gap-3">
                      {app.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                          style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}
                          onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = '#bfdbfe'; }}
                          onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = '#dbeafe'; }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {app.category && (
                  <div className="mb-6">
                    <h3 className="text-base font-semibold text-gray-700 mb-3 uppercase tracking-wide">Catégorie</h3>
                    <span
                      className="inline-block px-4 py-2 rounded-lg text-sm font-medium"
                      style={{ backgroundColor: '#f3e8ff', color: '#6b21a8' }}
                    >
                      {app.category}
                    </span>
                  </div>
                )}

                {app.url && (
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold no-underline transition-all duration-200 mt-4 hover:bg-blue-600 hover:-translate-y-0.5 focus:outline-2 focus:outline-blue-500 focus:outline-offset-2"
                  >
                    Visiter le site
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppModal;
