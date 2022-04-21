import React from 'react';
import {Box, Button, Grid, InputAdornment, TextField, Typography} from "@mui/material";
import {commonColors, commonTextStyle} from "../common_styles/commonStyles";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import styled from "@emotion/styled";
import ComplaintUsersInfo from "../components/complaintPage/ComplaintUsersInfo";
import ComplaintUserMessages from "../components/complaintPage/ComplaintUserMessages";
import UserMessageCard from "../components/complaintPage/UserMessageCard";
import VisitDiagram from "../components/complaintPage/VisitDiagram";

const buttonStyle = {
    backgroundColor:commonColors.white,
    color:commonColors.primary,
    '&:hover': {
        backgroundColor: commonColors.white,
        color: commonColors.primary
    }

}

const StyledButton = styled(Button)({
    backgroundColor:commonColors.white,
    color:commonColors.primary,

});

const ComplaintUserPage = () => {
    return (
        <Box sx={{padding: '20px 40px 0px 40px', backgroundColor: '#E4FFF9'}}>
            <Typography sx={commonTextStyle}><Typography component={"span"} sx = {{
                fontFamily: "roboto",
                fontWeight: '400',
                fontSize: '35px',
                color: '#2398AB',
                letterSpacing: '0.05em',
                lineHeight: '51px',
                marginBottom: '20px'
            }}>Список жалоб</Typography> {">"} Пользователь</Typography>
            <StyledButton startIcon={<ChevronLeftIcon sx={{color:commonColors.primary
                }}/>}>
                <Typography sx = {{fontWeight:"800", textTransform:'capitalize'}}>Назад</Typography>
            </StyledButton>
            <ComplaintUsersInfo/>
            <Grid container>
                <Grid item xs = {7}><ComplaintUserMessages/></Grid>
                <Grid item xs = {5}><VisitDiagram/></Grid>
            </Grid>

        </Box>
    );
};

export default ComplaintUserPage;