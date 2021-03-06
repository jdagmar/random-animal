import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

const InlineButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
  margin-top: 2rem;
  position: relative;
  z-index: 3;
`;

export const ButtonGroup = (props: Props) => {
  return <InlineButtonGroup>{props.children}</InlineButtonGroup>;
};
