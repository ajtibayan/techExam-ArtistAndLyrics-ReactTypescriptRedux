import { Dropdown } from "@components/Dropdown/Dropdown";
import { ArtistDetailsSection } from "./ArtistDetails.styles";
import SongLyrics from "@components/SongLyrics/SongLyrics";
import SongDetails from "@components/SongDetails/SongDetails";
import {
  RootState,
  updateArtist,
  updateHasSongs,
  updateSong,
} from "../../store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

type Props = {
  aid?: string;
  sid?: number;
};

const ArtistDetails: React.FC<Props> = ({ aid, sid }) => {
  const dispatch = useDispatch();
  const [isFull, setIsFull] = useState<boolean>(false);
  const songsList = useSelector((state: RootState) => {
    return state.songs;
  });

  useEffect(() => {
    if (aid && aid !== "0") {
      dispatch(updateArtist(aid));
      setIsFull(true);
    }

    if (sid && sid > 0) {
      dispatch(updateSong(sid));
    }

    const songs = songsList.filter((s) => s.artistId === aid);
    if (songs.length > 0) {
      dispatch(updateHasSongs(true));
    }
  }, [aid, sid, dispatch, songsList]);

  return (
    <ArtistDetailsSection
      id="artist-details-section"
      aria-labelledby="artist-details-section__heading"
    >
      <h2 id="artist-details-section__heading">Artist Details Section</h2>
      <Dropdown isFull={isFull} />
      <SongLyrics />
      <SongDetails />
    </ArtistDetailsSection>
  );
};
export default ArtistDetails;
