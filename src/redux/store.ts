import { configureStore } from "@reduxjs/toolkit";

import { userApi } from "./api/user/userApi";
import networkReducer from "./features/network/networkSlice";
import userReducer from "./features/user/userSlice";
import { loadState } from "./localStorage";

export const store = configureStore({
  reducer: {
    user: userReducer,
    network: networkReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  preloadedState: loadState(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
