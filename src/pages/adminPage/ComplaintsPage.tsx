import React, { Suspense } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import ComplaintsList from "../../components/pages/complaint/ComplaintsList";

const ComplaintsPage = () => {
  return (
    <Box>
      <Stack>
        <Typography variant={"h3"}>Список жалоб</Typography>
      </Stack>

      <Stack>
        <Typography
          sx={{
            fontSize: "42px",
            fontWeight: 800,
            color: "primary.main",
            lineHeight: "40px",
          }}
        >
          Список жалоб
        </Typography>
      </Stack>

      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route index element={<ComplaintsList />} />
        </Routes>
      </Suspense>
    </Box>
  );
};

export default ComplaintsPage;
