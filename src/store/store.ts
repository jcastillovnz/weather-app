import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { appReducer, weatherReducer } from "./features";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: { app: appReducer, weather: weatherReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: true,
});
sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
