import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import walletReducer from "./features/wallet-modal/walletSlice";
import { loadState } from "./localStorage";

export const store = configureStore({
  reducer: {
    user: userReducer,
    walletModal: walletReducer,
  },
  preloadedState: loadState(),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
