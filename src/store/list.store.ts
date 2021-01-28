import { CharacterValues } from '../pages/CharacterDetails/Form/CharacterForm';
import { Character } from '../pages/Home';

export interface ListState {
  list: Character[];
}

const INITIAL_STATE = {
  list: [],
};

type Action = { type: string, payload: Character[] & CharacterValues }

export function characterList(state: ListState = INITIAL_STATE, action: Action): ListState {
  switch (action.type) {
    case 'SET_LIST':
      return { ...state, list: action.payload };
    case 'EDIT_CHARACTER': {
      const { list } = state;
      const { id, name, real_name, aliases, birth, gender } = action.payload;
      const elementIndex = list.findIndex((element) => element.id === id);

      list[elementIndex].name = name;
      list[elementIndex].real_name = real_name;
      list[elementIndex].aliases = aliases;
      list[elementIndex].birth = birth;
      list[elementIndex].gender = gender;

      return { ...state, list };
    }
    default:
      return state;
  }
}
