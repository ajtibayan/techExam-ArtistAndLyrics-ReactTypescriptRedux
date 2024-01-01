import { artist, artists } from "../../data/artists";
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialStateArtists: artist[] = artists;

const artistsSlice = createSlice({
  name: "artist",
  initialState: initialStateArtists,
  reducers: {
    addArtist(state, action) {
      state.push({
        id: nanoid(),
        name: action.payload.name,
        nationality: action.payload.nationality,
        age: action.payload.age,
        isSelected: false,
      });
    },
    removeArtist(state, action) {
      return state.filter((artist) => action.payload !== artist.id);
    },
    selectArtist(state, action) {
      state.map(
        (artist) => (artist.isSelected = action.payload === artist.id || false)
      );
    },
  },
});

export const { addArtist, removeArtist, selectArtist } = artistsSlice.actions;
export const artistsReducer = artistsSlice.reducer;
