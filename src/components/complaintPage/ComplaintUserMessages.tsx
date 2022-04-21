import React, {useEffect} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import {commonColors} from "../../common_styles/commonStyles";
import userPhoto from "./../../assets/images/peoplePhoto.jpeg"
import UserMessageCard from "./UserMessageCard";
import VisitDiagram from "./VisitDiagram";
import OneUserMessage from "./OneUserMessage";

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
            {/*<UserMessageCard/>*/}
            <OneUserMessage message = {message}/>





        </Box>
    );
};



export default ComplaintUserMessages;