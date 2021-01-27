import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Character } from '../Home';
import CharacterDescription from './Description/CharacterDescription';
import CharacterForm from './Form/CharacterForm';
import { ButtonWrapper, Title } from './styles';

const CharacterDetails: React.FC = () => {
  const character = useLocation<Character>().state;
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState<string>('description');

  if (!character) {
    history.push('/');
    return null;
  }

  return (
    <>
      <Title>
        {character.name}
      </Title>

      <ButtonWrapper>
        <button type="button" onClick={() => setCurrentPage('description')}>Descrição</button>
        <button type="button" onClick={() => setCurrentPage('infos')}>Informações Gerais</button>
      </ButtonWrapper>
      {
        currentPage === 'description'
          ? <CharacterDescription description={character.description} />
          : <CharacterForm character={character} />
      }
    </>
  );
};

export default CharacterDetails;
