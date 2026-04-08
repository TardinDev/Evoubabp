'use client'

import { motion } from "framer-motion";
import { FaCheck, FaLock } from "react-icons/fa";
import PropTypes from "prop-types";


// === UTILITY COMPONENTS ===
export const TechStackComponent = ({ title, items }) => (
  <div className="mt-8">
    <h3 className="text-xl font-semibold mb-4 text-[#2d3748]">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {items.map((item, index) => (
        <span key={index} className="bg-[#667eea] text-white py-2 px-4 rounded-[20px] text-sm font-medium">
          {item}
        </span>
      ))}
    </div>
  </div>
);

export const ModuleComponent = ({ module }) => (
  <div className="bg-white rounded-[10px] p-6 border border-[#e2e8f0]">
    <div className="flex items-center gap-4 mb-4 max-md:flex-col max-md:items-start max-md:gap-2">
      <div
        className="w-10 h-10 rounded-[10px] flex items-center justify-center font-bold text-white shrink-0"
        style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
      >
        {module.number}
      </div>
      <h3 className="text-lg font-semibold text-[#1e293b] flex-1">{module.title}</h3>
      <div className="bg-[#f1f5f9] text-[#475569] py-1 px-3 rounded-[15px] text-sm font-medium">
        {module.duration}
      </div>
    </div>
    <ul className="list-none p-0 flex flex-col gap-2">
      {module.lessons.map((lesson, index) => (
        <li key={index} className="flex items-center gap-3 text-[#475569]">
          <FaCheck className="text-[#10b981] shrink-0" />
          {lesson}
        </li>
      ))}
    </ul>
  </div>
);

export const LockedProjectOverlay = ({ onPremiumClick }) => (
  <div
    onClick={onPremiumClick}
    className="absolute inset-0 bg-[rgba(15,23,42,0.75)] backdrop-blur-[3px] flex flex-col items-center justify-center z-10 cursor-pointer rounded-2xl transition-all duration-300 ease-in-out hover:bg-[rgba(15,23,42,0.85)]"
  >
    <div className="text-5xl text-[#3b82f6] mb-4 animate-pulse-opacity">
      <FaLock />
    </div>
    <h3 className="text-2xl font-bold text-white mb-2 text-center">Contenu Premium</h3>
    <p className="text-base text-[#94a3b8] text-center m-0">Cliquez pour deverrouiller ce projet</p>
  </div>
);

// PropTypes
TechStackComponent.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

