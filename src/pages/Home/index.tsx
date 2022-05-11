// library
import { Suspense } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

// pages
import HomeSection from "./HomeSection";

// main-Style
import { HeaderBlock, Poster } from "../mainStyle";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box>
      <HeaderBlock>
        <Poster>Главная</Poster>
      </HeaderBlock>
      <Suspense fallback={<div>Загрузка...</div>}>
        <HomeSection />
      </Suspense>
    </Box>
  );
}
