import styled from 'styled-components';
import { fadeIn } from 'styles/animations';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  opacity: ${(props) => { return props.blurred ? 0.5 : 1; }};
  transition: 0.3s;
  padding: 0 0.75em;
`;

export const Content = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  grid-template-columns: auto 30px 70px;
  align-items: center;
  font-size: 1rem;
  padding: 0 1em;
`;

export const Image = styled.div`
  position: relative;
  display: ${(props) => { return props.ready ? 'block' : 'none'; }};
  flex-shrink: 0;
  width: 100px;
  height: 75px;
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
  height: ${(props) => { return props.ready ? '0px' : '75px'; }};
`;

export const Name = styled.div`
`;

export const Price = styled.div`
  display: flex;
  align-items: flex-start;
  justify-self: flex-end;
`;

export const Qty = styled.div`
`;
