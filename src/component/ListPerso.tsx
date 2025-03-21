import { useEffect, useState } from "react";
import api from "../serives/api";
import { ICharacter } from "../@types";
import IpersoCard from "./PersoCard";
import { useSearchParams } from "react-router";

export default function ListPerso() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [queryParameters] = useSearchParams();

  useEffect(() => {
    fetchCharacters();
    async function fetchCharacters() {
      const race = queryParameters.get("race");
      if (race) {
        const character = await api.getAllCharactersfilter(100, race);
        setCharacters(character);
      } else {
        const character = await api.getAllCharacters(100);

        setCharacters(character.items);
      }
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
