import styled from 'styled-components';
import { fadeIn } from 'styles/animations';

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 275px;
  opacity: ${(props) => { return props.blurred ? 0.5 : 1; }};
  transition: 0.3s;
`;

export const Content = styled.div`
  position: relative;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 30%;
  padding: 0 1em;
  box-sizing: border-box;
`;

export const Features = styled.div`
  display: grid;
  grid-template-columns: 38px 38px;
  grid-column-gap: 2px;
  justify-content: flex-end;
  align-items: center;
`;

export const Image = styled.div`
  position: relative;
  display: ${(props) => { return props.ready ? 'block' : 'none'; }};
  width: 100%;
  height: 135px;
  margin: 1em 0;
  cursor: pointer;
  background-image: ${props => `url(${props.src})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 0;
  animation: ${fadeIn} 0.3s normal linear;
  animation-fill-mode: forwards;
`;

export const ImagePreloader = styled.img`
  display: block;
  width: 0px;
  height: ${(props) => { return props.ready ? '0px' : '135px'; }};
`;

export const LargePriceText = styled.span`
  position: relative;
  top: -3px;
  font-size: 1.5rem;
`;

export const Name = styled.div`
  font-size: 1.25rem;
`;

export const Price = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
