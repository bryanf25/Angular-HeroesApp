// To parse this data:
//
//   import { Convert } from "./file";
//
//   const heroes = Convert.toHeroes(json);

export interface Heroe {
  id?: string;
  superhero: string;
  publisher: Publisher;
  alter_ego: string;
  first_appearance: string;
  characters: string;
  alt_img?: string;
}

export enum Publisher {
  DCComics = 'DC Comics',
  MarvelComics = 'Marvel Comics',
}

// Converts JSON strings to/from your types
export class Convert {
  public static toHeroes(json: string): Heroe[] {
    return JSON.parse(json);
  }

  public static heroesToJson(value: Heroe[]): string {
    return JSON.stringify(value);
  }
}
