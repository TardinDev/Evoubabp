import { ApplicationsData } from "../types/applications";

export const applicationsData: ApplicationsData = {
  mobile: [
    {
      title: "Sport Challenge",
      description: "une application qui permet de trouver des challenges sportifs autour de chez soi",
      image: "/imagesAppsMobile/sportchallenge.png",
      technologies: ["React Native", "TypeScript", "Firebase"],
      category: "Sport",
      year: "2024"
    },
    {
      title: "instanjob",
      description: "une Application qui permet de trouver rapidement des missions autour de chez soi",
      image: "/imagesAppsMobile/instanjobmobile.png",
      technologies: ["React Native", "Node.js", "MongoDB"],
      category: "Emploi",
      year: "2023"
    },
    {
      title: "ZopGo",
      description: "Faciliter les transport et voyage avec une seule application",
      image: "/imagesAppsMobile/zopgomobile.png",
      technologies: ["React Native", "Google Maps API"],
      category: "Transport",
      year: "2023"
    },
    {
      title: "Run Sport",
      description: "une application qui permet de trouver des chaussures de sport adaptés à vos besoins",
      image: "/imagesAppsMobile/RunSport.png",
      technologies: ["React Native", "E-commerce"],
      category: "E-commerce",
      year: "2024"
    },
    {
      title: "Binome Pay",
      description: "Transférer de l'argent d'un pays à un autre sans passer par les moyens classiques comme les banques ou Western Union, en mettant en relation directe deux personnes avec des besoins croisés.",
      image: "/imagesAppsMobile/binomePay.png",
      technologies: ["React Native", "Blockchain", "Web3"],
      category: "Fintech",
      year: "2024"
    },
  ],
  web: [
    {
      title: "Dive-Cvetements",
      description: "site web pour achéter ou louer des vêtements en Laine et rafia pour l'été",
      image: "/imagesAppsMobile/diveC.png",
      url: "https://div-cvetements.vercel.app/",
      technologies: ["React", "TypeScript", "Styled Components"],
      category: "E-commerce",
      year: "2024"
    },
    {
      title: "Mintsa Services",
      description: "un site web pour particulier qui propose des services de consulting et administratif",
      image: "/imagesAppsMobile/mtzService.png",
      url: "https://mintsaservices.vercel.app/",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      category: "Services",
      year: "2023"
    },
    {
      title: "Manioc Gabon",
      description: "Site web dédié à la vente de manioc sous toutes ses formes : tubercules frais, bâtons de manioc, farine, tapioca, et feuilles de manioc. Le site met en avant la qualité locale, la fraîcheur des produits, et une livraison rapide à domicile.",
      image: "/imagesAppsMobile/maniocgabon.png",
      url: "https://maniocgabon.vercel.app/",
      technologies: ["React", "Vite", "Stripe"],
      category: "E-commerce",
      year: "2024"
    },
    {
      title: "Germe Invest",
      description: "Cabinet d'investissement offrant des services de conseil financier, de gestion de portefeuille et d'accompagnement des projets d'entrepreneuriat en Afrique.",
      image: "/imagesAppsMobile/germeinvest.png",
      url: "https://germe-invest.com/",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      category: "Finance & Investissement",
      year: "2025"
    },
    {
      title: "KongossaDocs",
      description: "Plateforme de gestion et de partage de documents en ligne, permettant une collaboration efficace et sécurisée entre équipes.",
      image: "/imagesAppsMobile/kongossaDoc.png",
      url: "",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      category: "Productivité",
      year: "2024"
    },
  ],
};
