import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../../service/auth/auth.service";
import { ILogin, ILoginResponse } from "../../../../types/ILogin";

export const login = createAsyncThunk<any, any>(
  "auth/login",
  async function (creds, { rejectWithValue }) {
    try {
      const response = await AuthService.login(creds);
      localStorage.setItem("access_token", response.data.access_token);
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const checkAuth = createAsyncThunk<any>(
  "auth/refresh",
  async function (_, { rejectWithValue }) {
    try {
      const response = await AuthService.refresh();
      localStorage.setItem("access_token", response.data.access_token);
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const logout = createAsyncThunk<any>(
  "auth/logout",
  async function (_, { rejectWithValue }) {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem("access_token");
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
