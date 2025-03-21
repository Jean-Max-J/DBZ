import { useState } from "react";
import "./App.css";
import NavBar from "./component/Navbar";
import { Route, Routes } from "react-router";
import CharacterPage from "./pages/CharacterPage/CharacterPage";
import PlanetPage from "./pages/PlanetePage/PlanetPage";
import RacePage from "./pages/RacePage/RacePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<CharacterPage />} />
        <Route path="/planets" element={<PlanetPage />} />
        <Route path="/race" element={<RacePage />} />
      </Routes>
      
    </>
  );
}

export default App;
