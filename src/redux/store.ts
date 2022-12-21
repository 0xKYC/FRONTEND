import { configureStore } from "@reduxjs/toolkit";
import onfidoApplicantIdReducer from "./features/user/onfidoSlice";
import walletReducer from "./features/user/walletSlice";

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    user: onfidoApplicantIdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
