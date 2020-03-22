import React from 'react';
import styled from 'styled-components';
import { AnimalType } from '../API/animal';

type Props = {
  animalType: AnimalType;
  onClick: (animalType: AnimalType) => void;
};

const FilledButton = styled.button`
  background-color: #b24968;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  font-family: 'Sen', sans-serif;
  font-size: 1.2rem;
  border-radius: 0.25rem;
`;

export const Button = (props: Props) => {
  return (
    <div>
      <FilledButton onClick={() => props.onClick(props.animalType)}>
        {props.animalType}
      </FilledButton>
    </div>
  );
};
