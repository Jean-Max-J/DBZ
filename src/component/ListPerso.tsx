import { useEffect, useState } from "react";
import api from "../serives/api";
import { ICharacter } from "../@types";
import IpersoCard from "./PersoCard";

export default function ListPerso() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  useEffect(() => {
    fetchCharacters();
    async function fetchCharacters() {
      const character = await api.getAllCharacters();
      setCharacters(character.items);
    }
  }, []);
  return (
    <div className="grid is-col-min-15">
      {characters.map((perso) => (
        <IpersoCard key={perso.id} id={perso.id} />
      ))}
    </div>
  );
}
