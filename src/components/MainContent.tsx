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
`;

export const MainContent = (props: Props) => {
  return <Main>{props.children}</Main>;
};
