import { NoEncryptionTwoTone } from "@mui/icons-material";
import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledInput = styled((props: TextFieldProps) => (
  <TextField variant="outlined" fullWidth {...props} />
))(({ theme }) => ({
  backgroundColor: "#E4FFF9",
  borderRadius: "5px",

  "& fieldset": {
    borderColor: "#E4FFF9",
  },

  "& .MuiOutlinedInput-root": {
    height: "50px",
    border: "none",
  },
  "& .MuiFormHelperText-root": {
    textAlign: "right",
  },
}));
