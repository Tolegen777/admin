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

// CustomTheme
export interface CustomTheme {
  bg: {
    main: string;
    light: string;
  };
  text: {
    main: string;
    light: string;
  };
}

export const theme = createTheme({
  typography: {
    fontFamily: ["Proxima Nova", "sans-serif", "Gilroy"].join(","),

    // poster: {
    //   fontSize: "10px",
    // },
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

  //custom theme variables
  bg: {
    main: "#fff",
    light: "#F4F5F7",
  },
  text: {
    main: "#172B4D",
    light: "#262930",
  },
});

export default createTheme;
