import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import { loadState } from "./localStorage";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: loadState(),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
