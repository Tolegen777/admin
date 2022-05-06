import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bannerApi from "./banner-rtk/bannerApi";
import complaint from "./../store/reducers/complaint/complaint.slice";
import authReducer from "./reducers/auth/auth.slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const rootReducer = combineReducers({
  auth: authReducer,
  [bannerApi.reducerPath]: bannerApi.reducer,
  complaint,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bannerApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
