import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import onfidoApplicantIdReducer from "./features/wallet/onfidoSlice";
import walletReducer from "./features/wallet/walletSlice";
=======
import walletReducer from "./features/wallet/walletSlice";
import onfidoApplicantIdReducer from "./features/wallet/onfidoSlice";
>>>>>>> 7f3eb3a62f7b8a71347d353dd1d669dd1cb80da3

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    user: onfidoApplicantIdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
