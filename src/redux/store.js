import { configureStore } from "@reduxjs/toolkit";
import { bikesApi } from "./bookingSlice";
import { compareSlice } from "./compareSlice";
import wishListReducer from "./wishListSlice"
export const store= configureStore({
  reducer:{
    [bikesApi.reducerPath]:bikesApi.reducer,
    compStore:compareSlice.reducer,
    wishListStore:wishListReducer,
  },
  middleware:( getDefaultMiddleware)=>
    getDefaultMiddleware().concat(bikesApi.middleware)
})