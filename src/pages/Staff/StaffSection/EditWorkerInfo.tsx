import React from 'react';
import {Box, Button, Grid, InputAdornment, Paper, TextField, Typography} from "@mui/material";
import styled from "@emotion/styled";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {TextFieldComponent, TextFieldComponent2, TextFieldComponent3} from "./TextFields/TextFieldComponent";
import * as yup from 'yup';

import {useTypedSelector} from "../../../redux/store";
import {useFormik} from "formik";
const StyledButton = styled(Button)({
    backgroundColor:"primary.light",
    color:"primary.main",
    fontWeight:"800",

});



const EditWorkerInfo = () => {

    const workerData = useTypedSelector(state=>state.staff)

    console.log(workerData)
    console.log("workerdata")

    const validationSchema = yup.object({
        email: yup
            .string()
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string()
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });

    // id: null,
    //     firstName: '',
    //     secondName: '',
    //     iin: '',
    //     position: '',
    //     date: '',
    //     phone: '',
    //     street: '',
    //     floor: null,
    //     building: '',
    //     apartment: '',
    //     index: ''

    const formik = useFormik({
        initialValues: {
            firstName: workerData.firstName,
            secondName: workerData.secondName,
            iin: workerData.iin,
            date: workerData.date,
            phone: workerData.phone,
            street: workerData.street,
            building: workerData.building,
            floor: workerData.floor,
            apartment: workerData.apartment,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    // <TextField
    //     fullWidth
    //     id="email"
    //     name="email"
    //     label="Email"
    //     value={formik.values.email}
    //     onChange={formik.handleChange}
    //     error={formik.touched.email && Boolean(formik.errors.email)}
    //     helperText={formik.touched.email && formik.errors.email}
    // />

    return (
       <Box component={Paper} sx={{padding:"20px"}}>
           <Typography sx={{color:"primary.main", fontWeight:"500" }}>Информация о сотуднике</Typography>
           <hr/>
           <Grid container>
               <Grid item xs>
                   <Typography sx={{color:"primary.main", fontWeight:"800" }}>Личная информация</Typography>
                   <TextFieldComponent label={"Имя"} value={formik.values.firstName} id="firstName" name="firstName"
                                       formik={formik}
                                       error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                       helperText={formik.touched.firstName && formik.errors.firstName}
                   />
                   <TextFieldComponent label={"Фамилия"} value={formik.values.secondName} id="secondName" name="secondName"
                                       formik={formik}
                                       error={formik.touched.secondName && Boolean(formik.errors.secondName)}
                                       helperText={formik.touched.secondName && formik.errors.secondName}
                   />
                   <TextFieldComponent label={"ИИН"} value={formik.values.iin} id="iin" name="iin"
                                       formik={formik}
                                       error={formik.touched.iin && Boolean(formik.errors.iin)}
                                       helperText={formik.touched.iin && formik.errors.iin}
                   />


                   <Typography sx={{color:"primary.main", fontWeight:"500", marginTop:"10px" }}>Дата рождения</Typography>

                   <Grid container columnSpacing={1}>
                       <Grid item><StyledButton sx={{backgroundColor:"primary.light"}} endIcon={<ExpandMoreIcon/>}>01</StyledButton></Grid>
                       <Grid item><StyledButton sx={{backgroundColor:"primary.light"}} endIcon={<ExpandMoreIcon/>}>Январь</StyledButton></Grid>
                       <Grid item><StyledButton sx={{backgroundColor:"primary.light"}} endIcon={<ExpandMoreIcon/>}>2000</StyledButton></Grid>



                   </Grid>
                   <TextFieldComponent label={"Номер телефона"} value={formik.values.phone} id="phone" name="phone"
                                       formik={formik}
                                       error={formik.touched.phone && Boolean(formik.errors.phone)}
                                       helperText={formik.touched.phone && formik.errors.phone}
                   />

               </Grid>


               <Grid item xs>
                   <Typography sx={{color:"primary.main", fontWeight:"800" }}>Место проживания</Typography>
                   <TextFieldComponent2 label={"Страна"} text={"Казахстан"}/>
                   <TextFieldComponent2 label={"Город"} text={"Алматы"}/>
                   <TextFieldComponent label={"Улица"} value={formik.values.street} id="street" name="street"
                                       formik={formik}
                                       error={formik.touched.street && Boolean(formik.errors.street)}
                                       helperText={formik.touched.street && formik.errors.street}
                   />


                   <Grid container columnSpacing={3}>
                       <Grid item><TextFieldComponent3 text={"Дом"} label={"129a"}/></Grid>
                       <Grid item><TextFieldComponent3 text={"Дом"} label={"129a"}/></Grid>
                       <Grid item><TextFieldComponent3 text={"Дом"} label={"129a"}/></Grid>



                   </Grid>
                   {/*<TextFieldComponent label={"email"} text={"email@mail.ru"}/>*/}
               </Grid>
           </Grid>
       </Box>
    );
};

export default EditWorkerInfo;



