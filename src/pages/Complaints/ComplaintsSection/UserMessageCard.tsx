import React from "react";
import {Box, Divider} from "@mui/material";
// @ts-ignore
import userPhoto from "../../../assets/images/peoplePhoto.jpeg";
import {useTypedSelector} from "../../../redux/store";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";

import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import {StyledBodyCell, StyledBodyCellFirst, StyledBodyRow} from "../../Users/MainUser/ListUser/ListUser.style";


const UserMessageCard = React.memo(() => {


    const complaintData = useTypedSelector(state => state.complaint)

    const rows = [
        {
            text: 'Кто подал жалобу:',
            description: complaintData ? `${complaintData.reporter.firstName !== null ? complaintData?.reporter?.firstName : ''} ${complaintData.reporter.secondName !== null ? complaintData?.reporter?.secondName : ''} ${complaintData.reporter.middleName !== null ? complaintData?.reporter?.middleName : ''}` : ""
        },
        {
            text: 'Сообщение на которое было подана жалоба:',
            description: complaintData ? complaintData?.messageText : ""
        },
        {
            text: 'Комментарий к жалобе:',
            description: complaintData ? complaintData?.comment : ""
        }
    ]


    return (
        <>
            <TableContainer component={Box}>
                <Table
                    sx={{minWidth: 650, boxShadow: "none"}}
                    aria-label="simple table"
                >
                    <TableHead sx={{position: "relative"}}>
                        <Divider
                            sx={{
                                ml: "17px",
                                position: "absolute",
                                width: "calc(100% - 32px)",
                                backgroundColor: "primary.main",
                            }}
                        />
                    </TableHead>

                    <TableBody sx={{backgroundColor: "red"}}>
                        {rows.map((row) => (
                            <StyledBodyRow key={row.description}>
                                <StyledBodyCellFirst>{row.text}</StyledBodyCellFirst>
                                <StyledBodyCell>{row.description}</StyledBodyCell>
                            </StyledBodyRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{backgroundColor: "primary.light", width: "100%", height: "20px"}}></Box>


        </>

    )
})

export default UserMessageCard