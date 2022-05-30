// library
import { Paper, Box } from "@mui/material";

// modules
import LoginForm from "./modules/LoginForm";

// style
import { LoginBlock } from "./style";

// SVGs
// @ts-ignore: Ts че ты хочешь?
import { ReactComponent as AuthBg } from "../../assets/svg/authBg.svg";

const LoginPaper = () => {
  return (
    <LoginBlock sx={{ display: "flex" }}>
      <LoginForm />
      <Box sx={{width: "100px"}}>
        <AuthBg />
      </Box>
    </LoginBlock>
  );
};

export default LoginPaper;
