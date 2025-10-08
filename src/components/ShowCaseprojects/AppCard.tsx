import { useState } from "react";
import styled from "styled-components";
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
    <motion.div variants={variants}>
      <Card
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        isClickable={!!isClickable}
        tabIndex={isClickable ? 0 : -1}
        role={isClickable ? "button" : undefined}
        aria-label={isClickable ? `Voir ${app.title}` : undefined}
        type={type}
      >
        <ImageContainer>
          {!imageLoaded && !imageError && (
            <ImagePlaceholder>
              <LoadingSpinner />
              <LoadingText>Chargement...</LoadingText>
            </ImagePlaceholder>
          )}
          {imageError && (
            <ImagePlaceholder>
              <ErrorText>❌ Image non disponible</ErrorText>
              <ErrorSubtext>{app.image}</ErrorSubtext>
            </ImagePlaceholder>
          )}
          <AppImage
            src={app.image}
            alt={`Capture d'écran de ${app.title} - ${app.description}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{ display: imageLoaded && !imageError ? "block" : "none" }}
            type={type}
            loading="eager"
            decoding="async"
          />
        </ImageContainer>

        <CardContent>
          <CardHeader>
            <CardTitle>{app.title}</CardTitle>
            {type === "web" && app.url && (
              <ExternalLinkIcon aria-label="Lien externe">
                <ExternalLink size={18} />
              </ExternalLinkIcon>
            )}
          </CardHeader>

          <CardDescription>{app.description}</CardDescription>

          {app.technologies && app.technologies.length > 0 && (
            <TechnologiesContainer>
              {app.technologies.map((tech, idx) => (
                <TechBadge key={idx}>{tech}</TechBadge>
              ))}
            </TechnologiesContainer>
          )}

          {app.year && <Year>{app.year}</Year>}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Card = styled.div<{ isClickable: boolean; type: "mobile" | "web" }>`
  min-width: ${props => props.type === "mobile" ? "280px" : "320px"};
  max-width: ${props => props.type === "mobile" ? "300px" : "340px"};
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  flex-shrink: 0;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  cursor: ${props => props.isClickable ? "pointer" : "default"};
  overflow: hidden;

  @media (max-width: 767px) {
    width: 90%;
    max-width: 350px;
    min-width: unset;
  }

  @media (max-width: 480px) {
    width: 95%;
  }

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
  }

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 200px;
  background-color: #f8fafc;
`;

const ImagePlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 200px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const ErrorText = styled.p`
  color: #ef4444;
  font-size: 0.875rem;
  font-weight: 600;
`;

const ErrorSubtext = styled.p`
  color: #6b7280;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  word-break: break-all;
  padding: 0 1rem;
  text-align: center;
`;

const AppImage = styled.img<{ type: "mobile" | "web" }>`
  position: relative;
  z-index: 2;
  width: 100%;
  height: ${props => props.type === "mobile" ? "clamp(12rem, 30vw, 22rem)" : "clamp(14rem, 28vw, 20rem)"};
  object-fit: ${props => props.type === "mobile" ? "contain" : "cover"};
  object-position: center;
  background-color: ${props => props.type === "mobile" ? "#f8fafc" : "transparent"};
  transition: opacity 0.3s ease-in-out;
`;

const CardContent = styled.div`
  padding: 1.2rem;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

const CardTitle = styled.h3`
  font-weight: 600;
  font-size: 1.25rem;
  color: #1f2937;
  flex: 1;
`;

const ExternalLinkIcon = styled.div`
  color: #3b82f6;
  margin-left: 0.5rem;
  flex-shrink: 0;
`;

const CardDescription = styled.p`
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 1rem;
`;

const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`;

const TechBadge = styled.span`
  background-color: #e0f2fe;
  color: #0369a1;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #bae6fd;
  }
`;

const Year = styled.div`
  color: #9ca3af;
  font-size: 0.875rem;
  font-weight: 500;
`;

export default AppCard;
