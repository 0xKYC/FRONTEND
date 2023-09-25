import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ChainId } from "core/constans/chains";

import { API_URL } from "../config";
import { DiscordUserObject, Wallet } from "./types";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    credentials: "include",
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    getUserWallet: builder.query<
      Wallet,
      { walletAddress: string; chainId: ChainId }
    >({
      query: ({ walletAddress, chainId }) =>
        `user/${walletAddress}/chainId/${chainId}`,
    }),
    checkWalletOnBlackList: builder.query<boolean, string>({
      query: (walletAddress) => `user/isBlack/${walletAddress}`,
    }),
    subscribeNewsletter: builder.mutation<string, { email: string }>({
      query: (data) => ({
        url: `user/newsletter/signup`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation<any, void>({
      query: () => ({
        method: "POST",
        url: `discord/auth/logout`,
      }),
      invalidatesTags: ["user"],
    }),

    getDiscordUser: builder.query<DiscordUserObject, void>({
      query: () => `discord/auth/me`,
      providesTags: ["user"],
    }),
  }),
});

export const {
  useGetUserWalletQuery,
  useSubscribeNewsletterMutation,
  useGetDiscordUserQuery,
  useLogoutMutation,
  useCheckWalletOnBlackListQuery,
} = userApi;
