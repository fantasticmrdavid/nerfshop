import styled from 'styled-components';
import { media } from 'styles/utils';

export const List = styled.ul`
  display: grid;
  grid-template-columns: 100%;
  justify-content: space-between;
  padding: 2em 1em;

  ${media.tablet`
    grid-row-gap: 25px;
    grid-template-columns: 50% 50%;
  `}

  ${media.desktop`
    padding: 2em 0;
    grid-row-gap: 50px;
    grid-template-columns: 275px 275px 275px;
  `}
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  padding-bottom: 2em;

  ${media.tablet`
    padding-bottom: 0px;
  `};
`;

export const Note = styled.div`
  text-align: center;
  padding: 2em;
`;
