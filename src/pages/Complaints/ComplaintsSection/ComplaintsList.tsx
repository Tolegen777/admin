import React, {useState} from 'react';
import {Box, Button, Grid} from "@mui/material";
import styled from "@emotion/styled";
import ComplainedInfo from './ComplainedInfo';
import SearchComponent from "../../../components/reusedComponents/SearchComponent";
import {useFormik} from "formik";


const StyledButton = styled(Button)({

    width: '200px',
    borderRadius: '5px',
    '&:hover': {
        color: "#fff",
        background: "primary.main"
    },
});


const movingButtons = [
    {buttonName: 'Весь список',},
    {buttonName: 'Не обработанные',},
    {buttonName: 'Обработанные',}
]


const ComplaintsList = () => {

    const [activeValue, setActiveValue] = useState('Весь список')

    const formik = useFormik({
        initialValues: {
            search: ''
        },

        onSubmit: values => {
        },
    });

    const [searchedName, setSearchedName] = useState("")


    return (
        <Box sx={{backgroundColor: "primary.light", marginTop: "20px"}}>
            <Grid container spacing={1}>
                {movingButtons.map(btn => {
                    return <Grid key={btn.buttonName} sx={{marginLeft: '10px'}}>
                        <StyledButton sx={{
                            color:
                                activeValue === btn.buttonName
                                    ? "#fff"
                                    : "primary.main",
                            backgroundColor:
                                activeValue === btn.buttonName
                                    ? "primary.main"
                                    : "#fff",
                        }} onClick={() => setActiveValue(btn.buttonName)}>{btn.buttonName}</StyledButton>
                    </Grid>
                })}

            </Grid>

            <Grid container
                  component="form"
                  sx={{border: '10px solid #fff', margin: '20px auto', backgroundColor: "#fff"}}
            >
                <Grid item xs={12}>
                    <SearchComponent formik={formik} searchedName={searchedName} setSearchedName={setSearchedName}
                                     placeholder={"Поиск по имени, фамилий, телефону"}
                    />
                </Grid>
            </Grid>

            <ComplainedInfo searchedName={searchedName} activeValue={activeValue}/>


        </Box>
    );
};

export default ComplaintsList;