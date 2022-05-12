import React from 'react';
import {Box, Button, Grid, InputAdornment, Paper, TextField, Typography} from "@mui/material";
import styled from "@emotion/styled";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const StyledButton = styled(Button)({
    backgroundColor:"primary.light",
    color:"primary.main",
    fontWeight:"800",

});



const EditWorkerInfo = () => {
    return (
       <Box component={Paper} sx={{padding:"20px"}}>
           <Typography sx={{color:"primary.main", fontWeight:"500" }}>Информация о сотуднике</Typography>
           <hr/>
           <Grid container>
               <Grid item xs>
                   <Typography sx={{color:"primary.main", fontWeight:"800" }}>Личная информация</Typography>
                   <TextFieldComponent label={"имя"} text={"Инсар"}/>
                   <TextFieldComponent label={"фамилия"} text={"Еркимбеков"}/>
                   <TextFieldComponent label={"Отчество"} text={"Даулетович"}/>
                   <TextFieldComponent label={"Иин"} text={"23490824092"}/>
                   <Typography sx={{color:"primary.main", fontWeight:"500", marginTop:"10px" }}>Дата рождения</Typography>

                   <Grid container columnSpacing={1}>
                       <Grid item><StyledButton sx={{backgroundColor:"primary.light"}} endIcon={<ExpandMoreIcon/>}>01</StyledButton></Grid>
                       <Grid item><StyledButton sx={{backgroundColor:"primary.light"}} endIcon={<ExpandMoreIcon/>}>Январь</StyledButton></Grid>
                       <Grid item><StyledButton sx={{backgroundColor:"primary.light"}} endIcon={<ExpandMoreIcon/>}>2000</StyledButton></Grid>



                   </Grid>
                   <TextFieldComponent label={"номер"} text={"87074744473"}/>
                   <TextFieldComponent label={"email"} text={"email@mail.ru"}/>
               </Grid>


               <Grid item xs>
                   <Typography sx={{color:"primary.main", fontWeight:"800" }}>Место проживания</Typography>
                   <TextFieldComponent2 label={"Страна"} text={"Казахстан"}/>
                   <TextFieldComponent2 label={"Город"} text={"Алматы"}/>
                   <TextFieldComponent label={"Улица"} text={"Тургут озал"}/>


                   <Grid container columnSpacing={3}>
                       <Grid item><TextFieldComponent3 text={"Дом"} label={"129a"}/></Grid>
                       <Grid item><TextFieldComponent3 text={"Дом"} label={"129a"}/></Grid>
                       <Grid item><TextFieldComponent3 text={"Дом"} label={"129a"}/></Grid>



                   </Grid>
                   <TextFieldComponent label={"email"} text={"email@mail.ru"}/>
               </Grid>
           </Grid>
       </Box>
    );
};

export default EditWorkerInfo;

interface PropsType {
    label:string,
    text:string,

}

const TextFieldComponent:React.FC<PropsType> = ({text,label}) => {
    return (
        <Box sx={{marginTop:"10px"}}>
            <Typography sx={{color:"primary.main", fontWeight:"500" }}>{label}</Typography>
            <TextField
                value={text}
   size={"small"}
                sx={{backgroundColor:"primary.light", color:"primary.main", input: { color: "primary.main", fontWeight:"600" },
                width:"250px"
                }}


            />
        </Box>

    )
}

interface PropsType2 {
    label:string,
    text:string,

}

const TextFieldComponent2:React.FC<PropsType2> = ({text,label}) => {
    return (
        <Box sx={{marginTop:"10px"}}>
            <Typography sx={{color:"primary.main", fontWeight:"500" }}>{label}</Typography>
            <TextField
                value={text}
                size={"small"}
                sx={{backgroundColor:"primary.light", color:"primary.main", input: { color: "primary.main", fontWeight:"600" } }}

                InputProps={{
                    style: {color: "primary.main"},
                    endAdornment: <InputAdornment position="end"><IconButton
                        sx={{color: "primary.main"}}>
                        <ChevronRightIcon/>
                    </IconButton></InputAdornment>
                }}

            />
        </Box>

    )
}

const TextFieldComponent3:React.FC<PropsType2> = ({text,label}) => {
    return (
        <Box sx={{marginTop:"10px"}}>
            <Typography sx={{color:"primary.main", fontWeight:"500" }}>{label}</Typography>
            <TextField
                value={text}
                size={"medium"}
                sx={{backgroundColor:"primary.light", color:"primary.main", input: { color: "primary.main", fontWeight:"600" }, maxWidth:"80px" }}

            />
        </Box>

    )
}