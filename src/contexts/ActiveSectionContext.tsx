import { createContext, useContext, ReactNode } from 'react';

interface ActiveSectionContextType {
  activeSection: string;
  activeColor: string;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

export const ActiveSectionProvider = ({
  children,
  value
}: {
  children: ReactNode;
  value: ActiveSectionContextType
}) => {
  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);
  if (context === undefined) {
    throw new Error('useActiveSectionContext must be used within an ActiveSectionProvider');
  }
  return context;
};
