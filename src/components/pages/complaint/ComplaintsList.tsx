import React, {useState} from 'react';
import {Box, Button, Grid, InputAdornment, TextField, Typography} from "@mui/material";
import styled from "@emotion/styled";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {useNavigate} from "react-router-dom";
import { commonColors } from '../../../common_styles/commonStyles';
import ComplainedInfo from './ComplainedInfo';




const StyledButton = styled(Button)({

    width: '200px',
    borderRadius: '5px',
    // border:'1px solid #2398AB',
    '&:hover': {
        color: commonColors.white,
        background: commonColors.primary
    },
});


const movingButtons = [
    {buttonName: 'Весь список',},
    {buttonName: 'Не обработанные',},
    {buttonName: 'Обработанные',}
]


const ComplaintsList = () => {

    console.log("render")

    const [isActiveValue, setActiveValue] = useState('Весь список')


    return (
        <Box sx={{padding: '20px 40px', backgroundColor: commonColors.secondary}}>
            {/*<Typography sx={commonTextStyle}>Список жалоб</Typography>*/}
            <Grid container spacing={1}>
                {movingButtons.map(btn => {
                    return <Grid key={btn.buttonName} sx={{marginLeft: '10px'}}>
                        <StyledButton sx={{
                            color:
                                isActiveValue === btn.buttonName
                                    ? commonColors.white
                                    : commonColors.primary,
                            backgroundColor:
                                isActiveValue === btn.buttonName
                                    ? commonColors.primary
                                    : commonColors.white,
                        }} onClick={() => setActiveValue(btn.buttonName)}>{btn.buttonName}</StyledButton>
                    </Grid>
                })}

            </Grid>

            <Grid container
                  component="form"
                  sx={{border: '10px solid #fff', margin: '20px auto', backgroundColor: commonColors.white}}
            >
                <Grid item xs={10}>
                    <TextField
                        name="search"
                        placeholder="Поиск по имени, фамилий, телефону"
                        size="medium"
                        sx={{
                            backgroundColor: commonColors.secondary, color: commonColors.primary, '&::placeholder': {
                                textOverflow: 'ellipsis !important',
                                color: 'blue'
                            }
                        }}
                        fullWidth
                        type={"search"}


                        InputProps={{
                            style: {color: commonColors.primary},
                            startAdornment: <InputAdornment position="start"><IconButton
                                sx={{p: '10px', color: commonColors.primary}}>
                                <SearchIcon/>
                            </IconButton></InputAdornment>
                        }}
                    />
                </Grid>
                <Grid item xs={1.5} sx={{marginLeft: "20px"}}>
                    <Grid container
                          sx={{backgroundColor: commonColors.secondary,
                              height: "55px",
                              borderRadius: "5px",
                              paddingTop:"8%",
                              paddingLeft:"20%",
                              '&:hover': {
                                  border:"1px solid grey"
                              },
                              cursor:"pointer"
                          }}>
                        <Grid item xs={9}><Typography sx={{color:commonColors.primary}}>Фильтры</Typography></Grid>
                        <Grid item xs={1}><ChevronRightIcon sx={{backgroundColor: commonColors.white}}/></Grid>
                    </Grid>
                </Grid>


            </Grid>

            <ComplainedInfo/>


        </Box>
    );
};

export default ComplaintsList;