import styled from "styled-components";

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
    },
    {
      title: "Mintsa Services",
      description: "un site web pour particulier qui propose des services de consulting et administratif",
      image: "/imagesAppsMobile/mtzService.png",
    },
  ],
};

const AppShowcaseSection = () => {
  return (
    <Section id="projects">
      <SectionContainer>
        <Title>Mobile Apps</Title>
        <Description>Quelques Applications Mobiles que jai développé.</Description>
        <CardsContainer>
          {applications.mobile.map((app, index) => (
            <CardMobile key={index}>
              <AppImageMobile
                src={app.image}
                alt={app.title}
              />
              <CardTitle>{app.title}</CardTitle>
              <CardDescription>{app.description}</CardDescription>
            </CardMobile>
          ))}
        </CardsContainer>
      </SectionContainer>

      <SectionContainer>
        <Title>Web Apps</Title>
        <Description>des applications web que jai développé pour mes clients.</Description>
        <CardsContainer>
          {applications.web.map((app, index) => (
            <CardWeb key={index} isWeb>
              <AppImage
                src={app.image}
                alt={app.title}
              />
              <CardTitle>{app.title}</CardTitle>
              <CardDescription>{app.description}</CardDescription>
            </CardWeb>
          ))}
        </CardsContainer>
      </SectionContainer>
    </Section>
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
