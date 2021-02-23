import React from 'react';
import styled, { keyframes } from 'styled-components';
import { device } from '../css/breakpoints';
import { Animal } from '../State';

type Props = {
  animal: Animal;
};

const mediaSizeSm = '250px';
const mediaSizeMd = '350px';

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.25rem;
`;

const MediaWrapper = styled.div`
  position: relative;
  z-index: 3;

  width: ${mediaSizeSm};
  height: ${mediaSizeSm};

  @media only screen and ${device.md} {
    width: ${mediaSizeMd};
    height: ${mediaSizeMd};
  }
`;

const Paragraph = styled.p`
  color: #ffffff;
  font-size: 1.3rem;
`;

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

const Skeleton = styled.div`
  position: relative;
  z-index: 3;
  overflow: hidden;
  background-color: #dddbdd;
  border-radius: 0.25rem;
  width: ${mediaSizeSm};
  height: ${mediaSizeSm};

  @media only screen and ${device.md} {
    width: ${mediaSizeMd};
    height: ${mediaSizeMd};
  }

  &:after {
    content: '';
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
    animation: ${shimmer} 2s infinite;
  }
`;

export const Card = (props: Props) => {
  const getCardContent = () => {
    switch (props.animal.tag) {
      case 'got animal':
        return props.animal.type === 'video' ? (
          <MediaWrapper>
            <video height="100%" width="100%" controls>
              <source src={props.animal.url} type="video/mp4" />
            </video>
          </MediaWrapper>
        ) : (
          <MediaWrapper>
            <Image src={props.animal.url} alt="" />
          </MediaWrapper>
        );
      case 'fail':
        return <Paragraph>{props.animal.reason}</Paragraph>;

      case 'waiting':
        return <Skeleton></Skeleton>;
    }
  };

  return <div>{getCardContent()}</div>;
};
