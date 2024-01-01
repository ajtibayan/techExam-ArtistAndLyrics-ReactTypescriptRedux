import { createSlice } from "@reduxjs/toolkit";
import { removeArtist } from "./artistsSlice";

export type Selections = {
  artistSelected: string;
  songSelected: number;
  hasSongs: boolean;
};

const initialSelections: Selections = {
  artistSelected: "0",
  songSelected: 0,
  hasSongs: false,
};

const selectionsSlice = createSlice({
  name: "selections",
  initialState: initialSelections,
  reducers: {
    updateArtist(state, action) {
      state.artistSelected = action.payload;
    },
    updateSong(state, action) {
      state.songSelected = parseInt(action.payload);
    },
    updateHasSongs(state, action) {
      state.hasSongs = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(removeArtist, (state, action) => {
      state.artistSelected = "0";
      state.songSelected = 0;
      state.hasSongs = false;
    });
  },
});

export const { updateArtist, updateSong, updateHasSongs } =
  selectionsSlice.actions;
export const selectionsReducer = selectionsSlice.reducer;
