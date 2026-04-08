import ReactGA from 'react-ga4';

/**
 * Initialise Google Analytics avec votre ID de mesure
 */
export const initGA = (measurementId: string) => {
  if (measurementId) {
    ReactGA.initialize(measurementId);
  }
};

/**
 * Enregistre une page vue
 */
export const logPageView = () => {
  if (typeof window === 'undefined') return;
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
};

/**
 * Enregistre un événement personnalisé
 */
export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
