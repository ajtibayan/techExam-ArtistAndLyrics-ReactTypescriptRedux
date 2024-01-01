import { useDispatch } from "react-redux";
import { selectArtist, updateArtist } from "../../store";
import { artist } from "../../data/artists";
import { ArtistCardSection } from "./ArtistCard.styles";

type Props = {
  artistObj: artist;
  onSelect: (val: string) => void;
};

const ArtistCard: React.FC<Props> = ({ artistObj, onSelect }) => {
  const { id, name, nationality, age, isSelected } = artistObj;
  const dispatch = useDispatch();

  const handleOnClick = () => {
    onSelect(id);
    dispatch(selectArtist(id));
    dispatch(updateArtist(id));
  };

  return (
    <ArtistCardSection $isSelected={isSelected} onClick={handleOnClick}>
      <h2>Artist Selection</h2>
      <p>Name: {name}</p>
      <p>Nationality: {nationality}</p>
      <p>Age: {age}</p>
    </ArtistCardSection>
  );
};
export default ArtistCard;
