import { teal, deepPurple } from '@mui/material/colors';
import { light } from '@mui/material/styles/createPalette';


const PALETTE = {
  palette: {
    background: {
      default: '#16161a',
    },
    common: {
      transparent: 'rgba(255, 255, 255, 0.001)',
      black: '#000000',
      white: '#FFFFFF',
    },
    text: {
      primary: '#f5f5f5',
      secondary: '#e0e0e0',
    },
    primary: {
      light: deepPurple[300],
      main: deepPurple[400],
      dark: deepPurple[500],
    },
    secondary: {
      light: teal[200],
      main: teal[400],
      dark: teal[600],
    },
  },
};

export default PALETTE;
