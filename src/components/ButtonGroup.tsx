import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

const InlineButtonGroup = styled.div`
  display: flex;
  justify-content: between;
  width: 100%;
`;

export const ButtonGroup = (props: Props) => {
  return <InlineButtonGroup>{props.children}</InlineButtonGroup>;
};