ModuleComponent.propTypes = {
  module: PropTypes.shape({
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    lessons: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

LockedProjectOverlay.propTypes = {
  onPremiumClick: PropTypes.func.isRequired
};


// === LAYOUT COMPONENTS (now functional wrappers) ===
export const PageWrapper = ({ children, ...props }) => (
  <div className="bg-white min-h-screen" {...props}>{children}</div>
);

export const Container = ({ children, ...props }) => (
  <div className="max-w-[1200px] mx-auto px-8" {...props}>{children}</div>
);

export const HeaderSection = ({ children, ...props }) => (
  <section
    className="text-white py-8 pb-16"
    style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
    {...props}
  >
    {children}
  </section>
);

export const ContentSection = ({ children, ...props }) => (
  <section className="py-16 [&:has(.full-width-cta)]:pb-0" {...props}>{children}</section>
);

// === HERO COMPONENTS ===
export const BackLink = ({ children, as: Component = 'a' as React.ElementType, ...props }: { children: React.ReactNode; as?: React.ElementType; [key: string]: any }) => {
  return (
    <Component
      className="text-white/80 no-underline mb-8 inline-block transition-colors duration-300 ease-in-out hover:text-white"
      {...props}
    >
      {children}
    </Component>
  );
};

export const HeroContent = ({ children, ...props }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-md:text-center" {...props}>
    {children}
  </div>
);

export const HeroImage = ({ children, ...props }) => (
  <div className="flex justify-center" {...props}>{children}</div>
);

export const AppMockup = ({ ...props }) => (
  <img
    className="max-w-full h-auto max-h-[500px] rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
    {...props}
  />
);

export const HeroText = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

export const Badge = ({ children, ...props }) => (
  <div className="bg-white/20 py-2 px-4 rounded-[20px] inline-block mb-4 text-sm font-semibold" {...props}>
    {children}
  </div>
);

export const HeroTitle = ({ children, ...props }) => (
  <h1 className="text-5xl md:text-3xl font-black mb-6 leading-[1.2]" {...props}>{children}</h1>
);

export const GradientText = ({ children, ...props }) => (
  <span
    className="bg-clip-text text-transparent"
    style={{ backgroundImage: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)' }}
    {...props}
  >
    {children}
  </span>
);

export const HeroDescription = ({ children, ...props }) => (
  <p className="text-lg leading-relaxed mb-8 text-white/90" {...props}>{children}</p>
);

export const HeroStats = ({ children, ...props }) => (
  <div className="flex gap-8 mb-8 max-md:justify-center" {...props}>{children}</div>
);

export const Stat = ({ children, ...props }) => (
  <div className="flex items-center gap-2 text-white/90 [&>svg]:text-[#06b6d4]" {...props}>{children}</div>
);

export const CTAButton = ({ children, ...props }) => (
  <motion.button
    className="border-none rounded-full text-white text-lg font-semibold py-4 px-8 flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(59,130,246,0.4)]"
    style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)' }}
    {...props}
  >
    {children}
  </motion.button>
);

export const HeroButtonsContainer = ({ children, ...props }) => (
  <div className="flex gap-4 flex-wrap items-center max-md:flex-col max-md:items-stretch max-md:w-full max-md:[&>button]:justify-center max-md:[&>button]:text-base max-md:[&>button]:py-3.5 max-md:[&>button]:px-6" {...props}>
    {children}
  </div>
);

export const ContactButton = ({ children, ...props }) => (
  <motion.button
    className="border-2 border-white/20 rounded-full text-white text-lg max-md:text-[0.95rem] font-semibold py-4 px-8 flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(16,185,129,0.4)]"
    style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}
    {...props}
  >
    {children}
  </motion.button>
);

// === TAB NAVIGATION ===
export const TabNavigation = ({ children, ...props }) => (
  <section className="bg-white border-b border-[#e2e8f0] py-4 sticky top-0 z-50" {...props}>
    {children}
  </section>
);

export const TabList = ({ children, ...props }) => (
  <div className="flex gap-2 max-md:gap-1 overflow-x-auto py-2" {...props}>{children}</div>
);

export const Tab = ({ children, active, ...props }: { children: React.ReactNode; active?: boolean; [key: string]: any }) => (
  <button
    className={`rounded-md py-3 px-6 max-md:py-2 max-md:px-4 max-md:text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out whitespace-nowrap border ${
      active
        ? 'bg-[#667eea] text-white border-[#667eea]'
        : 'bg-transparent text-[#64748b] border-[#e2e8f0] hover:bg-[#f8fafc]'
    }`}
    {...props}
  >
    {children}
  </button>
);

export const TabContent = ({ children, ...props }) => (
  <motion.div {...props}>{children}</motion.div>
);

// === CONTENT SECTIONS ===
export const Section = ({ children, ...props }) => (
  <div className="mb-16" {...props}>{children}</div>
);

export const SectionTitle = ({ children, ...props }) => (
  <h2 className="text-3xl md:text-2xl font-bold mb-8 text-[#1e293b]" {...props}>{children}</h2>
);

// === CONCEPT CARDS ===
export const ConceptsGrid = ({ children, ...props }) => (
  <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6" {...props}>{children}</div>
);

export const ConceptCard = ({ children, ...props }) => (
  <div className="bg-white border border-[#e2e8f0] rounded-[15px] p-6 text-center transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]" {...props}>
    {children}
  </div>
);

export const ConceptIcon = ({ children, ...props }) => (
  <div
    className="w-[50px] h-[50px] rounded-xl flex items-center justify-center mx-auto mb-5 text-white text-xl"
    style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
    {...props}
  >
    {children}
  </div>
);

export const ConceptTitle = ({ children, ...props }) => (
  <h3 className="text-xl font-semibold mb-4 text-[#1e293b]" {...props}>{children}</h3>
);

export const ConceptDescription = ({ children, ...props }) => (
  <p className="text-[#64748b] leading-relaxed" {...props}>{children}</p>
);

// === FEATURES ===
export const FeaturesGrid = ({ children, ...props }) => (
  <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4" {...props}>{children}</div>
);

export const Feature = ({ children, ...props }) => (
  <div className="p-4 bg-[#f8fafc] rounded-[10px] font-medium text-[#475569]" {...props}>{children}</div>
);

// === TECH STACK (styled components replaced inline in TechStackComponent) ===
// TechStack, TechTitle, TechList, TechItem are used only by TechStackComponent above.

// === CURRICULUM ===
export const CurriculumSection = ({ children, ...props }) => (
  <div className="bg-[#f8fafc] rounded-[15px] p-8" {...props}>{children}</div>
);

export const ModuleList = ({ children, ...props }) => (
  <div className="flex flex-col gap-6" {...props}>{children}</div>
);

// === PROJECT SECTIONS ===
export const ProjectSection = ({ children, ...props }) => (
  <div className="relative" {...props}>{children}</div>
);

export const ProjectDescription = ({ children, ...props }) => (
  <div className="text-lg leading-[1.7] text-[#475569] mb-8" {...props}>{children}</div>
);

export const ProjectImage = ({ children, ...props }) => (
  <div className="text-center my-8 [&>img]:max-w-full [&>img]:h-auto [&>img]:rounded-[15px] [&>img]:shadow-[0_10px_30px_rgba(0,0,0,0.1)]" {...props}>
    {children}
  </div>
);

export const ProjectImageSmall = ({ children, ...props }) => (
  <div className="text-center my-8 [&>img]:max-w-[50%] [&>img]:max-h-[400px] [&>img]:h-auto [&>img]:rounded-[15px] [&>img]:shadow-[0_10px_30px_rgba(0,0,0,0.1)] [&>img]:object-contain max-md:[&>img]:max-w-[70%] max-md:[&>img]:max-h-[350px]" {...props}>
    {children}
  </div>
);

// === LOCKED CONTENT ===
export const LockedContentWrapper = ({ children, ...props }) => (
  <div className="relative" {...props}>{children}</div>
);

export const BlurredContent = ({ children, ...props }) => (
  <div className="blur-[1.5px] pointer-events-none opacity-[0.85]" {...props}>{children}</div>
);

// === COURSE CONTENT ===
export const CourseContainer = ({ children, ...props }) => (
  <div
    className="mt-4 bg-[#0f172a] py-8 max-md:py-4 relative min-h-[600px] max-md:min-h-[500px]"
    style={{
      marginLeft: 'calc(-50vw + 50%)',
      marginRight: 'calc(-50vw + 50%)',
      width: '100vw'
    }}
    {...props}
  >
    {children}
  </div>
);

export const CourseInnerWrapper = ({ children, ...props }) => (
  <div className="max-w-[1200px] mx-auto px-8 max-md:px-4 grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[280px_1fr] gap-6 max-md:gap-4" {...props}>
    {children}
  </div>
);

export const CourseSidebar = ({ children, ...props }) => (
  <div className="bg-[#1e293b] rounded-md p-6 h-fit border border-[#334155] max-md:order-3" {...props}>
    {children}
  </div>
);

export const CourseMainContent = ({ children, ...props }) => (
  <div className="bg-[#1e293b] rounded-md p-8 border border-[#334155] max-lg:order-1 max-md:order-1" {...props}>
    {children}
  </div>
);

export const SectionList = ({ children, ...props }) => (
  <div className="flex flex-col gap-2" {...props}>{children}</div>
);

export const SectionItem = ({ children, active, ...props }: { children: React.ReactNode; active?: boolean; [key: string]: any }) => (
  <button
    className={`rounded-md py-3 px-4 text-left cursor-pointer transition-all duration-200 ease-in-out font-medium border ${
      active
        ? 'bg-[#3b82f6] text-white border-[#3b82f6] hover:bg-[#2563eb]'
        : 'bg-[#0f172a] text-[#e2e8f0] border-[#475569] hover:bg-[#334155] hover:border-[#3b82f6] hover:text-white'
    }`}
    {...props}
  >
    {children}
  </button>
);

export const CodeBlock = ({ children, ...props }) => (
  <pre
    className="bg-[#0f172a] text-[#e2e8f0] p-6 rounded-md overflow-x-auto font-mono text-sm leading-relaxed border border-[#334155] [&>.comment]:text-[#64748b] [&>.keyword]:text-[#60a5fa] [&>.string]:text-[#34d399]"
    {...props}
  >
    {children}
  </pre>
);

export const SidebarTitle = ({ children, ...props }) => (
  <h4 className="text-lg font-semibold text-[#f1f5f9] mb-4" {...props}>{children}</h4>
);

export const VideoContainer = ({ children, ...props }) => (
  <div className="mb-8 relative" {...props}>{children}</div>
);

export const VideoWrapper = ({ children, ...props }) => (
  <div
    className="relative w-full h-[250px] max-md:h-[200px] rounded-md border border-[#334155] flex items-center justify-center mb-4 overflow-hidden"
    style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}
    {...props}
  >
    {/* Decorative radial gradients */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)'
      }}
    />
    {children}
  </div>
);

