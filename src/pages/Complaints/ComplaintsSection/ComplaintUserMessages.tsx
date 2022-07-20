import React from 'react';
import {Box, Typography} from "@mui/material";

import UserMessageCard from "./UserMessageCard";

const ComplaintUserMessages = () => {
    return (
        <Box sx={{backgroundColor: "#fff", margin: "20px auto", padding: "20px", height: "400px"}}>
            <Typography sx={{
                color: "primary.main",
                fontWeight: "800",
                marginBottom: "20px",
                fontSize: "20px"

            }}>Информация о жалобе
            </Typography>


            <Box sx={{backgroundColor: "#fff", margin: "20px auto", padding: "10px", height: "400px"}}>
                <Typography sx={{
                    color: "primary.main",
                    fontWeight: "800",
                    textTransform: 'capitalize',
                    marginBottom: "10px"
                }}>Сообщение</Typography>
                <UserMessageCard/>


            </Box>
        </Box>

    )
        ;
};


export default ComplaintUserMessages;