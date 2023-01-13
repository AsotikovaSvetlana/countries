import { CountriesAPI } from "./../api/CountriesAPI";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/theme-slice";
import controlsReducer from "../features/controls/controls-slice";
import countriesReducer from "../features/countries/countries-slice";
import detailsReducer from "../features/details/details-slice";

const rootReducer = combineReducers({
  theme: themeReducer,
  controls: controlsReducer,
  countries: countriesReducer,
  details: detailsReducer,
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
