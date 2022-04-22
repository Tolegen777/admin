import React, {useCallback, useEffect, useState} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import {commonColors} from "../../common_styles/commonStyles";
import OneUserMessage from "./OneUserMessage";
import UserMessageCard from "./UserMessageCard";

const message = {
    id: 1,
    img: "",
    userName: "Asel",
    statusDescription: "была в сети 1 час назад",
    time: "12:32"
}


const ComplaintUserMessages = () => {

    return (
        <Box sx={{backgroundColor: commonColors.white, margin: "20px auto"}}>
            <Typography sx={{
                color: commonColors.primary,
                fontWeight: "800",
                textTransform: 'capitalize',
                margin: "10px auto"
            }}>Сообщение</Typography>
            {

            }
            <UserMessageCard/>






        </Box>
    );
};



export default ComplaintUserMessages;