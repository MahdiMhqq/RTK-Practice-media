import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { albumsApiSlice } from "./apis/albums";
import { photosApiSlice } from "./apis/photos";

import usersReducer from "./slices/usersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApiSlice.reducerPath]: albumsApiSlice.reducer,
    [photosApiSlice.reducerPath]: photosApiSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware()
      .concat(albumsApiSlice.middleware)
      .concat(photosApiSlice.middleware);
  },
});

setupListeners(store.dispatch);

export default store;

export * from "./thunks/users";
export * from "./apis/albums";
export * from "./apis/photos";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
