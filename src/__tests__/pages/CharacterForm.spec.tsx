/* eslint-disable max-len */
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import CharacterForm from '../../pages/CharacterDetails/Form/CharacterForm';
import { store } from '../../store/store';
import { Character } from '../../types';

const mockedDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => (mockedDispatch),
  useSelector: jest.requireActual('react-redux').useSelector,
  Provider: jest.requireActual('react-redux').Provider,
}));

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

const character: Character = {
  aliases: 'aliases',
  deck: 'deck',
  description: 'description',
  gender: 1,
  id: 1,
  image: {
    icon_url: 'icon_url',
    original_url: 'original_url',
  },
  name: 'name',
  real_name: 'real_name',
};

describe('Character Form Submit', () => {
  it('should not submit with an empty name', async () => {
    const { getByText, getByTestId } = render(<Provider store={store}><CharacterForm character={character} /></Provider>);
    const buttonElement = getByText('Salvar');

    const nameInput = getByTestId('name');
    screen.getByTestId('real_name');
    screen.getByTestId('aliases');
    screen.getByTestId('gender');
    screen.getByTestId('birth');

    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedDispatch).not.toHaveBeenCalled();
    });
  });

  it('should submit and trigger dispatch with the correct values', async () => {
    const { getByText } = render(<Provider store={store}><CharacterForm character={character} /></Provider>);
    const buttonElement = getByText('Salvar');

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedDispatch).toHaveBeenCalledWith({
        type: 'EDIT_CHARACTER',
        payload: { id: 1, aliases: 'aliases', gender: 1, name: 'name', real_name: 'real_name', birth: '' } });
    });
  });
});
