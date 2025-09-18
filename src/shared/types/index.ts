// Common types for the application

export interface FormationCardProps {
  icon: React.ComponentType<any>;
  title: string;
  text: string;
  countdown: string;
  index: number;
  navigateUrl: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  technologies: string[];
  isPremium: boolean;
  formation: string;
}

export interface MotionVariants {
  hidden: any;
  show: any;
}

export interface FadeInProps {
  direction: 'up' | 'down' | 'left' | 'right';
  type: 'spring' | 'tween';
  delay: number;
  duration: number;
}

export interface StaggerContainerProps {
  staggerChildren: number;
  delayChildren: number;
}