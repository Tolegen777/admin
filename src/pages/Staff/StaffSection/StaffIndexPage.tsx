import React, {useState} from 'react';
import {Box, Button, Grid, InputAdornment, TextField, Typography} from "@mui/material";
import styled from "@emotion/styled";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StaffTable from "./StaffTable/StaffTable";

// @ts-ignore
import { ReactComponent as StaffAddIcon } from "./../../../assets/svg/StaffAddIcon.svg";
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";





const StyledButton = styled(Button)({

    width: '200px',
    borderRadius: '5px',
    // border:'1px solid #2398AB',
    '&:hover': {
        color: "#fff",
        background: "primary.main"
    },
});


const movingButtons = [
    {buttonName: 'Аналитика',},
    {buttonName: 'Список',},

]


const StaffIndexPage = () => {

    const navigate = useNavigate()
    const [isActiveValue, setActiveValue] = useState('Список')

    const [searchedName,setSearchedName] = useState('')

    const formik = useFormik({
        initialValues: {
            search:''
        },

        onSubmit: values => {
            console.log("yes")
        },
    });

    // const handleSearch = (e: KeyboardEvent<HTMLImageElement>) => {
    //     if (e.key==="Enter"){
    //         setSearchedName(formik.values.search)
    //     }

    // };

    const handleSetSearchedName = () => {
        setSearchedName(formik.values.search)
        console.log(searchedName)
    }


    return (
        <Box sx={{ backgroundColor: "primary.light", marginTop:"20px"}}>
            <Grid container spacing={1}>

                    {movingButtons.map(btn => {
                        return <Grid key={btn.buttonName} sx={{marginLeft: '10px'}}>
                            <StyledButton sx={{
                                color:
                                    isActiveValue === btn.buttonName
                                        ? "#fff"
                                        : "primary.main",
                                backgroundColor:
                                    isActiveValue === btn.buttonName
                                        ? "primary.main"
                                        : "#fff",
                            }} onClick={() => setActiveValue(btn.buttonName)}>{btn.buttonName}</StyledButton>
                        </Grid>
                    })}


                <Grid container xs={7} justifyContent="flex-end" >
                    {/*<Button sx={{backgroundColor: "#fff", }}><StaffAddIcon/></Button>*/}

                    {/*<StyledButton sx={{*/}
                    {/*    color: "#fff",*/}
                    {/*    backgroundColor: "primary.main", marginLeft:"10px"}}>Добавить сотрудника</StyledButton>*/}

                </Grid>







            </Grid>

            <Grid container
                  component="form"
                  sx={{border: '10px solid #fff', margin: '20px auto', backgroundColor: "#fff"}}
            >
                <Grid item xs={12}>

                    <form onSubmit={e => e.preventDefault()}>
                        <TextField
                            name="search"
                            placeholder="Поиск по имени, фамилий, телефону"
                            size="medium"
                            sx={{
                                backgroundColor: "primary.light", color: "primary.main", '&::placeholder': {
                                    textOverflow: 'ellipsis !important',
                                    color: 'blue',
                                    outline: 'none'
                                }
                            }}
                            fullWidth
                            type={"search"}
                            onChange={formik.handleChange}
                            // onKeyDown={handleSearch}

                            InputProps={{
                                style: {color: "primary.main"},
                                startAdornment: <InputAdornment position="start"><IconButton
                                    sx={{p: '10px', color: "primary.main"}}>
                                    <SearchIcon onClick={handleSetSearchedName}/>
                                </IconButton></InputAdornment>
                            }}
                        />
                    </form>


                </Grid>
            </Grid>
            <StaffTable searchedName = {searchedName}/>


        </Box>
    );
};

export default StaffIndexPage;