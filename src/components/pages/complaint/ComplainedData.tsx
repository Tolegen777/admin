import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import {Button, Grid, Typography} from "@mui/material";
import styled from "@emotion/styled";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Paper from "@mui/material/Paper";
// @ts-ignore
import userPhoto from "./../../../assets/images/peoplePhoto.jpeg"
import {useNavigate} from "react-router-dom";

const StyledButton1 = styled(Button)({

    width: '160px',
    height:'35px',
    borderRadius: '5px',
    color: "#fff",
    backgroundColor: "primary.main",
    '&:hover': {
        border: "1px solid #2398AB",
        color: "primary.main"
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
        color: "#fff"
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
    const navigate = useNavigate()
    return (
        <>
            {rows.map((row) => (
                <TableRow
                    component={Paper}
                    key={row.name}
                    sx={{borderBottom:"20px solid #E4FFF9" }}
                >
                    <TableCell align="left">
                        <Grid container>
                            <Grid><img src={userPhoto} alt="user" style = {{width:'50px', height:'50px'}}/></Grid>
                            <Grid><Typography sx = {{marginTop:"5%"}}>{row.name}</Typography></Grid>
                        </Grid>
                    </TableCell>
                    <TableCell align="left">
                        <StyledButton2>{row.category}</StyledButton2>

                    </TableCell>
                    <TableCell align="left"><Typography sx = {{color:"primary.main"}}>{row.comments}</Typography></TableCell>
                    <TableCell align="right" sx = {{color:colors.cancelled, fontSize:'16px'}}>{row.status}</TableCell>
                    <TableCell align="right">
                        <Grid container spacing={0.5}>
                            <Grid item xs={3}><VisibilityOutlinedIcon
                                sx = {{border:'2px solid #2398AB', height:'32px', width:'34px', color: "primary.main",
                                    borderRadius:'5px',
                                    '&:hover': {
                                        backgroundColor: "primary.main",
                                        color: "#fff"
                                    }}}/></Grid>
                            <Grid item xs={9}><StyledButton1 variant="contained" onClick={()=>navigate('user')}>Подробнее</StyledButton1></Grid>
                        </Grid>
                    </TableCell>
                </TableRow>
            ))}
        </>
    );
});


export default ComplainedData;