import styled from 'styled-components';
import { fadeIn, slideFadeIn } from 'styles/animations';
import theme from 'styles/theme';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  transition: 0.3s;
  padding: 0 0.75em;
  opacity: 0;
  animation: ${slideFadeIn} 0.3s normal linear;
  animation-fill-mode: forwards;
  animation-delay: ${props => `${props.index * 0.1}s`};
`;

export const Content = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  grid-template-columns: auto 30px 45px 140px;
  align-items: center;
  font-size: 1rem;
  padding: 0 1em;
`;

export const Image = styled.div`
  position: relative;
  display: ${props => (props.ready ? 'block' : 'none')};
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
  height: ${props => (props.ready ? '0px' : '75px')};
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

export const QtyActions = styled.div`
  display: grid;
  grid-template-columns: 20px 20px;
  grid-column-gap: 5px;
`;

export const QtyButton = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${theme.colorCharcoal};
  color: ${theme.colorWhite};
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colorBlack};
  }
`;
