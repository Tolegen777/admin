import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import {Button, Grid, Typography} from "@mui/material";
import styled from "@emotion/styled";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Paper from "@mui/material/Paper";
import userPhoto from "./../../assets/images/peoplePhoto.jpeg"
import {commonColors} from "../../common_styles/commonStyles";

const StyledButton1 = styled(Button)({

    width: '160px',
    height:'35px',
    borderRadius: '5px',
    color: commonColors.white,
    background: commonColors.primary,
    '&:hover': {
        border: "1px solid #2398AB",
        color: commonColors.primary
    },
    textTransform:"lowercase"
});

const StyledButton2 = styled(Button)({

    width: '160px',
    height:'35px',
    borderRadius: '5px',
    color: "red",
    border: "1px solid red",
    '&:hover': {
        backgroundColor: "red",
        color: commonColors.white
    },
    textTransform:"lowercase"
});

const rows = [
    {
        name:"Nurlanov Dauren",
        category:"Obrabotan",
        comments:"Coments from users",
        status:"Me prosmotreno",
        newest:"Nurlanov Dauren",
    },
    {
        name:"Nurlanovsa Dauren",
        category:"Obrabotan",
        comments:"Coments from users",
        status:"Me prosmotreno",
        newest:"Nurlanov Dauren",
    },
    {
        name:"Nurlanovss Dauren",
        category:"Obrabotan",
        comments:"Coments from users",
        status:"Me prosmotreno",
        newest:"Nurlanov Dauren",
    },
    {
        name:"Nurlsanov Dauren",
        category:"Obrabotan",
        comments:"Coments from users",
        status:"Me prosmotreno",
        newest:"Nurlanov Dauren",
    }

];

const colors = {
    notWatched: "black",
    cancelled:"red",
    success:"green",
    finished:"blue"
}

const ComplainedData = React.memo(() => {
    console.log("info")
    return (
        <>
            {rows.map((row) => (
                <TableRow
                    component={Paper}
                    key={row.name}
                    sx={{marginTop:"15px", borderBottom:"30px solid #E4FFF9" } }
                >
                    <TableCell align="left">
                        <Grid container>
                            <Grid><img src={userPhoto} alt="user" style = {{width:'40px', height:'40px'}}/></Grid>
                            <Grid><Typography sx = {{marginTop:"5%"}}>{row.name}</Typography></Grid>
                        </Grid>


                    </TableCell>
                    <TableCell align="left">
                        <StyledButton2>{row.category}</StyledButton2>

                    </TableCell>
                    <TableCell align="left"><Typography sx = {{color:commonColors.primary}}>{row.comments}</Typography></TableCell>
                    <TableCell align="right" sx = {{color:colors.cancelled, fontSize:'16px'}}>{row.status}</TableCell>
                    <TableCell align="right">
                        <Grid container>
                            <Grid item xs={5}><VisibilityOutlinedIcon
                                sx = {{border:'2px solid #2398AB', height:'32px', width:'34px', color: commonColors.primary,
                                    borderRadius:'5px',
                                    '&:hover': {
                                        backgroundColor: commonColors.primary,
                                        color: commonColors.white
                                    }}}/></Grid>
                            <Grid item xs={7}><StyledButton1>Подробнее</StyledButton1></Grid>
                        </Grid>
                    </TableCell>
                </TableRow>
            ))}
        </>
    );
});


export default ComplainedData;