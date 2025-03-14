import axios from "axios";
import { ICharacter, ICharacters, IOriginplanet } from "../@types";
export default { getAllCharacters , getAllPlanet,getCharacter}

const httpRequester = axios.create({
    baseURL: "https://dragonball-api.com/api"
  });

  async function getAllCharacters() {
    const { data } = await httpRequester.get<ICharacters>("/characters");
    return data;
  }
  async function getCharacter(id : number){
    const { data } = await httpRequester.get<ICharacter>(`/characters/${id}`);
    return data;
  }
  async function getAllPlanet(){
    const {data} = await httpRequester.get<IOriginplanet>("/planets");
    return data;
  }
