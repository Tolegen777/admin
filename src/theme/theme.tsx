import { createTheme } from "@mui/material";

// Custom Modules
declare module "@mui/material/styles" {
  interface TypographyVariants {
    poster: React.CSSProperties;
    h16r: React.CSSProperties;
    h18r: React.CSSProperties;
    h20r: React.CSSProperties;
    h24r: React.CSSProperties;

    h16b: React.CSSProperties;
    h18b: React.CSSProperties;
    h20b: React.CSSProperties;
    h24b: React.CSSProperties;

    h16eb: React.CSSProperties;
    h18eb: React.CSSProperties;
    h20eb: React.CSSProperties;
    h24eb: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
    h16r?: React.CSSProperties;
    h18r?: React.CSSProperties;
    h20r?: React.CSSProperties;
    h24r?: React.CSSProperties;

    h16b?: React.CSSProperties;
    h18b?: React.CSSProperties;
    h20b?: React.CSSProperties;
    h24b?: React.CSSProperties;

    h16eb?: React.CSSProperties;
    h18eb?: React.CSSProperties;
    h20eb?: React.CSSProperties;
    h24eb?: React.CSSProperties;
  }

  interface BreakpointOverrides {
    "2xl": true;
    "3xl": true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true; // can use new custom type of Typography
    h16r: true;
    h18r: true;
    h20r: true;
    h24r: true;

    h16b: true;
    h18b: true;
    h20b: true;
    h24b: true;

    h16eb: true;
    h18eb: true;
    h20eb: true;
    h24eb: true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: ["Proxima Nova", "sans-serif", "Gilroy"].join(","),

    // regular - 400
    h16r: {
      fontSize: "clamp(12px, 0.83vw, 16px)",
      fontWeight: 400,
      color: "#2398AB",
    },
    h18r: {
      fontSize: "clamp(14px, 0.9375vw, 18px)",
      fontWeight: 400,
      color: "#2398AB",
    },
    h20r: {
      fontSize: "clamp(16px, 1.04vw, 20px)",
      fontWeight: 400,
      color: "#2398AB",
    },
    h24r: {
      fontSize: "clamp(15px, 1.25vw, 24px)",
      fontWeight: 400,
      color: "#2398AB",
    },

    // bold - 600
    h16b: {
      fontSize: "clamp(12px, 0.83vw, 16px)",
      fontWeight: 600,
      color: "#2398AB",
    },
    h18b: {
      fontSize: "clamp(14px, 0.9375vw, 18px)",
      fontWeight: 600,
      color: "#2398AB",
    },
    h20b: {
      fontSize: "clamp(16px, 1.04vw, 20px)",
      fontWeight: 600,
      color: "#2398AB",
    },
    h24b: {
      fontSize: "clamp(15px, 1.25vw, 24px)",
      fontWeight: 600,
      color: "#2398AB",
    },

    // extraBold - 800
    h16eb: {
      fontSize: "clamp(12px, 0.83vw, 16px)",
      fontWeight: 800,
      color: "#2398AB",
    },
    h18eb: {
      fontSize: "clamp(14px, 0.9375vw, 18px)",
      fontWeight: 800,
      color: "#2398AB",
    },
    h20eb: {
      fontSize: "clamp(16px, 1.04vw, 20px)",
      fontWeight: 800,
      color: "#2398AB",
    },
    h24eb: {
      fontSize: "clamp(15px, 1.25vw, 24px)",
      fontWeight: 800,
      color: "#2398AB",
    },

    // other
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
