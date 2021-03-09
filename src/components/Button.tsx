import React from 'react';
import styled from 'styled-components';
import { AnimalType } from '../API/animal';
import { device } from '../css/breakpoints';

type Props = {
  animalType: AnimalType;
  onClick: (animalType: AnimalType) => void;
  text: string;
  emoji: string;
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
  display: flex;
  align-items: center;
  border: 2px solid transparent;

  @media only screen and ${device.md}{
    padding: 0.7rem 1.6rem;
  }

    &:hover, &:focus {
      background-color: #ffa62b;
      transition: background-color 500ms ease-in-out;
    }

    &:focus {
      outline: none;
      border: #db6400 solid 2px;
    }
  }
`;

const Emoji = styled.span`
  margin-left: 0.5rem;
`;

export const Button = (props: Props) => {
  return (
    <div>
      <FilledButton onClick={() => props.onClick(props.animalType)}>
        {props.text}
        <Emoji aria-hidden="true">{props.emoji}</Emoji>
      </FilledButton>
    </div>
  );
};
