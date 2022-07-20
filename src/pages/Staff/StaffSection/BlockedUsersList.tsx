import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import {useTypedSelector} from "./../../../redux/store";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";

import TableBody from "@mui/material/TableBody";
import {useGetMyBlockedProfilesByIdQuery} from "../../../redux/store/rtk-api/staff-rtk/staffEndpoints";
// @ts-ignore
import userPhoto from "../../../assets/images/peoplePhoto.jpeg";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";

function createData(
    user: string,
    reason: string,
) {
    return {user, reason};
}

const BlockedUsersList = () => {
    const {id: workerId, position, iin} = useTypedSelector(state => state.staff)
    const {data: myBlockedUsers, isLoading, isError} = useGetMyBlockedProfilesByIdQuery(workerId as number)

    return (

        <Box sx={{backgroundColor: "#fff", margin: "20px auto", padding: "10px", height: "400px"}}>
            <Grid container alignItems="center">
                <Grid item xs={3.5}><Typography sx={{
                    color: "primary.main",
                    fontWeight: "800",
                    marginBottom: "20px"
                }}>Список заблокированных</Typography>
                </Grid>
            </Grid>
            <Box sx={{display: "flex"}}>
                {myBlockedUsers && myBlockedUsers.length > 0 ? myBlockedUsers.map((profile: any, ind: number) =>
                        <TableContainer>
                            <Table sx={{minWidth: 650, backgroundColor: "primary.light", borderRadius: "10px",}}
                                   aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">№</TableCell>
                                        <TableCell align="center">Имя</TableCell>
                                        <TableCell align="center">Фамилия</TableCell>
                                        <TableCell align="center">Отчество</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody sx={{marginBottom: '10px',}}>
                                    <TableRow
                                        component={Paper}
                                        key={ind}
                                        sx={{
                                            borderBottom: "20px solid #E4FFF9",
                                            backgroundColor: "primary.light",
                                            borderRadius: "10px"
                                        }}
                                    >
                                        <TableCell align="center">
                                            <Typography sx={{
                                                color: "primary.main",
                                                fontWeight: 600
                                            }}>{ind + 1}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography sx={{
                                                color: "primary.main",
                                                fontWeight: 600
                                            }}>{profile?.firstName}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography sx={{

                                                color: "primary.main",
                                                fontWeight: 600
                                            }}>{profile?.secondName}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography sx={{
                                                color: "primary.main",
                                                fontWeight: 600
                                            }}>{profile?.middleName}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )
                    :
                    <Typography sx={{alignItems: "center"}}>Пока что нет заблокированных пользователей</Typography>}
            </Box>
        </Box>
    );
};


export default BlockedUsersList;