import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ChainId } from "constans/chains";
import { API_URL } from "service/config";
import type { User } from "service/user/types";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["user"],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),

  endpoints: (builder) => ({
    getUser: builder.query<User, { walletAddress: string; chainId: ChainId }>({
      query: ({ walletAddress, chainId }) =>
        `user/${walletAddress}/chainId/${chainId}`,
    }),

    editUser: builder.mutation<
      User,
      Partial<User> & Pick<User, "walletAddress">
    >({
      query: (user) => ({
        url: `user/wallet`,
        method: "PATCH",
        body: user,
      }),
      invalidatesTags: [{ type: "user" }],
    }),
  }),
});

export const { useGetUserQuery, useEditUserMutation } = userApi;
