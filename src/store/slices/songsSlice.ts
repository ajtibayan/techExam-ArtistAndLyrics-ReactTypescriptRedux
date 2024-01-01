import { song, songs } from "../../data/songs";
import { createSlice } from "@reduxjs/toolkit";

const initialStateSongs: song[] = songs;

const songsSlice = createSlice({
  name: "song",
  initialState: initialStateSongs,
  reducers: {},
});

export const songsReducer = songsSlice.reducer;
