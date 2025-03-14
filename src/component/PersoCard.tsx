import { useEffect, useState } from "react";
import { ICharacter } from "../@types";
import api from "../serives/api";

export default function PersoCard({ id }: IpersoCard) {
  const [perso, setPerso] = useState<ICharacter>();
  useEffect(() => {
    fetchCharacter();
    async function fetchCharacter() {
      const character = await api.getCharacter(id);
      setPerso(character);
    }
  });
  return (
    <>
      {perso ? (
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={perso.image} alt="Placeholder image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src={perso.originPlanet.image}
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{perso.name}</p>
                <p className="subtitle is-6">{perso.race}</p>
              </div>
            </div>

            <div className="content">
              {perso.description}
              <a>{perso.affiliation}</a>. <a href="#">#css</a>
              <a href="#">#responsive</a>
              <br />
            </div>
          </div>
        </div>
      ) : (
        <h1>Il n'y a pas de personnage</h1>
      )}
    </>
  );
}

interface IpersoCard {
  id: number;
}
