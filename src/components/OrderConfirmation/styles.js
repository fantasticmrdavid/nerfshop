import styled from 'styled-components';
import { media } from 'styles/utils';

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 100%;
  justify-content: center;
  margin-top: 2em;

  ${media.desktop`
    grid-template-columns: 33%;
  `};
`;

export const BoldCopy = styled.span`
  font-weight: 500;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  padding: 0 1em;

  ${media.desktop`
    padding: 0;
  `};
`;

export const Copy = styled.div`
  margin: 0.5em 0 1.5em;
`;

export const Heading = styled.h1`
  display: flex;
  align-items: center;
  font-size: 2rem;

  ${media.tablet`
    margin-top: 1em;
  `};
`;

export const IconContainer = styled.div`
  position: relative;
  left: -0.5em;
  display: inline-block;
  transform: scale(0.5);
`;

export const Info = styled.div`
  margin: 1em 0;
`;

export const InfoLabel = styled.span`
  font-weight: 500;
  padding-bottom: 0.5em;
  text-align: center;
  font-size: 1.25rem;

  ${media.tablet`
    text-align: left;
    margin-right: 0.5em;
    padding: 0;
    font-size: inherit;
  `};
`;
