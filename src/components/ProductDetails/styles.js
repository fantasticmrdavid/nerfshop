import styled from 'styled-components';
import { fadeIn } from 'styles/animations';

export const Actions = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: 0;
  animation: ${fadeIn} 0.3s normal linear;
  animation-fill-mode: forwards;
`;

export const Content = styled.div`
  position: relative;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 30%;
  padding: 0 1em;
`;

export const Description = styled.div`
  padding: 1em 0.5em 2em;
`;

export const Features = styled.div`
  display: grid;
  grid-row-gap: 5px;
  padding: 1em 0;
`;

export const Image = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  margin: 1em 0;
  background-image: ${props => `url(${props.src})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const LargePriceText = styled.span`
  position: relative;
  top: -5px;
  font-size: 2rem;
`;

export const Name = styled.div`
  font-size: 1.75rem;
`;

export const Price = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 1.2rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
