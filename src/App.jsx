import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Page from './components/Page';
import MarqueeComponent from './components/Marquee/Marquee';
import ReplenishmentPage from './pages/ReplenishmentPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeaderProvider from './providers/HeaderProvider';
import NavigationProvider from './providers/NavigationProvider';
import Footer from './components/Footer/Footer';
import Faq from './pages/Faq/Faq';
import '@radix-ui/themes/styles.css';

const theme = createTheme({
  breakpoints: {
    values: {
      all: 0,
      xs: 640,
      sm: 768,
      md: 900,
      lg: 1024,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
  },
  palette: {
    tertiary: {
      main: '#4F5562',
    },
    dark_bg: {
      main: '#21242B',
    },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          background: '#21242B',
          borderRadius: 8,
          padding: 20,
          boxShadow: 'none',
          '&.Mui-expanded': {
            margin: '0',
          },
        },
      },
    },

    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          justifyContent: 'space-between',
          padding: 0,
          paddingTop: 2,
          minHeight: 'auto',
          gap: 50,
          '&.Mui-expanded': {
            minHeight: 'auto',
          },
        },
      },
      defaultProps: {
        component: 'div',
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          color: '#858892',
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: 'Inter, sans-serif',
          backgroundColor: '#2F333D',
          fontSize: 13,
          fontWeight: 400,
          padding: '8px 12px',
          borderRadius: '8px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&': {
            fontFamily: 'Inter, sans-serif',
            borderColor: 'transparent',
            borderWidth: '2px',
            transition: '0.3s',
          },

          '&:hover': {
            borderColor: '#7B58E8',
            borderWidth: '2px',
            transition: '0.3s',
            background: '#2F333D',
            color: '#858892',
          },

          '.MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-notchedOutline:hover':
            {
              borderColor: 'transparent',
            },

          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#7B58E8',
            borderWidth: '2px',
            transition: '0.3s',
          },

          '&.Mui-focused': {
            color: 'white',
            background: 'rgba(33, 36, 43, 1)',
          },
          '&.Mui-focused .Mui-error': {
            borderColor: '#7B58E8!important',
            borderWidth: '2px',
            transition: '0.3s',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
            borderWidth: '2px',
            transition: '0.3s',
          },
          '&:hover &.Mui-error': {
            borderColor: '#7B58E8',
            borderWidth: '2px',
            transition: '0.3s',
          },
          '&.Mui-error:hover &.Mui-error': {
            borderColor: 'transparent',
            borderWidth: '2px',
            transition: '0.3s',
          },

          '&.Mui-error fieldset': {
            borderColor: 'transparent',
            borderWidth: '2px',
            transition: '0.3s',
          },
        },
        input: {
          padding: 20,

          sm: {
            padding: '10px 16px',
            fontSize: '100px',
          },
        },
      },
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationProvider>
        <HeaderProvider>
          <Page>
            <Header />
            <MarqueeComponent />
            <main className="main">
              <Routes>
                <Route path={'/'} element={<ReplenishmentPage />} />
                <Route path={'/faq'} element={<Faq />} />
              </Routes>
            </main>
            <Footer />
          </Page>
        </HeaderProvider>
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default App;
