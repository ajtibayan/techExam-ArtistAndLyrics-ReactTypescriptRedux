import { useSelector } from "react-redux";
import {
  ArtistCardContainer,
  ArtistListSection,
  ButtonContainer,
  modalStyles,
} from "./ArtistList.styles";
import {
  RootState,
  updateArtist,
  updateHasSongs,
  updateSong,
} from "../../store";
import { artist } from "../../data/artists";
import ArtistCard from "@components/ArtistCard/ArtistCard";
import { useDispatch } from "react-redux";
import { removeArtist } from "../../store";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import Form from "@components/Form/Form";

const ArtistList = () => {
  const [selectedId, setSelectedId] = useState<string>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const artistsList = useSelector((state: RootState) => {
    return state.artists;
  });
  const songsList = useSelector((state: RootState) => {
    return state.songs;
  });

  useEffect(() => {
    const artistSongs = songsList.filter((s) => s.artistId === selectedId);
    if (artistSongs[0]) {
      dispatch(updateSong(artistSongs[0].id));
      dispatch(updateHasSongs(true));
    } else {
      dispatch(updateSong(0));
      dispatch(updateHasSongs(false));
    }
  }, [songsList, selectedId, dispatch]);

  const handleRemoveButtonClick = () => {
    dispatch(removeArtist(selectedId));
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ArtistListSection
      id="artist-list-section"
      aria-labelledby="artist-list-section__heading"
    >
      <h2 id="artist-list-section__heading">Artist List Section</h2>
      <ArtistCardContainer>
        {artistsList.map((artist: artist) => {
          return (
            <ArtistCard
              artistObj={artist}
              onSelect={setSelectedId}
              key={artist.id}
            />
          );
        })}
      </ArtistCardContainer>
      <ButtonContainer>
        <button onClick={openModal}>add artist</button>
        <button onClick={handleRemoveButtonClick}>remove artist</button>
      </ButtonContainer>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={modalStyles}
      >
        <Form modalClose={closeModal} />
      </Modal>
    </ArtistListSection>
  );
};
export default ArtistList;
