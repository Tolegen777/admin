import React from 'react';
import {commonColors} from "../../common_styles/commonStyles";
import {Box, Button, Grid, Typography} from "@mui/material";
import styled from "@emotion/styled";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const StyledButton = styled(Button)({
    backgroundColor:commonColors.secondary,
    color:commonColors.primary,
    width:"120px"

});

const VisitDiagram = () => {
    return (
        <Box sx={{backgroundColor: commonColors.white, margin: "20px auto", borderLeft:"20px solid #E4FFF9"}}>
            <Grid container alignItems="center">
                <Grid item xs={3}>
                    <Typography sx={{
                        color: commonColors.primary,
                        fontWeight: "800",
                        textTransform: 'capitalize',
                        margin: "10px auto"
                    }}>Посещение</Typography>
                </Grid>
                <Grid item xs={3} sx={{marginLeft:"270px"}}>
                    <StyledButton endIcon={<ChevronRightIcon sx={{color:commonColors.primary
                    }}/>}>
                        <Typography sx = {{fontWeight:"800", textTransform:'capitalize', fontSize:"12px"}}>По месяцам</Typography>
                    </StyledButton>
                </Grid>
            </Grid>





        </Box>
    );
};

export default VisitDiagram;