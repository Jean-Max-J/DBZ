import axios from "axios";
import { ICharacter, ICharacters, IOriginplanet, Iplanet } from "../@types";
export default { getAllCharacters, getAllPlanets, getCharacter, getPlanet, getAllCharactersfilter }

const httpRequester = axios.create({
  baseURL: "https://dragonball-api.com/api"
});

async function getAllCharacters(Limit: number | undefined = undefined) {
  const queryparams: string[] = []
  if (Limit !== undefined) {
    queryparams.push(`limit=${Limit}`)
  }

  const displayallCharacter = queryparams.length ? `/characters?${queryparams.join("&")}` : "/characters"
  const { data } = await httpRequester.get<ICharacters>(displayallCharacter);
  return data;
}
async function getCharacter(id: number) {
  const { data } = await httpRequester.get<ICharacter>(`/characters/${id}`);
  return data;
}
async function getAllPlanets() {
  const { data } = await httpRequester.get<Iplanet>("/planets");
  return data;
}
async function getPlanet(id: number) {
  const { data } = await httpRequester.get<IOriginplanet>(`/planets/${id}`);
  return data;
}
async function getAllCharactersfilter(Limit: number | undefined = undefined, race: string | null = null) {
  const queryparams: string[] = []
  if (Limit !== undefined) {
    queryparams.push(`limit=${Limit}`)
  }
  if (race !== null) {
    queryparams.push(`race=${race}`)
  }
  const displayallCharacter = queryparams.length ? `/characters?${queryparams.join("&")}` : "/characters"
  const { data } = await httpRequester.get<ICharacter[]>(displayallCharacter);
  return data;
}
