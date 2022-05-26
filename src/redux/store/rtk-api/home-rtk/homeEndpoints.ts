import axios from "axios";
import { IHome } from "../../../../types/IHome";
// import { IBanner, ICreateNewBanner } from "../../types/IBanner";
import homeApi from "./homeApi";

export const homeEndpoints = homeApi.injectEndpoints({
  endpoints: (builder) => ({
    getHome: builder.query<IHome[], string>({
      query: () => ({
        url: `/profile/statistic`,
      }),
      providesTags: ["home"],
    }),
  }),
});

export const { useGetHomeQuery } = homeEndpoints;
