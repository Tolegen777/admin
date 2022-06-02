// library
import { Suspense, useEffect, useState } from "react";
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

import { useGetHomeQuery } from "../../redux/store/rtk-api/home-rtk/homeEndpoints";

export default function Home() {
  const data = useGetHomeQuery("");

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
