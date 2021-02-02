import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import Home from '../../pages/Home';
import { store } from '../../store/store';

const mockedDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => (mockedDispatch),
  useSelector: jest.requireActual('react-redux').useSelector,
  Provider: jest.requireActual('react-redux').Provider,
}));

describe('Home Page submit', () => {
  it('should be able to submit search term and trigger useDispatch with the correct value', async () => {
    const { getByText, getByTestId } = render(<Provider store={store}><Home /></Provider>);

    const buttonElement = getByText('Pesquisar');
    const inputElement = getByTestId('input');

    fireEvent.change(inputElement, { target: { value: 'term' } });
    fireEvent.click(buttonElement);

    expect(mockedDispatch).toHaveBeenCalledWith({ type: 'SEARCH_LIST', payload: 'term' });
  });
});
