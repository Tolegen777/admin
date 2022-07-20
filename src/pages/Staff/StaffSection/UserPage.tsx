import React from 'react';
import {Box, Button, Grid, Typography} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import styled from "@emotion/styled";
import {useNavigate} from "react-router-dom";
import UsersInfo from "./UsersInfo";
import BlockedUsersList from "./BlockedUsersList";


const StyledButton = styled(Button)({
    backgroundColor: "#fff",
    color: "primary.main",

});

const UserPage = () => {

    const navigate = useNavigate()

    return (
        <Box sx={{paddingTop: '20px', backgroundColor: '#E4FFF9'}}>
            <StyledButton onClick={() => navigate('/app/employees')} startIcon={<ChevronLeftIcon sx={{
                color: "primary.main"
            }}/>}>
                <Typography sx={{fontWeight: "800", textTransform: 'capitalize'}}>Назад</Typography>
            </StyledButton>
            <UsersInfo/>
            <Grid container>
                <Grid item xs={12}><BlockedUsersList/></Grid>
            </Grid>

        </Box>
    );
};

export default UserPage;