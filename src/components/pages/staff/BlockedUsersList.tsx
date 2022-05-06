import React from 'react';
import {Box, Button, Divider, Grid, InputAdornment, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../../../store";
import complaint, {setButtonVisibility, setOneUserMessageVisibility} from "../../../store/reducers/complaint/complaint.slice";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import styled from "@emotion/styled";
import {useNavigate} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import {
    StyledBodyCell,
    StyledBodyCellFirst, StyledBodyCellLast,
    StyledBodyRow,
    StyledHeadCell,
    StyledHeadRow
} from "../users/UserTable/StyledHead";
import TableBody from "@mui/material/TableBody";
import {
    StyledBodyCellFirstStaff, StyledBodyCellLastStaff, StyledBodyCellStaff,
    StyledBodyRowStaff,
    StyledHeadCellStaff,
    StyledHeadRowStaff
} from "./StaffTable/StyledHeadStaff";
import UserMessageCard from "../complaint/UserMessageCard";

const message = {
    id: 1,
    img: "",
    userName: "Asel",
    statusDescription: "была в сети 1 час назад",
    time: "12:32"
}

const StyledButton = styled(Button)({
    background:"#E4FFF9",
    color:"primary.main",
    height:"30px",
    margin:"10px auto"

});

function createData(
    user: string,
    reason: string,

) {
    return { user, reason};
}

const rows = [
    createData("Нуров Даурен", "Оскорбление пользователя не цензцрной лексикой"),
    createData("Нуров Даурен", "Оскорбление пользователя не цензцрной лексикой"),
    createData("Нуров Даурен", "Оскорбление пользователя не цензцрной лексикой"),
    createData("Нуров Даурен", "Оскорбление пользователя не цензцрной лексикой"),
    createData("Нуров Даурен", "Оскорбление пользователя не цензцрной лексикой"),


];


const BlockedUsersList = () => {
    const navigate =  useNavigate()
    const dispatch = useDispatch()


    const isPrevBtn = useTypedSelector(state => state.complaint.isShowPrevButton)

    const hideButton = () => {
        dispatch(setButtonVisibility(false));
        dispatch(setOneUserMessageVisibility(true))
    }

    return (

        <Box sx={{backgroundColor: "#fff", margin: "20px auto", padding:"10px", height:"400px"}}>
            <Grid container alignItems="center">
                <Grid item xs={3.5}><Typography sx={{
                    color: "primary.main",
                    fontWeight: "800",
                }}>Список заблокированных</Typography></Grid>
                <Grid item xs={6}><TextField
                    name="search"
                    placeholder="Поиск"
                    size="small"
                    sx={{
                        backgroundColor: "primary.light", color: "primary.main", '&::placeholder': {
                            textOverflow: 'ellipsis !important',
                            color: 'blue',
                            outline: 'none'
                        }
                    }}
                    fullWidth
                    type={"search"}

                    InputProps={{
                        style: {color: "primary.main"},
                        startAdornment: <InputAdornment position="start"><IconButton
                            sx={{p: '10px', color: "primary.main"}}>
                            <SearchIcon/>
                        </IconButton></InputAdornment>
                    }}
                /></Grid>
                <Grid item xs={2.5} ><Button sx={{color:"primary.main", fontWeight:"600", backgroundColor:"primary.light",
                    textTransform:"capitalize",
                     marginLeft:"10px", minHeight:"40px"}} endIcon={<NavigateNextIcon fontSize="small"/>}>новые-старые</Button></Grid>
            </Grid>

            <TableContainer component={Box} sx={{maxHeight:"350px"}}>
                <Table
                    sx={{ minWidth: 450, boxShadow: "none", backgroundColor:"#fff" }}
                    aria-label="simple table"
                >
                    <TableHead sx={{ position: "relative" }}>
                        <StyledHeadRowStaff>
                            <StyledHeadCellStaff>Пользователи</StyledHeadCellStaff>
                            <StyledHeadCellStaff>Причина блокирования</StyledHeadCellStaff>
                        </StyledHeadRowStaff>
                    </TableHead>

                    <TableBody>
                        {rows.map((row) => (
                            <StyledBodyRowStaff key={row.user}>
                                <StyledBodyCellFirstStaff>{row.user}</StyledBodyCellFirstStaff>
                                <StyledBodyCellStaff>{row.reason}</StyledBodyCellStaff>
                                <StyledBodyCellLastStaff>
                                    <Button
                                        sx={{
                                            width: "140px",
                                            height: "40px",
                                            background: "#fff",
                                            borderRadius: "10px",
                                            "&:hover": {
                                                background: "rgba(35, 152, 171, 1)",
                                            },
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: "primary.main",
                                                fontSize: "18px",
                                                fontWeight: "700",
                                                textTransform: "capitalize",
                                            }}
                                        >
                                            Подробнее
                                        </Typography>
                                    </Button>
                                </StyledBodyCellLastStaff>
                            </StyledBodyRowStaff>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    );
};



export default BlockedUsersList;