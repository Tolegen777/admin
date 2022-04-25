import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Proxima Nova", "sans-serif", "Gilroy"].join(","),
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
});

export default createTheme;
