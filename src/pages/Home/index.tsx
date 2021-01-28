import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import api from '../../services/api';
import { ListState } from '../../store/list.store';
import { Title, Form, Characters, NumberOfResults } from './styles';

interface ApiResponse {
  error: string;
  number_of_page_results: number;
  number_of_total_results: number;
  status_code: number;
  results: Character[],
}

export enum GenderTypes {
  MALE = 1,
  FEMALE = 2,
}

export interface Character {
  aliases: string;
  birth?: string;
  deck: string;
  description: string;
  gender: GenderTypes;
  id: number;
  image: {
    icon_url: string;
    original_url: string;
  };
  name: string;
  real_name: string;
}

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const characterList = useSelector<ListState, ListState['list']>((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!characterList || !characterList.length) {
      getList();
    }
  }, [characterList]);

  async function getList() {
    const response = await api.get<ApiResponse>(`api/characters/?api_key=${config.apiKey}&format=json`);
    if (response && response.data) {
      dispatch({ type: 'SET_LIST', payload: response.data.results });
    }
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Title>Encontre os seus personagens preferidos</Title>
      <Form onSubmit={handleSearch}>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Digite o nome do personagem"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <NumberOfResults>
        {`${characterList.length} `}
        personagens encontrados
      </NumberOfResults>
      <Characters>
        {characterList.map((character: Character) => (
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
