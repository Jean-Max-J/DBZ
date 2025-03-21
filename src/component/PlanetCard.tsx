import { useEffect, useState } from "react";
import { IOriginplanet } from "../@types";
import api from "../serives/api";

export default function PlanetCard({ id }: IPlanetCard) {
  const [planet, setPLanet] = useState<IOriginplanet>();
  useEffect(() => {
    fetchPlanet();
    async function fetchPlanet() {
      const galaxie = await api.getPlanet(id);
      setPLanet(galaxie);
    }
  });
  return (
    <>
      {planet ? (
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={planet.image} alt="Placeholder image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
             
              <div className="media-content">
                <p className="title is-4">{planet.name}</p>
                <p className="subtitle is-6">{planet.isDestroyed}</p>
              </div>
            </div>

            <div className="content">
              {planet.description}
             
              <br />
            </div>
          </div>
        </div>
      ) : (
        <h1>Il n'y a pas de planet</h1>
      )}
    </>
  );
}

interface IPlanetCard {
  id: number;
}
