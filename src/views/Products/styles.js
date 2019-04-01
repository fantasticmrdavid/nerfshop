import styled from 'styled-components';
import { media } from 'styles/utils';

export const Heading = styled.h1`
  position: relative;
  font-size: 2rem;
  margin: 1em 0.75em 0;


  ${media.desktop`
    margin: 1em 0 0.25em;
  `};
`;
