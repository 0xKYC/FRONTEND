import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ChainId } from "core/constans/chains";

import { API_URL } from "../config";
import { Wallet } from "./types";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
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
  }),
});

export const {
  useGetUserWalletQuery,
  useSubscribeNewsletterMutation,
  useCheckWalletOnBlackListQuery,
} = userApi;
