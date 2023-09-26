import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_URL } from "../config";
import type { Applicant, OnfidoRedirectData } from "./types";

export const onfidoApi = createApi({
  reducerPath: "onfidoApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    createApplicant: builder.mutation<Applicant, {}>({
      query: () => ({
        url: "onfido/applicant",
        method: "POST",
        body: {},
      }),
    }),
    onfidoRedirect: builder.mutation<string, OnfidoRedirectData>({
      query: ({
        applicantId,
        walletAddress,
        chainId,
        redirectUrl,
        // flow,
        // environment,
        email,
        callbackUrl,
      }) => ({
        url: "onfido/redirect",
        method: "POST",
        body: {
          applicantId,
          walletAddress,
          chainId,
          redirectUrl: redirectUrl || window.location.href,
          // flow,
          // environment,
          email: email || "",
          callbackUrl: callbackUrl || "",
        },
        responseHandler: (response: { text: () => any }) => response.text(),
      }),
    }),
  }),
});

export const { useOnfidoRedirectMutation, useCreateApplicantMutation } =
  onfidoApi;
