import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { SiweMessage } from "siwe";

import { ChainId } from "constans/chains";
import { loadLocalStorage } from "redux/localStorage";

import { API_URL } from "../config";
import { EditUserData, Wallet } from "./types";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    // base url of backend API
    baseUrl: API_URL,
    // prepareHeaders is used to configure the header of every request and gives access to getState which we use to include the token from the store
    prepareHeaders: (headers, { getState }) => {
      // const token = (getState() as RootState).user.accessToken;
      const token = loadLocalStorage();
      console.log(token);
      if (token) {
        // include token in req header
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: (builder) => ({
    getUserWallet: builder.query<
      Wallet,
      { walletAddress: string; chainId: ChainId }
    >({
      query: ({ walletAddress, chainId }) =>
        `user/${walletAddress}/chainId/${chainId}`,
    }),
    getUserWalletInfo: builder.query<
      { address: string },
      { walletAddress: string }
    >({
      query: ({ walletAddress }) => `user/${walletAddress}`,
    }),

    createUserWallet: builder.mutation<Wallet, { walletAddress: string }>({
      query: (userWalletData) => ({
        url: `user/wallet`,
        method: "POST",
        body: userWalletData,
      }),
    }),
    editUserWallet: builder.mutation<Wallet, EditUserData>({
      query: (userWalletData) => ({
        url: `user/wallet`,
        method: "PATCH",
        body: userWalletData,
      }),
    }),
    verifySignature: builder.mutation<
      { accessToken: string },
      { message: SiweMessage; signature: string }
    >({
      query: (data) => ({
        url: `user/auth`,
        method: "POST",
        body: data,
      }),
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
  useGetUserWalletInfoQuery,
  useEditUserWalletMutation,
  useCreateUserWalletMutation,
  useVerifySignatureMutation,
  useSubscribeNewsletterMutation,
} = userApi;
