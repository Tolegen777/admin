import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../rtkApi";

export default createApi({
  reducerPath: "bannerApi",
  baseQuery: baseQuery,
  tagTypes: ["banners"],
  endpoints: () => ({}),
});
