// library
import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// store
import { useTypedSelector } from "../../../../redux/store";
// import { useTypedSelector } from "../../../store";
import { login } from "../../../../redux/store/reducers/auth/auth.action";

// types
import { ILogin } from "../../../../types/ILogin";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, error } = useTypedSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      phone: "87474118159", // Dias@gmail.com
      password: "12345", // 12345
    },
    onSubmit: async (values) => {
      dispatch(login(values));
    },
  });

  // React.useEffect(() => {
  //   if (isAuth) {
  //     navigate("/app", { replace: true });
  //   }
  // }, [isAuth]);

  const { values, handleChange, handleSubmit } = formik;
  const { phone, password } = values;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Hitba Admin
      </Typography>
      <Typography variant="h5" gutterBottom>
        Войдите чтобы продолжить!
      </Typography>
      <form onSubmit={handleSubmit}>
        <>
          <TextField
            name="phone"
            label="Phone"
            variant="standard"
            value={phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            name="password"
            type="password"
            label="Password"
            variant="standard"
            value={password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Button
            variant="outlined"
            type="submit"
            fullWidth
            color="primary"
            size="large"
          >
            Войти
          </Button>
          {error && (
            <Typography variant="caption" gutterBottom>
              Возникла ошибка. Попробуйте позже!
            </Typography>
          )}
        </>
      </form>
    </div>
  );
};

export default LoginForm;
