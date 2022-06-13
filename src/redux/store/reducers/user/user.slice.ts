import {createSlice} from "@reduxjs/toolkit";

interface IInitState {
    id:number | null
   phone:string | null
}

const initialState: IInitState = {
    id:null,
   phone:''

}

const userSlice = createSlice({
    name: 'user/',
    initialState,
    reducers: {
        setUserData:(state,{payload}) => {

            if (payload.phone){
                state.phone = payload.phone
            }
            if (payload.id){
                state.id = payload.id
            }
        }
    }
})

export const {setUserData} = userSlice.actions

export default userSlice.reducer