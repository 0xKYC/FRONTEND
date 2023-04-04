import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import networkReducer from "./features/network/networkSlice";
import { loadState } from "./localStorage";

export const store = configureStore({
  reducer: {
    user: userReducer,
    network: networkReducer,
  },
  preloadedState: loadState(),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
