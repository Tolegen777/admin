// library
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { Suspense } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

// main-style
import { HeaderBlock, Poster } from "../mainStyle";

// pages
import UsersPage from "./UsersSection";

export default function Users() {
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box>
      <HeaderBlock>
        <Poster>Пользователи</Poster>
      </HeaderBlock>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route index element={<UsersPage />} />
        </Routes>
      </Suspense>
    </Box>
  );
}
