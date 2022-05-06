import React from 'react';
import {Box, Button, Grid, InputAdornment, TextField, Typography} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import styled from "@emotion/styled";
import {useNavigate} from "react-router-dom";
import UsersInfo from "./UsersInfo";
import BlockedUsersList from "./BlockedUsersList";
import WorkerHistory from "./WorkerHistory";
import EditMainBlock from "./EditMainBlock";


const StyledButton = styled(Button)({
    backgroundColor:"#fff",
    color:"primary.main",

});

const EditPage = () => {

    const navigate = useNavigate()

    return (
        <Box sx={{paddingTop: '20px', backgroundColor: '#E4FFF9'}}>
            <StyledButton onClick={()=>navigate('/employees/one-worker')} startIcon={<ChevronLeftIcon sx={{color:"primary.main"
                }}/>}>
                <Typography sx = {{fontWeight:"800", textTransform:'capitalize'}}>Назад</Typography>
            </StyledButton>
            {/*<UsersInfo/>*/}
            <Grid container sx={{marginTop:"20px"}}>
                <Grid item xs = {4}><EditMainBlock/></Grid>
                {/*<Grid item xs = {8}><WorkerHistory/></Grid>*/}
            </Grid>

        </Box>
    );
};

export default EditPage;