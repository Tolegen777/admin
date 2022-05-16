//library
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

//reducer
import complaint from "./../store/reducers/complaint/complaint.slice";
import staff from "./../store/reducers/staff/staff.slice";
import authReducer from "./reducers/auth/auth.slice";

//rtk
import bannerApi from "./rtk-api/banner-rtk/bannerApi";

const rootReducer = combineReducers({
  auth: authReducer,
  [bannerApi.reducerPath]: bannerApi.reducer,
  complaint,
  staff
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bannerApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
