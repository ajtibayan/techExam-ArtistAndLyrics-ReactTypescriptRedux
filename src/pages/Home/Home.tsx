import ArtistDetails from "@components/ArtistDetails/ArtistDetails";
import ArtistList from "@components/ArtistList/ArtistList";
import { Container } from "@pages/pages.styles";

const Home = () => {
  return (
    <Container>
      <ArtistList />
      <ArtistDetails />
    </Container>
  );
};
export default Home;
