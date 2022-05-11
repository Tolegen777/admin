// library
import React, { Suspense } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// main-style
import { HeaderBlock, Poster } from "../mainStyle";

// style
// import ComplaintsList from "../../components/pages/complaint/ComplaintsList";
// import StaffIndexPage from "../../components/pages/staff/StaffIndexPage";

const StaffPage = () => {
  return (
    <HeaderBlock>
      <Poster>Персонал</Poster>

      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>{/* <Route index element={<StaffIndexPage />} /> */}</Routes>
      </Suspense>
    </HeaderBlock>
  );
};

export default StaffPage;
