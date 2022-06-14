// library
import React, { useEffect, useRef, useState } from "react";
import { Button, CircularProgress, FormGroup, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

// store
import { useTypedSelector } from "../../../../redux/store";
import { login } from "../../../../redux/store/reducers/auth/auth.action";

// validation
import { loginSchema } from "../../../../utils/schema/validation";
// styledComponents
import { StyledNewInput } from "../../../../components/styled-components/StyledInput";
import { ActionsEnum } from "../../../../redux/store/enum";

// style
import {
  FormCheckBox,
  GridBlock,
  Headline,
  InputBox,
  InputHelperText,
  InputUpperLabel,
  ReforgedMainButton,
  StackBlock,
  StyledCheckBox,
} from "./style";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
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
    <GridBlock>
      <StackBlock>
        <Headline>Вход</Headline>
        <form onSubmit={handleSubmit}>
          <>
            <InputBox>
              <InputUpperLabel>Номер телефона</InputUpperLabel>
              <StyledNewInput
                ref={inputRef}
                name="phone"
                value={phone}
                required
                onChange={handleChange}
                placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _"
              />
              {errors.phone && (
                <InputHelperText>{errors.phone}</InputHelperText>
              )}
            </InputBox>
            <InputBox>
              <InputUpperLabel>Пароль</InputUpperLabel>
              <StyledNewInput
                id="my-input"
                aria-describedby="my-helper-text"
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
                placeholder="Введите пароль"
              />
              {errors.password && (
                <InputHelperText>{errors.password}</InputHelperText>
              )}
            </InputBox>
            <FormCheckBox>
              <FormGroup>
                <StyledCheckBox />
              </FormGroup>
            </FormCheckBox>
            <Button
              variant="contained"
              color="primary"
              disabled={status === ActionsEnum.LOADING}
              startIcon={
                status === ActionsEnum.LOADING && (
                  <CircularProgress sx={{ color: "#FFF" }} />
                )
              }
              type="submit"
            >
              Войти
            </Button>
          </>
        </form>
      </StackBlock>
    </GridBlock>
  );
};

export default LoginForm;
