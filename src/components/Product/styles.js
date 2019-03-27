import styled from 'styled-components';
import { media } from 'styles/utils';

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  opacity: ${props => (props.blurred ? 0.5 : 1)};
  transition: 0.3s;

  ${media.desktop`
    width: 275px;
  `};
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 30%;
  padding: 0 1em;
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
  width: 100%;
  height: 135px;
  margin: 1em 0;
  cursor: pointer;
  background-image: ${props => `url(${props.src})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const LargePriceText = styled.span`
  position: relative;
  top: -3px;
  font-size: 1.5rem;
`;

export const Name = styled.div`
  font-size:  ${props => (props.length > 28 ? '1.1rem' : '1.25rem')};
  margin-bottom: ${props => (props.length > 28 ? '0.25em' : undefined)};
`;

export const Price = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
