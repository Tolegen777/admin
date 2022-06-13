import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import {Button, CircularProgress, Grid, Typography} from "@mui/material";
import styled from "@emotion/styled";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Paper from "@mui/material/Paper";
// @ts-ignore
import userPhoto from "./../../../assets/images/peoplePhoto.jpeg"
import {useNavigate} from "react-router-dom";
import {
    StyledBodyCell,
    StyledBodyCellFirst,
    StyledBodyCellLast,
    StyledBodyRow
} from "../../Users/modules/UserTable/style";
import {useGetComplaintsQuery} from "../../../redux/store/rtk-api/complaint-rtk/complaintEndpoints";
import {IComplaint} from "../../../redux/store/rtk-api/complaint-rtk/complaint.type";
import ComplainedDataPart from "./ComplainedDataPart";
import {setComplainedUserData} from "../../../redux/store/reducers/complaint/complaint.slice";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

type Props = {
    searchedName: string
    activeValue: string
}

const ComplainedData: React.FC<Props> = React.memo(({searchedName, activeValue}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {data: complaints, isLoading, isError, refetch} = useGetComplaintsQuery("")
    //debugger
    useEffect(() => {
        refetch()
    }, [])
    //debugger


    return (
        <>
            {isLoading && <CircularProgress/>}
            {complaints && complaints?.complaints.map((complaint) => {
                    if (searchedName && complaint.culprit.firstName && complaint.culprit.firstName.toLowerCase().includes(searchedName.toLowerCase())
                        || searchedName && complaint.culprit.secondName && complaint.culprit.secondName.toLowerCase().includes(searchedName.toLowerCase())) {
                        return <ComplainedDataPart complaint={complaint} activeValue={activeValue}/>
                    } else if (!searchedName) {
                        return <ComplainedDataPart complaint={complaint} activeValue={activeValue}/>
                    } else return
                }
            )}
        </>
    );
});


export default ComplainedData;

