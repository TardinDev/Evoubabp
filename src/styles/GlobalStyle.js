import { createGlobalStyle } from 'styled-components';

// Global responsive styles applied across the app
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-height: 100vh;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    background: #F8F7F1;
  }

  /* Media elements scale to container */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* Typography defaults and fluid headings */
  h1 { font-size: clamp(1.75rem, 2.2vw + 1.2rem, 2.75rem); }
  h2 { font-size: clamp(1.5rem, 1.8vw + 1rem, 2.25rem); }
  h3 { font-size: clamp(1.25rem, 1.4vw + 0.9rem, 1.75rem); }
  h4, h5, h6 { line-height: 1.25; }
  p { line-height: 1.6; }

  /* Utility container: centers content and limits width */
  .container-responsive {
    width: 100%;
    max-width: 1280px;
    margin-inline: auto;
    padding-inline: clamp(1rem, 3vw, 2rem);
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyle;

