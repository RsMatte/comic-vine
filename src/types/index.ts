// Character Details and Information

export interface Character {
  aliases: string;
  birth?: string;
  deck: string;
  description: string;
  gender: GenderTypes;
  id: number;
  image: {
    icon_url: string;
    original_url: string;
  };
  name: string;
  real_name: string;
}

export interface ICharacterProps {
  character: Character;
}

export interface CharacterValues {
  id: number;
  aliases: string;
  birth?: string;
  gender: GenderTypes;
  name: string;
  real_name: string;
}

export enum GenderTypes {
  MALE = 1,
  FEMALE = 2,
}

// Redux

export interface ListState {
  list: Character[] | string;
}

export type Action = { type: string, payload: Character[] | CharacterValues }
