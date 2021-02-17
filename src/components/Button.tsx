import React from 'react';
import styled from 'styled-components';
import { AnimalType } from '../API/animal';
import { device } from '../css/breakpoints';

type Props = {
  animalType: AnimalType;
  onClick: (animalType: AnimalType) => void;
  text: string;
};

const FilledButton = styled.button`
  cursor: pointer;
  background-color: #db6400;
  color: #181a18;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  letter-spacing: 1px;
  font-size: 1.2rem;
  font-family: inherit;
  border-radius: 0.25rem;

  @media only screen and ${device.md}{
    padding: 0.7rem 1.6rem;
  }

    &:hover {
      background-color: #ffa62b;
      transition: background-color 500ms ease-in-out;
    }
  }
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
