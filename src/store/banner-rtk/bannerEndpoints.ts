import axios from "axios";
// import { IBanner, ICreateNewBanner } from "../../types/IBanner";
import bannerApi from "./bannerApi";

export const bannerEndpoints = bannerApi.injectEndpoints({
  endpoints: (builder) => ({
    // getBanners: builder.query<IBanner[], string>({
    //   query: () => ({
    //     url: `/banner`,
    //   }),
    //   providesTags: ["banners"],
    // }),
    // createBanner: builder.mutation<ICreateNewBanner, FormData>({
    //   query: (formData) => ({
    //     url: `/banner/`,
    //     method: "POST",
    //     body: formData,
    //   }),
    //   invalidatesTags: ["banners"],
    // }),
  }),
});

// export const { useGetBannersQuery, useCreateBannerMutation } = bannerEndpoints;
