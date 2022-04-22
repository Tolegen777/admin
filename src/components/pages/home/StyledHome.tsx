import { Paper } from "@mui/material";

export const StyledPaper = (props: any) => (
  <Paper
    sx={{
      height: "375px",
      color: "primary.main",
      borderRadius: "20px",
      fontSize: "24px",
      paddingTop: "25px",
      paddingLeft: "30px",
    }}
    {...props}
  />
);
