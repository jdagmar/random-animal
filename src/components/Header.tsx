import React from 'react';
import styled from 'styled-components';

const MainHeading = styled.h1`
  // background-color: #fa8572;
  // color: #ffffff;
  padding: 0.5rem 1rem;
  font-family: 'Sen', sans-serif;
  font-size: 1.2rem;
`;

const Preamble = styled.p`
  // background-color: #b24968;
  // color: #ffffff;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
`;

export const Header = () => {
  return (
    <header>
      <MainHeading>Random animal</MainHeading>
      <Preamble>
        Need some cheering up? How about a random picture of a dog or a cat?
      </Preamble>
    </header>
  );
};
