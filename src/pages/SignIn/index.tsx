// library
import { Paper, Box } from "@mui/material";

// modules
import LoginForm from "./modules/LoginForm";

// style
import { LoginBlock, LoginContainer } from "./style";

const LoginPaper = () => {
  return (
    <LoginBlock>
      <LoginContainer>
        <LoginForm />
      </LoginContainer>
    </LoginBlock>
  );
};

export default LoginPaper;
