import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";

import {Box, CircularProgress, Divider} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {useGetStaffQuery} from "../../../../redux/store/rtk-api/staff-rtk/staffEndpoints";
import {IStaffResponse} from "../../../../redux/store/rtk-api/staff-rtk/staff.type";
import StaffTableInfo from "../StaffTableInfo";
import {StyledHeadCell, StyledHeadRow,} from "../../../Users/MainUser/ListUser/ListUser.style";


interface Props {
    searchedName: string;
}

const StaffTable: React.FC<Props> = ({searchedName}) => {
    const {
        data: workers,
        isLoading,
        isError,
        error,
        refetch
    } = useGetStaffQuery("staff");
    useEffect(() => {
        refetch()
    }, [])
    return (
        <>
            {isLoading && <CircularProgress/>}
            {
                // @ts-ignore
                isError && <div>{error ? error?.data?.message : "Произошла ошибка"}</div>}
            <TableContainer component={Box}>
                <Table
                    sx={{minWidth: 650, boxShadow: "none"}}
                    aria-label="simple table"
                >
                    <TableHead sx={{position: "relative"}}>
                        <StyledHeadRow>
                            <StyledHeadCell>Сотрудник</StyledHeadCell>
                            <StyledHeadCell>Телефон</StyledHeadCell>
                            <StyledHeadCell>ИИН</StyledHeadCell>
                            <StyledHeadCell>Уровень доступа</StyledHeadCell>
                        </StyledHeadRow>
                        <Divider
                            sx={{
                                ml: "17px",
                                position: "absolute",
                                width: "calc(100% - 32px)",
                                backgroundColor: "primary.main",
                            }}
                        />
                    </TableHead>

                    <TableBody>
                        {workers &&
                            workers.map((worker: IStaffResponse, ind) => {
                                if (
                                    searchedName &&
                                    worker.firstName
                                        .toLowerCase()
                                        .includes(searchedName.toLowerCase())
                                ) {
                                    return <StaffTableInfo ind={ind} worker={worker}/>;
                                } else if (!searchedName) {
                                    return <StaffTableInfo ind={ind} worker={worker}/>;
                                } else return;
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    );
};

export default StaffTable;
