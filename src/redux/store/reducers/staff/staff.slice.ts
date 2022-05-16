import {createSlice} from "@reduxjs/toolkit";



interface IInitState {
    name:string,
    phone:string,
    bin:string,
    position:string,
    workerStatus:string,
    email:string,
    date:string,
}

const initialState: IInitState = {
    name:'',
    phone:'',
    bin:'',
    position:'',
    workerStatus:'',
    email:'',
    date:'',

}

const staffSlice = createSlice({
    name: 'staff/',
    initialState,
    reducers: {
        setOneStaff: (state,{payload}) => {
            debugger
            state.name=payload.name
            state.phone=payload.phone
            state.bin=payload.bin
            state.position=payload.position
            state.email=payload.email
            state.date=payload.date
            state.date=payload.date
            state.workerStatus=payload.workerStatus

        },


    }
})

export const {setOneStaff} = staffSlice.actions

export default staffSlice.reducer