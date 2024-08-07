import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { displayFullList, searchFavorites, searchList, setList } from '../../store/actions';
import { Character, ListState } from '../../types';
import { Title, Form, Characters, Result, ErrorMessage, ButtonWrapper } from './styles';

interface ApiResponse {
  error: string;
  number_of_page_results: number;
  number_of_total_results: number;
  status_code: number;
  results: Character[],
}

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiError, setError] = useState(false);
  const dispatch = useDispatch();
  const characterList = useSelector<ListState, ListState['list']>((state) => {
    if (state.searchState) {
      return JSON.parse(state.searchList as string);
    }
    if (state.favoriteState) {
      return JSON.parse(state.favoriteList as string);
    }
    return JSON.parse(state.list as string);
  });

  useEffect(() => {
    if (characterList.length === 0) {
      setLoading(true);

      api.get<ApiResponse>('api/character-response.json')
        .then((response) => {
          dispatch(setList(response.data.results));
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchList(searchTerm));
  };

  const handleFavorites = () => {
    dispatch(searchFavorites());
  };

  const handleFullList = () => {
    dispatch(displayFullList());
  };

  return (
    <>
      <Title>Find your favorite characters</Title>
      <Form onSubmit={handleSearch}>
        <input
          data-testid="input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type your character name"
        />
        <button type="submit">Search</button>
      </Form>
      <ButtonWrapper>
        <button type="button" onClick={handleFavorites}>Favorites</button>
        <button type="button" onClick={handleFullList}>Full List</button>
      </ButtonWrapper>

      {apiError && <ErrorMessage>Error while fetching character list</ErrorMessage>}

      <Result>
        {
          loading
            ? 'Loading characters...'
            : `${characterList.length} characters found`
        }
      </Result>
      <Characters>
        {(characterList as Character[]).map((character: Character) => (
          <Link key={character.id} to={{ pathname: `/character/${character.name}`, state: character }}>
            <img src={character.image.icon_url} alt={character.name} />
            <div>
              <strong>{character.name}</strong>
            </div>
            <p>{character.id}</p>
          </Link>
        ))}
      </Characters>
    </>
  );
};

export default Home;
