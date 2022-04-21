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

export default function Home() {
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
          <Typography
            sx={{
              fontSize: "42px",
              fontWeight: 800,
              color: "primary.main",
              lineHeight: "40px",
            }}
          >
            Главная
          </Typography>
        </Stack>
      </Box>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </Suspense>
    </Box>
  );
}
