import { Action, Character, CharacterValues } from '../types';

export const setList = (list: Character[]): Action => ({
  type: 'SET_LIST',
  payload: list,
});

export const searchList = (searchTerm: string): Action => ({
  type: 'SEARCH_LIST',
  payload: searchTerm,
});

export const searchFavorites = (): Action => ({
  type: 'SEARCH_FAVORITES',
});

export const displayFullList = (): Action => ({
  type: 'DISPLAY_FULL_LIST',
});

export const markAsFavorite = (character: Character): Action => ({
  type: 'MARK_AS_FAVORITE',
  payload: character,
});

export const dismarkAsFavorite = (character: Character): Action => ({
  type: 'DISMARK_AS_FAVORITE',
  payload: character,
});

export const editCharacter = (values: CharacterValues): Action => ({
  type: 'EDIT_CHARACTER',
  payload: values,
});
