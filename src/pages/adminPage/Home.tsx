import { Box, Stack, Typography } from "@mui/material";
import { Suspense } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import HomePage from "../../components/pages/home/HomePage";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box>
      <Box sx={{ mb: 1, display: "flex", justifyContent: "space-between" }}>
        <Stack>
          <Typography variant={"h3"}>Главная</Typography>
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
