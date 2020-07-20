import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { global } from '../src/utils/styles/globalStyle';
import App from './App';

const GlobalStyle = createGlobalStyle`${global}`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




