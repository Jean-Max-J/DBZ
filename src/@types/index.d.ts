export interface ICharacter {
    id: number;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    originPlanet: IOriginplanet;
    transformations: Itransformation[];
}

export interface IOriginplanet {
    id: number;
    name: string;
    isDestroyed: boolean;
    description: string;
    image : string
}

export interface Itransformation {
    id: number;
    name: string;
    image: string;
    ki: string;
}

export interface ICharacters {
    items: ICharacter[]
    meta : IMeta[]
    link : ILink[]

}

export interface IMeta {
    totalItems: number
    itemCount: number
    itemsPerPage: number
    totalPages: number
    currentPage: number
}

export interface ILink {
    first: string
    previous: string
    next: string
    last: string
}

export interface Iplanet{
    items : IOriginplanet[]
    meta : IMeta[]
    link : ILink[]
}
// export interface Irace{
//     item : ICharacter[]
//     meta : IMeta[]
//     link : ILink[]
// }