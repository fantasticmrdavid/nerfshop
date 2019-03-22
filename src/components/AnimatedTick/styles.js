import styled, { keyframes } from 'styled-components';

const dash = keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const dashTick = keyframes`
  0% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
`;

export const Svg = styled.svg`
  width: 100px;
  display: block;
`;

export const Circle = styled.circle`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  animation: ${dash} .9s ease-in-out;
`;

export const Tick = styled.polyline`
  stroke-dashoffset: -100;
  stroke-dasharray: 1000;
  animation: ${dashTick} .9s .35s ease-in-out forwards;
`;