export const VideoPlaceholder = ({ children, ...props }) => (
  <div className="text-[#64748b] text-center relative z-[1] p-8 [&>svg]:text-5xl [&>svg]:mb-4 [&>svg]:text-[#06b6d4] [&>svg]:drop-shadow-[0_0_10px_rgba(6,182,212,0.3)] [&>p]:m-0 [&>p]:text-sm [&>p]:font-medium [&>.duration]:inline-block [&>.duration]:bg-[rgba(6,182,212,0.2)] [&>.duration]:text-[#06b6d4] [&>.duration]:py-1 [&>.duration]:px-3 [&>.duration]:rounded-2xl [&>.duration]:text-xs [&>.duration]:mt-2 [&>.duration]:border [&>.duration]:border-[rgba(6,182,212,0.3)]" {...props}>
    {children}
  </div>
);

export const MainContentTitle = ({ children, ...props }) => (
  <h4 className="text-xl font-semibold text-[#f1f5f9] mb-6" {...props}>{children}</h4>
);

export const LessonSection = ({ children, ...props }) => (
  <div className="mb-8" {...props}>{children}</div>
);

export const ContentItem = ({ children, ...props }) => (
  <div className="bg-[#0f172a] border border-[#334155] rounded-md p-4 mb-4 [&>h5]:text-[#e2e8f0] [&>h5]:font-semibold [&>h5]:mb-2 [&>h5]:text-base [&>p]:text-[#94a3b8] [&>p]:m-0 [&>p]:text-sm [&>p]:leading-relaxed" {...props}>
    {children}
  </div>
);

