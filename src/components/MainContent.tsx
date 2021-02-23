import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;

  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    bottom: -50%;
    left: 0;
    background-repeat: no-repeat;
    background-image: url('${process.env.PUBLIC_URL}/img/wave.svg');
    background-size: cover;
    background-position: top;
  }
`;

export const MainContent = (props: Props) => {
  return <Main>{props.children}</Main>;
};
