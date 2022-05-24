// library
import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// store
import { useTypedSelector } from "../../../../redux/store";
import { login } from "../../../../redux/store/reducers/auth/auth.action";

// types
import { ILogin } from "../../../../types/ILogin";
// validation
import { loginSchema } from "../../../../utils/schema/validation";
// theme
import { theme } from "../../../../theme/theme";
// styledComponents
import {
  StyledInput,
  StyledNewInput,
} from "../../../../components/styled-components/StyledInput";
import { MainButton } from "../../../../components/styled-components/StyledButton";
import { ActionsEnum } from "../../../../redux/store/enum";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, error, status } = useTypedSelector((state) => state.auth);

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      phone: "", // 8747 411 81 59
      password: "", // 12345
    },
    onSubmit: async (values) => {
      // @ts-ignore
      dispatch(login(values));
      setLoading(true);
    },
    validationSchema: loginSchema,
  });

  const { values, errors, handleChange, handleSubmit } = formik;
  const { phone, password } = values;

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <Grid
      container
      item
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "clamp(50px, 7.8125vw, 150px)",
        width: "100%",
        maxWidth: "600px",
        height: "460px",
        justifyContent: "center",
      }}
    >
      <Stack sx={{ width: "100%" }}>
        <Typography
          variant="h4"
          color="primary"
          gutterBottom
          sx={{
            width: "100%",
            fontSize: "clamp(40px, 3.33vw, 64px)",
            fontWeight: 600,
            mb: "clamp(70px, 7.916vw, 152px)",
          }}
        >
          Вход
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <>
            <Box sx={{ mb: "clamp(20px, 1.5625vw, 30px)" }}>
              <Typography variant="h3" sx={{ mb: "clamp(12px, 1.04vw, 20px)" }}>
                Номер телефона
              </Typography>
              <StyledNewInput
                ref={inputRef}
                name="phone"
                value={phone}
                type=""
                required
                onChange={handleChange}
                placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _"
              />
              {errors.phone && <Typography>{errors.phone}</Typography>}
            </Box>
            <Box sx={{ mb: "clamp(10px, 1.04vw, 20px)" }}>
              <Typography variant="h3" sx={{ mb: "clamp(12px, 1.04vw, 20px)" }}>
                Пароль
              </Typography>
              <StyledNewInput
                id="my-input"
                aria-describedby="my-helper-text"
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
                placeholder="Введите пароль"
              />
              {errors.password && <Typography>{errors.password}</Typography>}
            </Box>
            <Box sx={{ width: "240px", mb: "clamp(20px, 1.5625vw, 30px)" }}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        borderRadius: "5px",
                        color: theme.palette.primary.main,
                        "& .MuiSvgIcon-root": {
                          fontSize: "clamp(24px, 1.5625vw, 30px)",
                        },
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
              disabled={status === ActionsEnum.LOADING}
              startIcon={
                status === ActionsEnum.LOADING && (
                  <CircularProgress sx={{ color: "#fff" }} />
                )
              }
              sx={{
                fontSize: "18px, 1.25vw, 24px",
                display: "flex",
                justifyContent: "center",
                height: "60px",
                ".Mui-disabled": {
                  color: "#fff",
                  backgroundColor: "#fff",
                },
              }}
              type="submit"
            >
              Войти
            </MainButton>
          </>
        </form>
      </Stack>
    </Grid>
  );
};

export default LoginForm;
