import React from 'react';
import {Box, Button, Grid, Typography} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import styled from "@emotion/styled";
import ComplaintUsersInfo from './ComplaintUsersInfo';
import ComplaintUserMessages from './ComplaintUserMessages';
import {useNavigate} from "react-router-dom";
import {setComplainedStatus} from "../../../redux/store/reducers/complaint/complaint.slice";
import {useTypedSelector} from "../../../redux/store";
import {useDispatch} from "react-redux";
import {useChangeComplaintStatusMutation} from "../../../redux/store/rtk-api/complaint-rtk/complaintEndpoints";

const StyledButton = styled(Button)({
    backgroundColor: "#fff",
    color: "primary.main",

});

const ComplaintUserPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userData = useTypedSelector(state => state.complaint)
    const [changeComplaint, {
        isLoading: isLoading2,
        isSuccess: isSuccess2,
        isError: isError2
    }] = useChangeComplaintStatusMutation()

    const goToBack = () => {
        if (userData.isBlocked) {
            changeComplaint({id: userData.complaintId, status: "COMPLETED"})
        }
        if (userData.complaintStatus === "NEW") {
            dispatch(setComplainedStatus("MODERATION"))
            changeComplaint({id: userData.complaintId, status: "MODERATION"})
        }

        navigate('/app/complaints')
    }

    return (
        <Box sx={{paddingTop: '20px', backgroundColor: '#E4FFF9'}}>
            <StyledButton onClick={goToBack} startIcon={<ChevronLeftIcon sx={{
                color: "primary.main"
            }}/>}>
                <Typography sx={{fontWeight: "800", textTransform: 'capitalize'}}>Назад</Typography>
            </StyledButton>
            <ComplaintUsersInfo/>
            <Grid container>
                <Grid item xs={12}><ComplaintUserMessages/></Grid>
            </Grid>

        </Box>
    );
};

export default ComplaintUserPage;