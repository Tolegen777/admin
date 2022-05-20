// library
import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// store
import { useTypedSelector } from "../../../../redux/store";
// import { useTypedSelector } from "../../../store";
import { login } from "../../../../redux/store/reducers/auth/auth.action";

// types
import { ILogin } from "../../../../types/ILogin";

// theme
import { theme } from "../../../../theme/theme";

// styledComponents
import {
  StyledInput,
  StyledNewInput,
} from "../../../../components/styled-components/StyledInput";
import { MainButton } from "../../../../components/styled-components/StyledButton";

// validation
import { loginSchema } from "../../../../utils/schema/validation";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, error } = useTypedSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      phone: "", // Dias@gmail.com
      password: "", // 12345
    },
    onSubmit: async (values) => {
      // @ts-ignore
      dispatch(login(values));
    },
    validationSchema: loginSchema,
  });

  // React.useEffect(() => {
  //   if (isAuth) {
  //     navigate("/app", { replace: true });
  //   }
  // }, [isAuth]);

  const { values, errors, handleChange, handleSubmit } = formik;
  const { phone, password } = values;

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "clamp(50px, 7.8125vw, 150px)",
        width: "600px",
      }}
    >
      <Typography
        variant="h4"
        color="primary"
        gutterBottom
        sx={{
          fontSize: "64px",
          fontWeight: 600,
          mb: "clamp(70px, 10wv, 140px)",
        }}
      >
        Вход
      </Typography>
      <form onSubmit={handleSubmit}>
        <>
          <Box sx={{ height: "150px", mb: "30px" }}>
            <Typography variant="h3" sx={{ mb: "20px" }}>
              Номер телефона
            </Typography>
            <StyledNewInput
              name="phone"
              value={phone}
              onChange={handleChange}
              placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _"
            />
            {errors.phone && <Typography>{errors.phone}</Typography>}
          </Box>

          <Box sx={{ height: "150px", mb: "20px" }}>
            <Typography variant="h3" sx={{ mb: "20px" }}>
              Пароль
            </Typography>
            <StyledNewInput
              id="my-input"
              aria-describedby="my-helper-text"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Введите пароль"
            />
            {errors.password && <Typography>{errors.password}</Typography>}
          </Box>
          <Box sx={{ width: "240px", mb: "30px" }}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      borderRadius: "5px",
                      color: theme.palette.primary.main,
                      "& .MuiSvgIcon-root": { fontSize: "30px" },
                    }}
                  />
                }
                label="Запомнить меня"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    color: "#666666",
                    fontSize: "24px",
                  },
                }}
              />
            </FormGroup>
          </Box>

          <MainButton
            sx={{
              fontSize: "24px",
              display: "flex",
              justifyContent: "center",
              height: "60px",
            }}
            type="submit"
          >
            Войти
          </MainButton>
        </>
      </form>
    </Box>
  );
};

export default LoginForm;
