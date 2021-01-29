/* eslint-disable max-len */
import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import CharacterForm from '../../pages/CharacterDetails/Form/CharacterForm';
import { store } from '../../store/store';
import { Character } from '../../types';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockedHistoryPush,
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

describe('Character Form', () => {
  it('should be able to submit form', async () => {
    const { getByTestId, getByText } = render(<Provider store={store}><CharacterForm character={character} /></Provider>);
    const buttonElement = getByText('Salvar');

    expect(getByTestId('name')).toBeTruthy();
    expect(getByTestId('real_name')).toBeTruthy();
    expect(getByTestId('aliases')).toBeTruthy();
    expect(getByTestId('gender')).toBeTruthy();
    expect(getByTestId('birth')).toBeTruthy();

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/');
    });
  });
});
