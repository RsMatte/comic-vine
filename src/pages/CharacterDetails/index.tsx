import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { dismarkAsFavorite, markAsFavorite } from '../../store/actions';
import { Character } from '../../types';
import CharacterDescription from './Description/CharacterDescription';
import CharacterForm from './Form/CharacterForm';
import { ButtonWrapper, HeaderWrapper, Title } from './styles';

const CharacterDetails: React.FC = () => {
  const character = useLocation<Character>().state;
  const history = useHistory();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState<string>('description');

  if (!character) {
    history.push('/');
    return null;
  }

  const addFavorite = () => {
    dispatch(markAsFavorite(character));
    toast.success('Alterado com sucesso');
  };

  const removeFavorite = () => {
    dispatch(dismarkAsFavorite(character));
    toast.success('Alterado com sucesso');
  };

  return (
    <>
      <Title>
        {character.name}
      </Title>

      <ButtonWrapper>
        <button type="button" onClick={addFavorite}>Adicionar Favorito</button>
        <button type="button" onClick={removeFavorite}>Remover Favorito</button>
      </ButtonWrapper>

      <HeaderWrapper>
        <img src={character.image.original_url} alt={`foto original de ${character.name}`} />
        <div>{character.deck}</div>
      </HeaderWrapper>

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
