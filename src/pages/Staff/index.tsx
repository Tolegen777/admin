// library
import React, { Suspense } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// main-style
import { HeaderBlock, Poster } from "../mainStyle";
import StaffIndexPage from "./StaffSection/StaffIndexPage";

const StaffPage = () => {
  return (
      <Box>
          <HeaderBlock>
              <Poster>Персонал</Poster>


          </HeaderBlock>
          <Suspense fallback={<div>Загрузка...</div>}>
              <Routes>
                   <Route index element={<StaffIndexPage />} />
              </Routes>
          </Suspense>
      </Box>

  );
};

export default StaffPage;
