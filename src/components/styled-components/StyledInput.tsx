import { NoEncryptionTwoTone } from "@mui/icons-material";
import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledInput = styled((props: TextFieldProps) => (
  <TextField variant="outlined" fullWidth hiddenLabel {...props} />
))(({ theme }) => ({
  backgroundColor: "#E4FFF9",
  borderRadius: "5px",

  "& fieldset": {
    borderColor: "#E4FFF9",
    outline: "none",
    "&:focus": {
      outline: "none",
    },

    "&:hover": {
      boder: "none",
      borderColor: "none",
      stroke: "none",
      outline: "none",
    },
  },

  "& .MuiOutlinedInput-root": {
    height: "50px",
    border: "none",
    color: theme.palette.primary,
    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      boder: "none",
      borderColor: "none",
      stroke: "none",
      outline: "none",
    },
  },
  "& .MuiFormHelperText-root": {
    textAlign: "right",
  },
}));
