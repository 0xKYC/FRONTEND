import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./features/wallet/walletSlice";
import onfidoApplicantIdReducer from "./features/wallet/onfidoSlice";

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    user: onfidoApplicantIdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
