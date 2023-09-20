import "../src/styles/global.css";
import { ThemeProvider } from "@mui/material";
import theme from "@/styles/theme";
import { ParallaxProvider } from "react-scroll-parallax";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </ThemeProvider>
  );
}
