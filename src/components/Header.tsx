import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: white;
  width: 100%;
  margin-bottom: 2rem;
  padding-bottom: 2.5rem;
`;
const HeaderContent = styled.header`
  margin: auto;
  // max-width: 64rem;
  color: teal;
`;

const MainHeading = styled.h1`
  padding: 0.5rem 1rem;
  font-family: 'Sen', sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
`;

const Preamble = styled.p`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <MainHeading>Random animal</MainHeading>
        <Preamble>
          Need some cheering up? How about a random picture of a dog or a cat?
        </Preamble>
      </HeaderContent>
    </HeaderContainer>
  );
};
