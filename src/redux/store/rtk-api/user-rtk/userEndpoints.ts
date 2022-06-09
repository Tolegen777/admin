import { IGetProfiles } from "./user.type";
import userApi from "./userApi";

export const userEndpoints = userApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfiles: builder.query<IGetProfiles, object>({
      query: (filters) => ({
        url: `/profile/list`,
        params: {
          ...filters,
        },
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useGetProfilesQuery } = userEndpoints;
