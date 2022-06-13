
import userApi from "./userApi";
import {IUserResponse} from "./user.type";

export const userEndpoints = userApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query<IUserResponse,number | null>({
      query: (id) => ({
        url: `user/${id}`,
        method:"GET"
      }),
      providesTags: ["user"],
    }),

  }),
});

export const {useGetUserProfileQuery} = userEndpoints;
