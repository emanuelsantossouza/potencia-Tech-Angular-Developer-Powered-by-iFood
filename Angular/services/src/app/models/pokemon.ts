export type PokemonData = {
  sprites: { front_default: string; };
  id: number
  name: string
  types: types[]
};

export class types{
  slot!: number
  type?:type
}

export class type {
  name?: string;
  url?: string;
}
