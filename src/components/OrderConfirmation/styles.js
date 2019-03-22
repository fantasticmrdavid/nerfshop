import styled from 'styled-components';

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 33%;
  justify-content: center;
  margin-top: 2em;
`;

export const BoldCopy = styled.span`
  font-weight: 500;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
`;

export const Copy = styled.div`
  margin: 0.5em 0 1.5em;
`;

export const Heading = styled.h1`
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin: 1em 0 0.25em;
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
  margin-right: 0.5em;
`;
