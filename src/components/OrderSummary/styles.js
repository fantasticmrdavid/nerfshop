import styled from 'styled-components';
import { transparentize } from 'polished';
import { slideFadeIn } from 'styles/animations';
import theme from 'styles/theme';

export const Column = styled.div`
  font-weight: 500;
  text-align: center;
  font-size: 1rem;
`;

export const ColumnHeadings = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: auto 140px 140px;
  align-items: center;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  margin: 1em 0 0.25em;
`;

export const Subheading = styled.h2`
  position: relative;
  font-size: 1.2rem;
  margin-bottom: 1em;
  opacity: 0;
  animation: ${slideFadeIn} 0.3s normal linear;
  animation-fill-mode: forwards;
`;

export const Item = styled.li`
  background-color: ${props => (props.deleted ? transparentize(0.7, theme.colorRed) : undefined)};
  max-height: ${props => (props.deleted ? '0px' : '100px')};
  opacity: ${props => (props.deleted ? 0 : 1)};
  overflow: hidden;
  transition: 0.3s;
`;

export const List = styled.ul`
`;

export const SmallText = styled.span`
  font-size: 0.75rem;
`;

export const Subtotal = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
  justify-content: end;
  padding: 1em;
  font-size: 1.2rem;
  border-top: ${`1px solid ${theme.inputBorderColor}`};
  border-bottom: ${`1px solid ${theme.inputBorderColor}`};
`;

export const SubtotalAmount = styled.div`
  font-weight: 500;
`;

export const SubtotalLabel = styled.div`
`;
