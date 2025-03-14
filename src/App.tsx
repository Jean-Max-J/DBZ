import { useState } from "react";
import "./App.css";
import NavBar from "./component/Navbar";
import ListPerso from "./component/ListPerso";
import { Route, Routes } from "react-router";
import CharacterPage from "./pages/CharacterPage/CharacterPage";
import PlanetPage from "./pages/PlanetePage/PlanetPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<CharacterPage />} />
        <Route path="/planets" element={<PlanetPage />} />
      </Routes>
      
    </>
  );
}

export default App;
