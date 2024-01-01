import { song } from "@data/songs";
import { SongDetailsContainer } from "./SongDetails.styles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@store";

const SongDetails = () => {
  const [selectedSong, setSelectedSong] = useState<song[]>();
  const songsList = useSelector((state: RootState) => {
    return state.songs;
  });
  const selections = useSelector((state: RootState) => {
    return state.selections;
  });

  useEffect(() => {
    setSelectedSong(songsList.filter((s) => s.id === selections.songSelected));
  }, [selections, songsList]);

  const detailsText = selectedSong ? (
    <>
      <h2 id="song-details__heading">
        {selections.artistSelected === "0" || selections.hasSongs === false
          ? "No"
          : selectedSong[0].name}{" "}
        Details
      </h2>
      <p>Composer: {selectedSong[0].composer}</p>
      <p>Producer: {selectedSong[0].producer}</p>
      <p>Production Date: {selectedSong[0].productionDate}</p>
      <p>Awards: {selectedSong[0].awards}</p>
    </>
  ) : (
    <p>No song details available</p>
  );

  return (
    <SongDetailsContainer
      id="song-details"
      aria-labelledby="song-details__heading"
    >
      {detailsText}
    </SongDetailsContainer>
  );
};
export default SongDetails;
