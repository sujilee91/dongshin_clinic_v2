import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const customTheme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
    fontFamily: [
        'Black Han Sans',
        'Gothic A1',
        'Nanum Gothic',
        'Nanum Myeongjo',
        'serif',
        'sans-serif',
        'Do Hyeon',
      ].join(','),
    h1: {
      fontFamily: ['Gothic A1'],
      fontSize: 110,
      fontWeight: 700,
      lineHeight: 1.04,
      letterSpacing: 0
    },
    h2: {
      fontFamily: ['Do Hyeon'],
      fontSize: 45,
      fontWeight: 500,
      lineHeight: 1.04,
      letterSpacing: 0
    },
    h3:{
      fontFamily: ['Nanum Myeongjo'],
      fontSize: 27,
      fontWeight: 700,
      lineHeight: 1.04,
      letterSpacing: 0
    },
    h4: {
      fontFamily: ['Hind Vadodara'],
      fontSize: 28,
      fontWeight: 800,
      lineHeight: 1.04,
      letterSpacing: 0
    },
    h5: {
      fontFamily: ['Do Hyeon'],
      fontSize: 35,
      fontWeight: 500,
      letterSpacing: 0,
      paddingTop: 20,
      color: '#046BD1'
    },
    h6: {
      fontFamily: ['Black Han Sans'],
      fontSize: 32,
      fontWeight: 500,
      letterSpacing: 0,
      color: '#999797',
    },
    body1: {
      fontFamily: ['Nanum Myeongjo'],
      fontSize: 18,
      fontWeight: 300,
    },
    body2: {
      fontFamily: ['Gothic A1'],
      fontSize: 18,
      fontWeight: 300,
    },
    button: {
      fontFamily: ['Do Hyeon'],
      fontWeight: '500',
      fontSize: 20,
    },
    caption: {
      fontFamily: ['Do Hyeon'],
      fontSize: 35,
      fontWeight: 500,
      letterSpacing: 0,
      paddingTop: 20,
      color: '#043E77'
    },
    subtitle2: {
      fontFamily: ['Do Hyeon'],
      fontSize: 25,
      fontWeight: 500,
      lineHeight: 1.04,
      letterSpacing: 0,
      paddingTop: 20
    },
    subtitle1: {
      fontFamily: ['Do Hyeon'],
      fontWeight: 500,
      fontSize: 15,
    },
    overline: {
      fontFamily: ['Nanum Myeongjo'],
      fontSize: 10,
      fontWeight: 500,
      lineHeight: 1.04,
      letterSpacing: 0
    }
  },
  palette: {
    primary: { 
        main: '#046BD1', 
        contrastText: '#fff',
        text: '#0000',
        dark: '#043E77'
    },
    // secondary: { 
    //     main: secondaryColor, 
    //     contrastText: '#fff',
    //     light: '#E3E3E3' 
    // }
  }
});

export default customTheme