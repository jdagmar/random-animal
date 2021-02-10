import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: teal;
    margin: 0;
  }
`;

const rootElement = document.getElementById('root');
ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  rootElement
);
