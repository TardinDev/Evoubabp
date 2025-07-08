import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

const applications = {

  mobile: [
    {
      title: "Thread Clone",
      description: "Un clone de l'application Threads",
      image: "/imagesAppsMobile/threadsclone.png",
    },
    {
      title: "instanjob",
      description: "une Application qui permet de trouver rapidement des missions autour de chez soi",
      image: "/imagesAppsMobile/instanjobmobile.png",
    },
    {
      title: "ZopGo",
      description: "Faciliter les transport et voyage avec une seule application",
      image: "/imagesAppsMobile/zopgomobile.png",
    },
  ],
  web: [
    {
      title: "Dive-Cvetements",
      description: "site web pour achéter ou louer des vêtements en Laine et rafia pour l'été",
      image: "/imagesAppsMobile/diveC.png",
      url: "https://div-cvetements.vercel.app/"
    },
    {
      title: "Mintsa Services",
      description: "un site web pour particulier qui propose des services de consulting et administratif",
      image: "/imagesAppsMobile/mtzService.png",
      url: "https://mintsaservices.vercel.app/"
    },
    {
      title: "Manioc Gabon",
      description: "Site web dédié à la vente de manioc sous toutes ses formes : tubercules frais, bâtons de manioc, farine, tapioca, et feuilles de manioc. Le site met en avant la qualité locale, la fraîcheur des produits, et une livraison rapide à domicile.",
      image: "/imagesAppsMobile/maniocgabon.png",
      url: "https://maniocgabon.vercel.app/"
    },
  ],
};

const AppShowcaseSection = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Section id="projects">
        <motion.div variants={fadeIn("up", "tween", 0.1, 1)}>
          <SectionContainer>
            <Title>Applications Mobiles</Title>
            <Description>Quelques applications mobiles que j&apos;ai développées.</Description>
            <CardsContainer>
              {applications.mobile.map((app, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("right", "spring", index * 0.2, 1)}
                >
                  <CardMobile>
                    <AppImageMobile
                      src={app.image}
                      alt={app.title}
                    />
                    <CardTitle>{app.title}</CardTitle>
                    <CardDescription>{app.description}</CardDescription>
                  </CardMobile>
                </motion.div>
              ))}
            </CardsContainer>
          </SectionContainer>
        </motion.div>

        <motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
          <SectionContainer>
            <Title>Applications Web</Title>
            <Description>Des applications web que j&apos;ai développées pour mes clients.</Description>
            <CardsContainer>
              {applications.web.map((app, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("left", "spring", index * 0.2, 1)}
                >
                  <CardWeb 
                    onClick={app.url ? () => window.open(app.url, '_blank') : undefined}
                    isClickable={!!app.url}
                  >
                    <AppImage
                      src={app.image}
                      alt={app.title}
                    />
                    <CardTitle>{app.title}</CardTitle>
                    <CardDescription>{app.description}</CardDescription>
                  </CardWeb>
                </motion.div>
              ))}
            </CardsContainer>
          </SectionContainer>
        </motion.div>
      </Section>
    </motion.div>
  );
};

const Section = styled.section`
  padding: 2rem;
  background-color: #d4e4fa;
`;

const SectionContainer = styled.div`
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #1f2937;
`;

const Description = styled.p`
  color: #6b7280;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 1.5rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  
  /* Style de la scrollbar */
  scrollbar-width: thin;
  scrollbar-color: #d1d5db #f3f4f6;
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f3f4f6;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
  }
`;


const CardMobile = styled.div`
  min-width: 280px;
  max-width: 300px;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 1.2rem;
  flex-shrink: 0;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
  }
`;

const CardWeb = styled.div`
  min-width: 320px;
  max-width: 340px;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 1.2rem;
  flex-shrink: 0;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  cursor: ${props => props.isClickable ? 'pointer' : 'default'};

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
  }
`;

const AppImageMobile = styled.img`
  width: 100%;
  height: 22rem;
  object-fit: contain;
  object-position: center;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  background-color: #f8fafc;
`;

const AppImage = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #1f2937;
`;

const CardDescription = styled.p`
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.5rem;
`;

export default AppShowcaseSection;
