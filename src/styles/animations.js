import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const highlightPulse = color => keyframes`
  0% {
    background-color: ${color};
  }
  25% {
    background-color: transparent;
  }
  50% {
    background-color: ${color};
  }
  100% {
    background-color: transparent;
  }
`;

export const slideFadeIn = keyframes`
  0% {
    opacity: 0;
    left: -30px;
  }
  100% {
    opacity: 1;
    left: 0px;
  }
`;
