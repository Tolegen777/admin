import { createSlice } from "@reduxjs/toolkit";
import { ActionsEnum } from "../../enum";
import { login, logout } from "./auth.action";

interface IInitState {
  isAuth: boolean;
  error: unknown;
  status: ActionsEnum;
}

const initialState: IInitState = {
  isAuth: false,
  error: null,
  status: ActionsEnum.IDLE,
};

const authReducer = createSlice({
  name: "auth",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = ActionsEnum.LOADING;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.status = ActionsEnum.SUCCESS;
        state.isAuth = true;
      })
      .addCase(login.rejected, (state,  response:any ) => {
        state.status = ActionsEnum.ERROR;
        state.error = response?.payload?.response?.data?.errors.password[0];
       // debugger
      })
      // .addCase(checkAuth.fulfilled, (state, { payload }) => {
      //   state.
      // })
      .addCase(logout.fulfilled, () => {
        return initialState;
      });
  },
});
export default authReducer.reducer;
