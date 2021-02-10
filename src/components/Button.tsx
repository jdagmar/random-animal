import React from 'react';
import styled from 'styled-components';
import { AnimalType } from '../API/animal';

type Props = {
  animalType: AnimalType;
  onClick: (animalType: AnimalType) => void;
  text: string;
};

const FilledButton = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  background-color: #b24968;
  color: #ffffff;
  border: none;
  padding: 0.7rem 1.6rem;
  margin: 0.5rem;
  font-family: 'Sen', sans-serif;
  font-size: clamp(1rem, 4vw, 1.2rem);
  border-radius: 0.25rem;
`;

export const Button = (props: Props) => {
  return (
    <div>
      <FilledButton onClick={() => props.onClick(props.animalType)}>
        {props.text}
      </FilledButton>
    </div>
  );
};
