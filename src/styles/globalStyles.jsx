

  const globalStyles = {
    bgPrimary: {
      background: '#F8F7F1'
    },
    innerWidth: {
      width: '100%',
      '@media (min-width: 1280px)': {
        maxWidth: '1280px',
        margin: 'auto'
      }
    },
    paddings: {
      padding: '1.5rem',
      '@media (min-width: 640px)': {
        padding: '4rem'
      },
      '@media (min-width: 768px), (min-width: 1280px)': {
        paddingTop: '2rem',
        paddingBottom: '2rem'
      }
    },
    xPaddings: {
      padding: '1.5rem',
      '@media (min-width: 640px)': {
        paddingLeft: '4rem',
        paddingRight: '4rem'
      }
    },
    yPaddings: {
      padding: '3rem',
      '@media (min-width: 640px)': {
        paddingTop: '4rem',
        paddingBottom: '4rem'
      },
      '@media (min-width: 1280px)': {
        paddingTop: '2rem',
        paddingBottom: '2rem'
      }
    },
    topPaddings: {
      paddingTop: '3rem',
      '@media (min-width: 640px)': {
        paddingTop: '4rem'
      },
      '@media (min-width: 1280px)': {
        paddingTop: '2rem'
      }
    },
    bottomPaddings: {
      paddingBottom: '3rem',
      '@media (min-width: 640px)': {
        paddingBottom: '4rem'
      },
      '@media (min-width: 1280px)': {
        paddingBottom: '2rem'
      }
    },
    flexCenter: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    flexStart: {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center'
    },
    flexEnd: {
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'center'
    },
    primaryText: {
      fontSize: '3rem',
      fontWeight: 'bold',
      '@media (max-width: 640px)': {
        fontSize: '2.5rem'
      }
    },
    secondaryText: {
      fontSize: '1.3rem',
      fontWeight: '500',
      lineHeight: '50px',
      '@media (max-width: 640px)': {
        fontSize: '1.1rem',
        lineHeight: '40px'
      }
    },
    anchor: {
      display: 'block',
      position: 'relative',
      top: '-100px',
      visibility: 'hidden'
    }
  };
  
  export default globalStyles;
  
