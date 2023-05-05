import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_URL } from "service/config";
import type { User } from "service/user/types";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getUser: builder.query<User, string | undefined>({
      query: (walletAddress) => `user/${walletAddress}`,
    }),
  }),
});

export const { useGetUserQuery } = userApi;
