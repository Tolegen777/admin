// library
import React, { Suspense } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// main-Style
import { HeaderBlock, Poster } from "../mainStyle";

// import ComplaintsList from "../../components/pages/complaint/ComplaintsList";

const ComplaintsPage = () => {
  return (
    <HeaderBlock>
      <Poster>Список жалоб</Poster>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          {/* <Route index element={<ComplaintsList />} /> */}
          {/* <Route path="/" element={<ComplaintUserPage />} /> */}
        </Routes>
      </Suspense>
    </HeaderBlock>
  );
};

export default ComplaintsPage;
