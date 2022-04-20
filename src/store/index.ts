import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import authReducer from "../store/reducers/auth/auth.slice";
import bannerApi from "./banner-rtk/bannerApi";

const rootReducer = combineReducers({
  // auth: authReducer,
  [bannerApi.reducerPath]: bannerApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bannerApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
