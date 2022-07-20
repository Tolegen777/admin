import React, {Suspense} from 'react';
import {Box, Stack, Typography} from "@mui/material";
import {Routes} from "react-router-dom";


const Edit = () => {
    return (
        <Box>

            <Stack>
                <Typography sx={{
                    fontSize: "42px",
                    color: "primary.main",
                    lineHeight: "40px",
                }}>Персонал {">"} Сотрудник {">"} <b>Редактировать</b></Typography>
            </Stack>

            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                </Routes>

            </Suspense>
        </Box>
    );
};

export default Edit;