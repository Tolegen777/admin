import * as React from 'react';
import {useEffect} from 'react';
import {CircularProgress} from "@mui/material";

// @ts-ignore
import userPhoto from "./../../../assets/images/peoplePhoto.jpeg"


import {useGetComplaintsQuery} from "../../../redux/store/rtk-api/complaint-rtk/complaintEndpoints";
import ComplainedDataPart from "./ComplainedDataPart";

type Props = {
    searchedName: string
    activeValue: string
}

const ComplainedData: React.FC<Props> = React.memo(({searchedName, activeValue}) => {
    const {data: complaints, isLoading, isError, refetch} = useGetComplaintsQuery("")
    useEffect(() => {
        refetch()
    }, [])
    return (
        <>
            {isLoading && <CircularProgress/>}
            {complaints && complaints?.complaints.map((complaint) => {
                    if ((searchedName && complaint.culprit.firstName && complaint.culprit.firstName.toLowerCase().includes(searchedName.toLowerCase()))
                        || (searchedName && complaint.culprit.secondName && complaint.culprit.secondName.toLowerCase().includes(searchedName.toLowerCase()))) {
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

