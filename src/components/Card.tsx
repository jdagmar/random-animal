import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Animal } from '../State';

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

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

const Skeleton = styled.div`
  width: 350px;
  height: 350px;
  display: inline-block;
  position: relative;
  overflow: hidden;
  background-color: #dddbdd;

  &:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    content: '';
    animation: ${shimmer} 2s infinite;
  }
`;

export const Card = (props: Props) => {
  const getCardContent = () => {
    switch (props.animal.tag) {
      case 'got animal':
        return props.animal.type === 'video' ? (
          <video controls>
            <source src={props.animal.url} type="video/mp4" />
          </video>
        ) : (
          <ImageWrapper>
            <Image src={props.animal.url} alt="" />
          </ImageWrapper>
        );
      case 'fail':
        return <Paragraph>{props.animal.reason}</Paragraph>;

      case 'waiting':
        return <Skeleton></Skeleton>;
    }
  };

  return <div>{getCardContent()}</div>;
};
