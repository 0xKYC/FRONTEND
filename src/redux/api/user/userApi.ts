import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { SiweMessage } from "siwe";

import { ChainId } from "constans/chains";
import { loadLocalStorage } from "redux/localStorage";
import { RootState } from "redux/store";
import { API_URL } from "service/config";
import type { User } from "service/user/types";

type Res = {
  accessToken: string;
};

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
    }),
    verifySignature: builder.mutation<
      Res,
      { message: SiweMessage; signature: string }
    >({
      query: (data) => ({
        url: `user/auth`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useEditUserMutation,
  useVerifySignatureMutation,
} = userApi;
// verifySignature: builder.mutation<
//     Res,
//     { message: SiweMessage; signature: string }
//   >({
//     query: (data) => ({
//       url: `user/auth`,
//       method: "POST",
//       body: data,
//     }),
//   }),
