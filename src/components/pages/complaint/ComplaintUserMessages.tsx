import React from 'react';
import {Box, Typography} from "@mui/material";

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
        <Box sx={{backgroundColor: "#fff", margin: "20px auto"}}>
            <Typography sx={{
                color: "primary.main",
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