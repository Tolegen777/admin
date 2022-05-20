import { Button, ButtonProps, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { alpha } from "@mui/material";

export const MainButton = styled((props: ButtonProps) => <Button {...props} />)(
  ({ theme }) => ({
    width: "100%",
    height: "50px",
    backgroundColor: "#2398AB",
    borderRadius: "5px",
    fontSize: "20px",
    fontWeight: 600,
    color: "#FFF",
    justifyContent: "flex-start",
    textTransform: "capitalize",

    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    "&:focus, &:hover": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.9)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
      color: "#2398AB",
      backgroundColor: theme.palette.primary.light,
    },
  })
);

export const SecondaryButton = styled((props: ButtonProps) => (
  <Button {...props} />
))(({ theme }) => ({
  width: "100%",
  height: "50px",
  backgroundColor: "#E4FFF9",
  borderRadius: "5px",
  fontSize: "20px",
  fontWeight: 600,
  color: "#2398AB",
  justifyContent: "flex-start",
  paddingLeft: "25px",
  textTransform: "capitalize",

  "&:hover": {
    color: "#FFF",
    backgroundColor: "#2398AB",
  },
}));

export const WarningButton = styled((props: ButtonProps) => (
  <Button {...props} />
))(({ theme }) => ({
  width: "100%",
  height: "50px",
  backgroundColor: "#FFEFEF",
  borderRadius: "5px",
  fontSize: "20px",
  fontWeight: 400,
  color: "#FD4444",
  justifyContent: "flex-start",
  textTransform: "capitalize",

  "&:hover": {
    color: "#FFF",
    backgroundColor: "#FD4444",
  },
}));
