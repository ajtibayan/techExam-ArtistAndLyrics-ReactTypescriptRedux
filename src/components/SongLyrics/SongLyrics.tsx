import { useEffect, useState } from "react";
import { SongLyricsContainer } from "./SongLyrics.styles";
import { song } from "@data/songs";
import { useSelector } from "react-redux";
import { RootState } from "@store";

const SongLyrics = () => {
  const [selectedSong, setSelectedSong] = useState<song>();
  const songsList = useSelector((state: RootState) => {
    return state.songs;
  });
  const selections = useSelector((state: RootState) => {
    return state.selections;
  });

  useEffect(() => {
    const song = songsList.filter(
      (song) => song.id === selections.songSelected
    );
    if (song.length > 0) {
      setSelectedSong(song[0]);
    } else {
      setSelectedSong(songsList[0]);
    }
  }, [selections, songsList]);

  let title = "";

  if (selections.artistSelected !== "0") {
    if (selections.hasSongs && selectedSong) {
      title = selectedSong.name + " Lyrics";
    } else {
      title = "Artist has no songs";
    }
  } else {
    title = "No artist selected";
  }

  return (
    <SongLyricsContainer
      id="song-lyrics"
      aria-labelledby="song-lyrics__heading"
    >
      <h2 id="song-lyrics__heading">{title}</h2>
      <div style={{ whiteSpace: "pre-wrap" }}>
        {selectedSong && selectedSong.lyrics}
      </div>
    </SongLyricsContainer>
  );
};
export default SongLyrics;
