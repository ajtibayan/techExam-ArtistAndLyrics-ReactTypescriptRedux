import ArtistDetails from "@components/ArtistDetails/ArtistDetails";
import { Container } from "@pages/pages.styles";
import { useParams } from "react-router-dom";

const ArtistFull = () => {
  const urlParams = useParams();

  return (
    <Container>
      <ArtistDetails {...urlParams} />
    </Container>
  );
};
export default ArtistFull;
