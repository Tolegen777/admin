import React from 'react';
import {Box, Button, Grid, Paper, Stack, TextField, Typography} from "@mui/material";
import styled from "@emotion/styled";
import {commonColors} from "../../common_styles/commonStyles";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ComplaintUserMessages from "./ComplaintUserMessages";

const StyledBordTypography = styled(Typography)({
    fontSize:'15px',
    fontWeight:'800',
    color:commonColors.primary,

});
const StyledTypography = styled(Typography)({
    fontSize:'13px',
    color:commonColors.primary,

});

const MyStyledButton = styled(Button)({
    width:"120px",
    textTransform:"capitalize",
    fontSize:"12px"
});

const texts = [
    {
        firstText:"Номер телефона",
        description:"870748393423"
    },
    {
        firstText:"Дата рожения",
        description:"29.01.1999"
    },
    {
        firstText:"Почта",
        description:"test@mail.com"
    },
    {
        firstText:"статус",
        description:"Активный"
    },
    {
        firstText:"религия",
        description:"ислам"
    },
    ]

const ComplaintUsersInfo = () => {

    return (
        <>
            <Box sx = {{padding:"15px", backgroundColor:commonColors.white, margin:"20px auto"}}>
                <Grid container>
                    <Grid container xs = {6}>
                        <Grid sx={{backgroundColor:"#E2E2E2"}}><PersonOutlineIcon sx={{width:100,height:100, color:commonColors.white, border:"10px solid #E2E2E2"}}/></Grid>
                        <Grid sx = {{margin: '5px 20px'}} >
                            <StyledTypography>Информация на пользователя</StyledTypography>
                            <Typography sx={{margin:"10px auto", fontSize:'20px', color:commonColors.primary, fontWeight:'800'}}>A. Адильбекович</Typography>
                            <Stack direction={"row"} spacing={2} sx={{marginTop:"20px"}}>
                                <MyStyledButton sx={{color:"#FD4444", backgroundColor:"#FFEFEF"}}>Заблокировать</MyStyledButton>
                                <MyStyledButton sx={{color:commonColors.primary, backgroundColor:commonColors.secondary}}>Отклонить</MyStyledButton>

                            </Stack>

                        </Grid>
                    </Grid>

                    <Grid container xs = {6}>
                        {texts.map(text=><InfoBlock description={text.description} textData={text.firstText}/>)}
                    </Grid>

                </Grid>

            </Box>

        </>

    );
};

type PropsType2 = {
    textData:string,
    description:string
}

const InfoBlock:React.FC<PropsType2> = React.memo(({textData, description}) => {
    return (
        <Grid item xs={4}>
            <StyledTypography>{textData}</StyledTypography>
            <StyledBordTypography>{description}</StyledBordTypography>
        </Grid>
    )
})


export default ComplaintUsersInfo;