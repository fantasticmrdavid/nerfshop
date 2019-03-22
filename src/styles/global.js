/* eslint-disable */
import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import reset from './reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  html {
    height: 100%;
  }
  body {
    font-family: ${theme.fontBody};
    font-size: 14px;
    font-weight: 300;
    line-height: 1.2;
    height: 100%;
  }
  input, select {
    font-size: 0.9rem;
  }
`;

export default GlobalStyles;
