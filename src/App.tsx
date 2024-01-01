import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home/Home";
import ArtistFull from "@pages/ArtistFull/ArtistFull";
import NotFound from "@pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:aid/:sid" element={<ArtistFull />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
