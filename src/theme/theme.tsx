import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    poster: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }

  interface BreakpointOverrides {
    "2xl": true;
    "3xl": true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: ["Proxima Nova", "sans-serif", "Gilroy"].join(","),

    h3: {
      fontSize: "clamp(30px, 45vw, 42px)",
      fontWeight: 800,
      background: "red",
      width: "clamp(200px, 30vw, 1000px)",
      color: "#2398AB",
      letterSpacing: "0em",
    },
  },
  palette: {
    primary: {
      main: "#2398AB",
      light: "#E4FFF9",
    },
    error: {
      main: "#000",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
      "3xl": 1920,
    },
  },
});

export default createTheme;
