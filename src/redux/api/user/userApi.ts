import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { SiweMessage } from "siwe";

import { ChainId } from "constans/chains";
import { loadLocalStorage } from "redux/localStorage";

import { API_URL } from "../config";
import { Applicant } from "../onfido/types";
import { Wallet } from "./types";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = loadLocalStorage();
      if (token) {
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

    createUserWallet: builder.mutation<
      Wallet,
      { walletAddress: string; onfidoApplicantId: string }
    >({
      query: (userWalletData) => ({
        url: `user/wallet`,
        method: "POST",
        body: userWalletData,
      }),
    }),
    createApplicant: builder.mutation<Applicant, {}>({
      query: (data) => ({
        url: `onfido/applicant`,
        method: "POST",
        body: data,
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
  useCreateUserWalletMutation,
  useVerifySignatureMutation,
  useSubscribeNewsletterMutation,
  useCreateApplicantMutation,
} = userApi;
