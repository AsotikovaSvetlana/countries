import { CountriesAPI } from "./../api/CountriesAPI";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/theme-slice";

const rootReducer = combineReducers({
  theme: themeReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: CountriesAPI,
      },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
