import { createTheme } from "@mui/material";

// Custom Modules
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
    poster: true; // can use new custom type of Typography
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: ["Proxima Nova", "sans-serif", "Gilroy"].join(","),
    
    h3: {
      fontSize: "clamp(15px, 1.25vw, 24px)",
      fontWeight: 600,
      color: "#2398AB",
    },
    h4: {
      fontSize: "20px",
      fontWeight: 600,
      color: "#2398AB",
    },
    h5: {
      fontSize: "16px",
      color: "#2398AB",
      fontWeight: 400,
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