export const FinalCodeButton = ({ children, active, ...props }: { children: React.ReactNode; active?: boolean; [key: string]: any }) => (
  <button
    className={`absolute top-4 right-4 rounded-md py-2 px-4 text-sm font-semibold cursor-pointer transition-all duration-200 ease-in-out flex items-center gap-2 z-10 border [&>svg]:text-sm hover:-translate-y-px ${
      active
        ? 'bg-[#06b6d4] text-[#0f172a] border-[#06b6d4] hover:bg-[#0891b2]'
        : 'bg-[#1e293b] text-[#e2e8f0] border-[#334155] hover:bg-[#334155]'
    }`}
    {...props}
  >
    {children}
  </button>
);

// === CTA SECTIONS ===
export const CTASectionFullWidth = ({ children, ...props }) => (
  <section
    className="py-16 text-center text-white relative [&>h2]:text-white [&>h2]:mb-4 [&_p]:text-white/90 [&_p]:opacity-100"
    style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      marginLeft: 'calc(-50vw + 50%)',
      marginRight: 'calc(-50vw + 50%)',
      width: '100vw'
    }}
    {...props}
  >
    {children}
  </section>
);

export const FullWidthCTAWrapper = ({ children, className, ...props }) => (
  <div className={`mt-12 [&.full-width-cta]:mb-0 ${className || ''}`} {...props}>{children}</div>
);

export const CTAContainer = ({ children, ...props }) => (
  <div className="flex justify-center mt-8" {...props}>{children}</div>
);


// === ADVANCED FEATURES SECTION ===
export const AdvancedFeaturesSection = ({ children, ...props }) => (
  <section
    className="py-16 relative overflow-hidden"
    style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      marginLeft: 'calc(-50vw + 50%)',
      marginRight: 'calc(-50vw + 50%)',
      width: '100vw'
    }}
    {...props}
  >
    {/* Decorative radial gradients */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)'
      }}
    />
    {children}
  </section>
);

export const AdvancedFeaturesContainer = ({ children, ...props }) => (
  <div className="max-w-[1200px] mx-auto px-8 relative z-[1]" {...props}>{children}</div>
);

