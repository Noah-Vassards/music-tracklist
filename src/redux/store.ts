import {
  configureStore
} from "@reduxjs/toolkit";


import rootReducer from "./rootReducer";

export let store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;

const storeRedux = {
  store,
};

export default storeRedux;