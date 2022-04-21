import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Proxima Nova", "sans-serif", "Gilroy"].join(","),
  },
  palette: {
    primary: {
      main: "#2398AB",
    },
    error: {
      main: "#000",
    },
  },
});

export default createTheme;
