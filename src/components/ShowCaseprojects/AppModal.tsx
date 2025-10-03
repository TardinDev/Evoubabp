import { useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
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
        <Overlay
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContainer
            as={motion.div}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <CloseButton
              onClick={onClose}
              aria-label="Fermer le modal"
            >
              <X size={24} />
            </CloseButton>

            <ModalContent>
              <ModalImage
                src={app.image}
                alt={`Capture d'écran complète de ${app.title}`}
              />

              <ModalInfo>
                <ModalTitle id="modal-title">{app.title}</ModalTitle>

                {app.year && <Year>{app.year}</Year>}

                <ModalDescription>{app.description}</ModalDescription>

                {app.technologies && app.technologies.length > 0 && (
                  <Section>
                    <SectionTitle>Technologies utilisées</SectionTitle>
                    <TechnologiesGrid>
                      {app.technologies.map((tech, idx) => (
                        <TechBadge key={idx}>{tech}</TechBadge>
                      ))}
                    </TechnologiesGrid>
                  </Section>
                )}

                {app.category && (
                  <Section>
                    <SectionTitle>Catégorie</SectionTitle>
                    <CategoryBadge>{app.category}</CategoryBadge>
                  </Section>
                )}

                {app.url && (
                  <VisitButton
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visiter le site
                    <ExternalLink size={18} />
                  </VisitButton>
                )}
              </ModalInfo>
            </ModalContent>
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 1rem;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    max-height: 95vh;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
    transform: scale(1.1);
  }

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 1rem 1rem 0 0;
`;

const ModalInfo = styled.div`
  padding: 2rem;

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Year = styled.div`
  color: #9ca3af;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const ModalDescription = styled.p`
  color: #4b5563;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 2rem;
`;

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const TechnologiesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const TechBadge = styled.span`
  background-color: #dbeafe;
  color: #1e40af;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background-color: #bfdbfe;
    transform: translateY(-2px);
  }
`;

const CategoryBadge = styled.span`
  display: inline-block;
  background-color: #f3e8ff;
  color: #6b21a8;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
`;

const VisitButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s ease, transform 0.2s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
  }

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
`;

export default AppModal;
