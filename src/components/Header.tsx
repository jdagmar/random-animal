import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
`;
const HeaderContent = styled.header`
  margin: auto;
  color: #16697a;
`;

const MainHeading = styled.h1`
  background-color: #ffffff;
  margin: 0;
  padding: 1.5rem 1rem;
  font-size: clamp(2rem, 1.2rem + 1.3333vw, 3rem);
`;

const Preamble = styled.p`
  max-width: 450px;
  margin: auto;
  text-align: center;
  color: #ffffff;
  padding: 2.5rem 1rem;
  font-size: clamp(1.5rem, 1.2rem + 1.3333vw, 2rem);
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
