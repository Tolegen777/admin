import { StayPrimaryLandscape } from "@mui/icons-material";
import { Paper } from "@mui/material";
import { palette, styled } from "@mui/system";

export const StyledPaper = styled((props: any) => (
  <Paper {...props}>{props.children}</Paper>
))(({ theme }) => ({
  height: "clamp(320px, 26.04vw, 500px)",
  color: theme.palette.primary.main,
  borderRadius: "20px",
  fontSize: "24px",
  paddingLeft: "30px",
  overflow: "hidden",
}));
