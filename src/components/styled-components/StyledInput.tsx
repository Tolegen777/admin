import { NoEncryptionTwoTone } from "@mui/icons-material";
import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledInput = styled((props: TextFieldProps) => (
  <TextField variant="outlined" fullWidth {...props} />
))(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    height: "50px",
    "&.Mui-focused fieldset": {
      borderColor: "primary.main",
    },
  },
  "& .MuiFormHelperText-root": {
    textAlign: "right",
  },
}));
