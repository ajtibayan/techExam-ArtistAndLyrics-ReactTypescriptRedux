import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { artistsReducer } from "./slices/artistsSlice";
import { selectionsReducer } from "./slices/selectionsSlice";
import { songsReducer } from "./slices/songsSlice";

const rootReducer = combineReducers({
  artists: artistsReducer,
  songs: songsReducer,
  selections: selectionsReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
