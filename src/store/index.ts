import { configureStore } from "@reduxjs/toolkit";
import {
  artistsReducer,
  addArtist,
  removeArtist,
  selectArtist,
} from "./slices/artistsSlice";
import { songsReducer } from "./slices/songsSlice";
import {
  selectionsReducer,
  updateArtist,
  updateSong,
  updateHasSongs,
} from "./slices/selectionsSlice";

const store = configureStore({
  reducer: {
    artists: artistsReducer,
    songs: songsReducer,
    selections: selectionsReducer,
  },
});

export {
  store,
  addArtist,
  removeArtist,
  selectArtist,
  updateArtist,
  updateSong,
  updateHasSongs,
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
