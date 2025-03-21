import { useEffect, useState } from "react";
import api from "../serives/api";
import RaceCard from "./RaceCard";

export default function ListRace() {
  const [races, setRaces] = useState<string[]>([]);
  useEffect(() => {
    fetchRaces();
    async function fetchRaces() {
      const characters = await api.getAllCharacters(100);
      
     let races = characters.items.map((c) => c.race);
     races = [...new Set(races)]
     setRaces(races)
    }
  }, []);
  return (
    <div className="grid is-col-min-15">
      {races.map((race , index) => (
        <RaceCard key={index} race={race} />
      ))}
    </div>
  );
}
