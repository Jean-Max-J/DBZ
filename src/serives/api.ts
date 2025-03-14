import axios from "axios";
import { ICharacter, ICharacters, IOriginplanet, Iplanet } from "../@types";
export default { getAllCharacters , getAllPlanets,getCharacter,getPlanet}

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
  async function getAllPlanets(){
    const {data} = await httpRequester.get<Iplanet>("/planets");
    return data;
  }
  async function getPlanet(id : number){
    const {data} = await httpRequester.get<IOriginplanet>(`/planets/${id}`);
    return data;
  }
