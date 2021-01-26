import { Character } from '../pages/Home';

export interface ListState {
  list: Character[];
}

const INITIAL_STATE = {
  list: [],
};

type Action = { type: string, title: Character[] }

export function characterList(state: ListState = INITIAL_STATE, action: Action): ListState {
  switch (action.type) {
    case 'SET_LIST':
      return { ...state, list: action.title };
    default:
      return state;
  }
}
