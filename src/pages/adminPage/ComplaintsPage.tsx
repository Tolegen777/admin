import React, {Suspense} from 'react';
import {Box, Paper, Stack, Typography} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import MainPage from "../../components/pages/main/MainPage";
import ComplaintsList from '../../components/pages/complaint/ComplaintsList';


const ComplaintsPage = () => {
    return (
        <Box>

                <Stack>
                    <Typography>Список жалоб</Typography>
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