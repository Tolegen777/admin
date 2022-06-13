import React from "react";
import {Box, InputAdornment, TextField, Typography} from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from '@mui/icons-material/Edit';

interface PropsType {
    label: string,
    id: string,
    value: string | number | null,
    name: string,
    formik: any,
    error: any,
    helperText: any,
    objects?: any
    type?: string,
    isEdit?: boolean,
    isDisabled?:boolean


}

export const TextFieldComponent: React.FC<PropsType> = ({
                                                            value,
                                                            label,
                                                            id,
                                                            name,
                                                            formik,
                                                            error,
                                                            helperText,
                                                            type,
                                                            isEdit,
                                                            isDisabled
                                                        }) => {
    return (
        <Box sx={{marginTop: "10px"}}>
            <Typography sx={{color: "primary.main", fontWeight: "500"}}>{label}</Typography>
            <TextField
                id={id}
                name={name}
                value={value}
                size={"small"}
                onChange={formik.handleChange}
                sx={{
                    backgroundColor: "primary.light",
                    color: "primary.main",
                    input: {color: "primary.main", fontWeight: "600"},
                    width: "250px"
                }}
                error={error}
                helperText={helperText}
                type={type && type}
                disabled={isDisabled}
                // InputProps={{
                //     style: {color: "primary.main"},
                //     startAdornment: <InputAdornment position="start"><IconButton
                //         sx={{p: '10px', color: "primary.main"}}>
                //         <EditIcon/>
                //     </IconButton></InputAdornment>
                // }}


            />

        </Box>

    )
}

export interface PropsType2 {
    label: string,
    text: string,
    isEdit:boolean

}

export const TextFieldComponent2: React.FC<PropsType> = ({value, label, id, name, formik, error, objects,isEdit}) => {
    return (
        <Box sx={{marginTop: "10px"}}>
            {/*<FormControl sx={{ m: 1, width: 300 }}>*/}
            <InputLabel id="demo-multiple-name-label" sx={{
                color: "primary.main",
                input: {color: "primary.main", fontWeight: "600"},
                width: "250px"
            }}

            >{label}</InputLabel>
            <Select
                id={id}
                name={name}
                value={value}
                size={"small"}
                onChange={formik.handleChange}
                sx={{
                    backgroundColor: "primary.light",
                    color: "primary.main",
                    input: {color: "primary.main", fontWeight: "600"},
                    width: "250px"
                }}
                error={error}
                // multiple
                // MenuProps={MenuProps}
            >
                {objects && objects.map((object: any) => (
                    <MenuItem
                        key={object.id}
                        value={object.id}
                    >
                        {object.value}
                    </MenuItem>
                ))}
            </Select>
            {/*</FormControl>*/}
        </Box>

    )
}


export const TextFieldComponent3: React.FC<PropsType> = ({value, label, id, name, formik, error, helperText}) => {
    return (
        <Box sx={{marginTop: "10px"}}>
            <Typography sx={{color: "primary.main", fontWeight: "500"}}>{label}</Typography>
            <TextField
                size={"medium"}
                sx={{
                    backgroundColor: "primary.light",
                    color: "primary.main",
                    input: {color: "primary.main", fontWeight: "600"},
                    maxWidth: "80px"
                }}
                id={id}
                name={name}
                value={value}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}

            />
        </Box>

    )
}


