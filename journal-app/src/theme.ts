import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F5E5C0',
      light: '#ECDDB8',
      dark: '#A89D83',
      contrastText: '#4A2C22',
    },
    secondary: {
      main: '#A67B5B',
      light: '#E1A87C',
      dark: '#594231',
      contrastText: '#1F1F1F',
    },
    background: {
      default: '#FBF8F4', // Soft beige background for the app
      paper: '#FFF7E8', // Paper-like background for cards/dialogs
    },
    text: {
      primary: '#4A2C22', // Primary text color for readability
      secondary: '#594231', // Muted text color for subtitles or secondary content
      disabled: '#A89D83', // Subtle color for disabled text
      
    },
    divider: '#DCCAB0', // Divider color for subtle separations
    error: {
      main: '#D72638', // Vivid red for error states
    },
    warning: {
      main: '#F5A623', // Warm yellow for warnings
    },
    info: {
      main: '#63ADF2', // Soft blue for informational elements
    },
    success: {
      main: '#5BB974', // Warm green for success
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#4A2C22',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#4A2C22',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#594231',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#4A2C22',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: '#594231',
    },
    button: {
      textTransform: 'none', // Avoid uppercase text on buttons
      fontWeight: 600,
      fontSize: '1rem',
      color: '#FFF7E8',
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.3,
      color: '#A89D83',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#594231',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.4,
      color: '#A89D83',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Softer rounded corners for buttons
          padding: '8px 16px',
          textTransform: 'none',
          boxShadow: 'none',
          ':hover': {
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px', // Rounded corners for cards
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#FFF7E8',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#A67B5B',
          color: '#FFF7E8',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFF7E8',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            backgroundColor: '#FBF8F4',
            ':hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#A67B5B',
            },
          },
        },
      },
    },
  },
});

export default theme;
