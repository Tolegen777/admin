import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { Suspense } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import MainPage from "../../components/pages/main/MainPage";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box>
      <Box mb={2} sx={{ display: "flex", justifyContent: "space-between" }}>
        <Stack>
          <Typography>Главная</Typography>
        </Stack>
      </Box>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Paper elevation={1} sx={{ padding: "15px" }}>
          <Routes>
            <Route index element={<MainPage />} />
          </Routes>
        </Paper>
      </Suspense>
    </Box>
  );
}
