import { configureStore } from "@reduxjs/toolkit";
import onfidoApplicantIdReducer from "./features/wallet/onfidoSlice";

export const store = configureStore({
  reducer: {
    user: onfidoApplicantIdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