export const AdvancedSectionTitle = ({ children, ...props }) => (
  <h2
    className="text-[2.5rem] max-md:text-[2rem] font-black text-center mb-4 bg-clip-text text-transparent"
    style={{ backgroundImage: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #8b5cf6 100%)' }}
    {...props}
  >
    {children}
  </h2>
);

export const AdvancedSectionSubtitle = ({ children, ...props }) => (
  <p className="text-xl max-md:text-lg text-center text-[#94a3b8] mb-12 max-md:mb-8 max-w-[600px] mx-auto leading-relaxed" {...props}>
    {children}
  </p>
);

export const AdvancedFeaturesGrid = ({ children, ...props }) => (
  <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 max-md:gap-6" {...props}>
    {children}
  </div>
);

export const AdvancedFeatureCard = ({ children, ...props }) => (
  <motion.div
    className="rounded-[20px] p-8 text-center relative overflow-hidden transition-all duration-400 ease-in-out cursor-pointer border border-[#475569] hover:-translate-y-2 hover:scale-[1.02] hover:border-[#3b82f6] hover:shadow-[0_20px_40px_rgba(59,130,246,0.2),0_0_80px_rgba(6,182,212,0.1)] group"
    style={{ background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' }}
    {...props}
  >
    {/* Hover overlay */}
    <div
      className="absolute inset-0 opacity-0 transition-opacity duration-400 ease-in-out pointer-events-none group-hover:opacity-100"
      style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.05) 50%, rgba(139, 92, 246, 0.1) 100%)' }}
    />
    {children}
  </motion.div>
);

export const AdvancedFeatureIcon = ({ children, ...props }) => (
  <div
    className="w-20 h-20 rounded-[20px] flex items-center justify-center mx-auto mb-6 text-[2rem] relative overflow-hidden group-hover:[&::before]:opacity-100 group-hover:[&::before]:translate-x-full group-hover:[&::before]:translate-y-full"
    style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)' }}
    {...props}
  >
    {children}
  </div>
);

export const AdvancedFeatureTitle = ({ children, ...props }) => (
  <h3 className="text-[1.375rem] font-bold mb-4 text-[#f1f5f9] relative z-[1]" {...props}>{children}</h3>
);

export const AdvancedFeatureDescription = ({ children, ...props }) => (
  <p className="text-[#cbd5e1] leading-relaxed text-base relative z-[1]" {...props}>{children}</p>
);

export const AdvancedFeatureBadge = ({ children, ...props }) => (
  <div
    className="absolute top-4 right-4 text-white py-1 px-3 rounded-[15px] text-xs font-semibold uppercase tracking-wide"
    style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)' }}
    {...props}
  >
    {children}
  </div>
);

// Component for the advanced features section
export const AdvancedFeaturesComponent = ({ features }) => (
  <AdvancedFeaturesSection>
    <AdvancedFeaturesContainer>
      <AdvancedSectionTitle>{"\u2728"} Fonctionnalites avancees que vous maitriserez</AdvancedSectionTitle>
      <AdvancedSectionSubtitle>
        Developpez des competences de niveau professionnel en implementant ces fonctionnalites
        innovantes qui distinguent votre application sur le marche
      </AdvancedSectionSubtitle>
      <AdvancedFeaturesGrid>
        {features.map((feature, index) => (
          <AdvancedFeatureCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <AdvancedFeatureBadge>Pro</AdvancedFeatureBadge>
            <AdvancedFeatureIcon>
              {feature.icon}
            </AdvancedFeatureIcon>
            <AdvancedFeatureTitle>{feature.title}</AdvancedFeatureTitle>
            <AdvancedFeatureDescription>{feature.description}</AdvancedFeatureDescription>
          </AdvancedFeatureCard>
        ))}
      </AdvancedFeaturesGrid>
    </AdvancedFeaturesContainer>
  </AdvancedFeaturesSection>
);

// PropTypes
AdvancedFeaturesComponent.propTypes = {
  features: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
};

// === SCREENSHOT GALLERY COMPONENT ===
export const ScreenshotGalleryComponent = ({ screenshots }) => (
  <div className="my-16">
    <h3
      className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent"
      style={{ backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
    >
      {"\u{1F4F1}"} Apercu de l&apos;application
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 max-md:gap-6">
      {screenshots.map((screenshot, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_8px_30px_rgba(102,126,234,0.2)]"
        >
          <div
            className="w-full overflow-hidden relative"
            style={{ aspectRatio: '9 / 16', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}
          >
            <img
              className="w-full h-full object-cover block"
              src={screenshot.url}
              alt={screenshot.title}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="400" viewBox="0 0 200 400"%3E%3Crect width="200" height="400" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-family="Arial" font-size="16"%3E' + screenshot.title + '%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>
          <div className="p-6">
            <h4 className="text-lg font-semibold text-[#1e293b] mb-2">{screenshot.title}</h4>
            <p className="text-sm text-[#64748b] leading-relaxed">{screenshot.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

ScreenshotGalleryComponent.propTypes = {
  screenshots: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
};
