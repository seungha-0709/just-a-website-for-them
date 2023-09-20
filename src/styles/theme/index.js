import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6d342e",
      light: "#9b5c46",
      dark: "#15130F",
      contrastText: "#DFD5C5",
    },
    secondary: {
      main: "#EAD7BB",
      light: "#DFD5C5",
      dark: "#D7B98C",
      contrastText: "#15130F",
    },
  },
  typography: {
    fontFamily: "Pretendard",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Pretendard';
          font-style: normal;
          font-display: swap;
          font-weight: 800;
          src: url("/fonts/Pretendard-Black.subset.woff")) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
            font-family: 'Pretendard';
            font-style: normal;
            font-display: swap;
            font-weight: 700;
            src: url("/fonts/Pretendard-ExtraBold.subset.woff")) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
            font-family: 'Pretendard';
            font-style: normal;
            font-display: swap;
            font-weight: 600;
            src: url("/fonts/Pretendard-Bold.subset.woff")) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
          @font-face {
            font-family: 'Pretendard';
            font-style: normal;
            font-display: swap;
            font-weight: 500;
            src: url("/fonts/Pretendard-SemiBold.subset.woff")) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
          @font-face {
            font-family: 'Pretendard';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: url("/fonts/Pretendard-Medium.subset.woff")) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
          @font-face {
            font-family: 'Pretendard';
            font-style: normal;
            font-display: swap;
            font-weight: 300;
            src: url("/fonts/Pretendard-Regular.subset.woff")) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
          @font-face {
            font-family: 'Pretendard';
            font-style: normal;
            font-display: swap;
            font-weight: 200;
            src: url("/fonts/Pretendard-Light.subset.woff")) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
      `,
    },
  },
});

export default theme;
