/* eslint-disable max-len */
import { Action, Character, CharacterValues, ListState } from '../types';
import { filterByTerm, addFavorite, removeFavorite, editCharacter } from './helpers';

const INITIAL_STATE: ListState = {
  list: '[]',
  searchList: '[]',
  favoriteList: '[]',
  searchState: false,
  favoriteState: false,
};

export function listReducer(state: ListState = INITIAL_STATE, action: Action): ListState {
  switch (action.type) {
    case 'SET_LIST':
      return { ...state, list: JSON.stringify(action.payload) };

    case 'SEARCH_FAVORITES':
      return { ...state, searchState: false, favoriteState: true };

    case 'DISPLAY_FULL_LIST':
      return { ...state, searchState: false, favoriteState: false };

    case 'SEARCH_LIST': {
      const listFiltered = filterByTerm(JSON.parse(state.list as string), action.payload as string);

      return { ...state, searchList: JSON.stringify(listFiltered), searchState: true, favoriteState: false };
    }

    case 'MARK_AS_FAVORITE': {
      const character = action.payload;
      const favoriteList = state.favoriteList.length ? JSON.parse(state.favoriteList as string) : [];
      const favoriteListEdited = addFavorite(favoriteList, character as Character);

      return { ...state, favoriteList: JSON.stringify(favoriteListEdited) };
    }

    case 'DISMARK_AS_FAVORITE': {
      const character = action.payload;
      const favoriteList = state.favoriteList.length ? JSON.parse(state.favoriteList as string) : [];
      const favoreListEdited = removeFavorite(favoriteList, character as Character);

      return { ...state, favoriteList: JSON.stringify(favoreListEdited) };
    }

    case 'EDIT_CHARACTER': {
      const list = JSON.parse(state.list as string);
      const favoriteList = state.favoriteList.length ? JSON.parse(state.favoriteList as string) : [];
      const listEdited = editCharacter(list, action.payload as CharacterValues);
      const favoriteListEdited = editCharacter(favoriteList, action.payload as CharacterValues);

      return { ...state, list: JSON.stringify(listEdited), favoriteList: JSON.stringify(favoriteListEdited), searchList: INITIAL_STATE.searchList };
    }

    default:
      return state;
  }
}
