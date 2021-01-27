import React from 'react';
import parse from 'html-react-parser';
import { DescriptionWrapper } from './styles';

interface IDescriptionProps {
  description: string;
}

const CharacterDescription: React.FC<IDescriptionProps> = ({ description }) => (
  <DescriptionWrapper>
    {parse(description)}
  </DescriptionWrapper>
);

export default CharacterDescription;
