import { Paper, Typography } from "@mui/material";

export const StyledUsers = (props: any) => (
  <Paper
    sx={{
      height: "150px",
      color: "primary.main",
      borderRadius: "10px",
      paddingTop: "20px",
      paddingLeft: "25px",
      paddingRight: "25px",
    }}
    {...props}
  />
);
export const StyledText = (props: any) => (
  <Typography
    sx={{
      color: "primary.main",
      fontSize: "20px",
      mb: "15px",
    }}
    {...props}
  />
);
