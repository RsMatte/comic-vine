import { Action, Character, CharacterValues } from '../types';

export const setList = (list: Character[]): Action => ({
  type: 'SET_LIST',
  payload: list,
});

export const editCharacter = (values: CharacterValues): Action => ({
  type: 'EDIT_CHARACTER',
  payload: values,
});
