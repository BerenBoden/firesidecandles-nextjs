"use client";

import { configureStore } from "@reduxjs/toolkit";
import itemListReducer from "./slices/itemListReducer";
import { api } from "./api";

export const store = configureStore({
  reducer: {
    itemList: itemListReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
