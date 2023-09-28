import { configureStore } from "@reduxjs/toolkit";
import { appReducer, weatherReducer } from "./features";

const store = configureStore({
  reducer: {app: appReducer, weather: weatherReducer},
  devTools: true
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export { store };
