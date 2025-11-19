import { useState, useEffect } from 'react';

export interface SectionConfig {
  id: string;
  color: string;
}

const useActiveSection = (sections: SectionConfig[]) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset pour le header sticky

      // Parcourir toutes les sections définies
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          // Si on est dans cette section
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i].id);
            return;
          }
        }
      }

      // Par défaut, si aucune section n'est détectée, utiliser la première
      if (sections.length > 0) {
        setActiveSection(sections[0].id);
      }
    };

    // Vérifier au chargement
    handleScroll();

    // Écouter le scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  // Trouver la couleur correspondant à la section active
  const activeColor = sections.find(s => s.id === activeSection)?.color || sections[0]?.color || '#F8F7F1';

  return { activeSection, activeColor };
};

export default useActiveSection;
