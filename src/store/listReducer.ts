import { Action, Character, CharacterValues, ListState } from '../types';

const INITIAL_STATE: ListState = {
  list: [],
};

export function listReducer(state: ListState = INITIAL_STATE, action: Action): ListState {
  switch (action.type) {
    case 'SET_LIST':
      return { ...state, list: JSON.stringify(action.payload) };
    case 'EDIT_CHARACTER': {
      const list: Character[] = JSON.parse(state.list as string);
      const { id, name, real_name, aliases, birth, gender } = action.payload as CharacterValues;

      const elementIndex = list.findIndex((element: Character) => element.id === id);
      list[elementIndex].name = name;
      list[elementIndex].real_name = real_name;
      list[elementIndex].aliases = aliases;
      list[elementIndex].birth = birth;
      list[elementIndex].gender = gender;

      return { ...state, list: JSON.stringify(list) };
    }
    default:
      return state;
  }
}
