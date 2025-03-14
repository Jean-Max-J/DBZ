import { useEffect, useState } from "react";
import { IOriginplanet } from "../@types";
import api from "../serives/api";
import PlanetCard from "./PlanetCard";
export default function ListPlanet() {
  const [planets, setPlanets] = useState<IOriginplanet[]>([]);
  useEffect(() => {
    fetchPlanets();
    async function fetchPlanets() {
      const planet = await api.getAllPlanets();
      
      setPlanets(planet.items);
    }
  }, []);
  return (
    <div className="grid is-col-min-15">
      {planets.map((planet) => (
        <PlanetCard key = {planet.id} id = {planet.id}/>
      ))}
    </div>
  );
}
