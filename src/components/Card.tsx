import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Animal } from '../State';
import { CatIcon } from './CatIcon';

type Props = {
  animal: Animal;
};

const Image = styled.img`
  max-width: 100%;
  width: 350px;
  height: 350px;
  object-fit: cover;
`;

const ImageWrapper = styled.div`
  max-width: 475px;
  max-height: 475px;
  margin: 0.5rem auto;
`;

const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #6c5fa7 transparent #fff transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;
// handle mp4 files
export const Card = (props: Props) => {
  const getCardContent = () => {
    switch (props.animal.tag) {
      case 'got animal':
        return (
          <ImageWrapper>
            <Image src={props.animal.url} alt="" />
          </ImageWrapper>
        );
      case 'fail':
        return (
          <Paragraph>Failed to fetch image {props.animal.reason}</Paragraph>
        );
      case 'placeholder':
        return <CatIcon size={90} />;
      case 'waiting':
        return <Spinner></Spinner>;
    }
  };

  return <div>{getCardContent()}</div>;
};
