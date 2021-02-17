import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Overpass', sans-serif;
    line-height: 1.8;
    background-color: #16697a;
  }

  body, html, #root {
    height: 100%;
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
