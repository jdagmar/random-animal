import React from 'react';
import styled from 'styled-components';
import { Animal } from '../State';

type Props = {
  animal: Animal;
};

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const ImageWrapper = styled.div`
  max-width: 475px;
  margin: 0.5rem;
`;

const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
`;

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
        return <Paragraph>Placeholder</Paragraph>;
      case 'waiting':
        return <Paragraph>Fetching image...</Paragraph>;
    }
  };

  return <div>{getCardContent()}</div>;
};
