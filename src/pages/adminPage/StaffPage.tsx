import React, {Suspense} from 'react';
import {Box, Paper, Stack, Typography} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import ComplaintsList from '../../components/pages/complaint/ComplaintsList';
import StaffIndexPage from "../../components/pages/staff/StaffIndexPage";


const StaffPage = () => {
    return (
        <Box>

                <Stack>
                    <Typography sx={{
                        fontSize: "42px",
                        fontWeight: 800,
                        color: "primary.main",
                        lineHeight: "40px",
                    }}>Персонал</Typography>
                </Stack>

            <Suspense fallback={<div>Загрузка...</div>}>
                    <Routes>
                        <Route index element={<StaffIndexPage />} />
                    </Routes>

            </Suspense>
        </Box>
    );
};

export default StaffPage;