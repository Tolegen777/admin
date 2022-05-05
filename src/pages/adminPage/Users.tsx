import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { Suspense } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import HomePage from "../../components/pages/home/HomePage";
import ProfilePage from "../../components/pages/profile/ProfilePage";
import UsersPage from "../../components/pages/users/UsersPage";

export default function Users() {
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box>
      <Box
        sx={{ mb: "40px", display: "flex", justifyContent: "space-between" }}
      >
        <Stack>
          <Typography variant="h3">Пользователи</Typography>
        </Stack>
      </Box>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route index element={<UsersPage />} />
        </Routes>
      </Suspense>
    </Box>
  );
}
