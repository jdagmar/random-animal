import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: #16697a;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    line-height: 1.8;
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
