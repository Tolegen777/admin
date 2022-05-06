import { Paper, Box } from "@mui/material";
import LoginForm from "../../components/pages/auth/LoginForm";

const LoginPaper = () => {
  return (
    <Box
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Paper elevation={1} sx={{ padding: "16px" }}>
        <LoginForm />
      </Paper>
    </Box>
  );
};

export default LoginPaper;
