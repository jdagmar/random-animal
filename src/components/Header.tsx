import React from 'react';
import styled from 'styled-components';
import { device } from '../css/breakpoints';

const HeaderContainer = styled.div`
  width: 100%;
`;

const HeaderContent = styled.header`
  margin: auto;
  color: #ffffff;
`;

const MainHeading = styled.h1`
  margin-bottom: 0;
  padding: 1.5rem 1rem;
  font-size: clamp(2rem, 1.2rem + 1.3333vw, 3rem);
`;

const Preamble = styled.p`
  max-width: 520px;
  margin: auto;
  text-align: center;
  color: #ffffff;
  padding: 0 1rem;
  font-size: clamp(1rem, 1.2rem + 1.3333vw, 1.5rem);
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <MainHeading>Random animal</MainHeading>
        <Preamble>
          Having a bad day? Click the buttons to get a pic, gif or video to
          cheer yourself up.
        </Preamble>
      </HeaderContent>
    </HeaderContainer>
  );
};
