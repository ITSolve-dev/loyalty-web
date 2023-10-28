import { createTheme, darken, getContrastRatio, lighten } from '@mui/material/styles';
import { NextFont } from 'next/dist/compiled/@next/font';
import localFont from 'next/font/local';

declare module '@mui/material/styles' {
  interface AvatarOptions {
    small: number;
    medium: number;
    large: number;
  }

  interface Theme {
    status: {
      danger: string;
    };
    avatar: AvatarOptions;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
    avatar: AvatarOptions;
  }
}

const SanFranciscoFont: NextFont = localFont({
  src: [
    {
      path: '../../assets/fonts/SFProDisplay-Thin.woff2',
      weight: '100',
    },
    {
      path: '../../assets/fonts/SFProDisplay-Ultralight.woff2',
      weight: '200',
    },
    {
      path: '../../assets/fonts/SFProDisplay-Light.woff2',
      weight: '300',
    },
    {
      path: '../../assets/fonts/SFProDisplay-Regular.woff2',
      weight: '400',
    },
    {
      path: '../../assets/fonts/SFProDisplay-Medium.woff2',
      weight: '500',
    },
    {
      path: '../../assets/fonts/SFProDisplay-Semibold.woff2',
      weight: '600',
    },
    {
      path: '../../assets/fonts/SFProDisplay-Bold.woff2',
      weight: '700',
    },
    {
      path: '../../assets/fonts/SFProDisplay-Heavy.woff2',
      weight: '800',
    },
    {
      path: '../../assets/fonts/SFProDisplay-Black.woff2',
      weight: '900',
    },
  ],
  display: 'swap',
  style: 'normal',
  variable: '--font-default',
});

const primaryBase = '#262526';
const secondaryBase = '#F2EEB6';
const successBase = '#c5c295';
const warningBase = '#A6A6A6';
const errorBase = '#A65221';
const infoBase = '#0288d1';

const getColorOptions = (color: string, coefficient: number = 0.2): object => ({
  main: color,
  light: lighten(color, coefficient),
  dark: darken(color, coefficient),
  contrastText: getContrastRatio(color, '#fff') > 4.5 ? '#fff' : '#111',
});

const theme = createTheme({
  palette: {
    primary: getColorOptions(primaryBase),
    secondary: getColorOptions(secondaryBase),
    success: getColorOptions(successBase),
    warning: getColorOptions(warningBase),
    error: getColorOptions(errorBase),
    info: getColorOptions(infoBase),
    background: {
      paper: '#E7E7E7',
    },
  },
  shape: {
    borderRadius: 20,
  },
  typography: {
    fontSize: 16,
    fontFamily: SanFranciscoFont.style.fontFamily,
    h4: {
      fontSize: '1.25rem',
      fontWeight: '600',
    },
  },
  spacing: 2,
  avatar: {
    small: 32,
    medium: 66,
    large: 100,
  },
});

export default theme;
