/* eslint-disable max-len */
import { Character, CharacterValues } from '../types';

export const filterByTerm = (list: Character[], term: string): Character[] => (
  list.filter((elem) => (elem.name.toLowerCase().includes(term)))
);

export const editCharacter = (list: Character[], payload: CharacterValues): Character[] => {
  const { id, name, real_name, aliases, birth, gender } = payload;
  const listEdited = list;
  const elementIndex = list.findIndex((element: Character) => element.id === id);

  if (elementIndex === -1) {
    return list;
  }

  listEdited[elementIndex].name = name;
  listEdited[elementIndex].real_name = real_name;
  listEdited[elementIndex].aliases = aliases;
  listEdited[elementIndex].birth = birth;
  listEdited[elementIndex].gender = gender;

  return listEdited;
};

export const addFavorite = (favoriteList: Character[], character: Character): Character[] => {
  const favoriteListEdited = favoriteList.filter((element: Character) => element.id !== character.id);
  favoriteListEdited.push(character);
  return favoriteListEdited;
};

export const removeFavorite = (favoriteList: Character[], character: Character): Character[] => (
  favoriteList.filter((element: Character) => element.id !== character.id)
);
