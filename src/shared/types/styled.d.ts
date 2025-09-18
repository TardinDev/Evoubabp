import 'styled-components';
import { MotionProps } from 'framer-motion';

declare module 'styled-components' {
  export interface DefaultTheme {}
}

// Extend motion components to accept custom props
declare module 'framer-motion' {
  interface MotionProps {
    colorScheme?: {
      primary: string;
      secondary: string;
      accent: string;
    };
    clickable?: boolean;
    selected?: boolean;
    [key: string]: any;
  }
}

// Global custom props for styled components
export interface CustomStyledProps {
  colorScheme?: {
    primary: string;
    secondary: string;
    accent: string;
  };
  clickable?: boolean;
  selected?: boolean;
  active?: boolean;
}