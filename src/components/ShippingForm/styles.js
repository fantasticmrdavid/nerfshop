import styled from 'styled-components';
import theme from 'styles/theme';
import { fadeIn, slideFadeIn } from 'styles/animations';

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-between;
  margin-top: 2em;
`;

export const Checkbox = styled.input`
`;

export const CheckboxFieldset = styled.div`
  display: flex;
`;

export const CheckoutSection = styled.section`
  width: 750px;
  align-self: center;
`;

export const Error = styled.div`
  color: ${theme.colorRed};
  font-size: 0.8rem;
  padding: 0.5em 0;
  animation: ${fadeIn} 0.3s normal linear;
  animation-fill-mode: forwards;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${props => (props.error ? theme.colorRed : 'inherit')};
`;

export const Input = styled.input`
  padding: 0.5em;
  width: 100%;
`;

export const Select = styled.select`
  height: 28px;
  width: 100%;
`;

export const Fieldset = styled.div`
  margin: 0.5em 0;
`;

export const Heading = styled.h3`
  font-weight: 500;
  font-size: 1.1rem;
  margin-bottom: 0.5em;
  grid-column-start: 1;
  grid-column-end: span 2;
`;

export const HeadingContainer = styled.div`
  margin-top: 2em;

  &:first-of-type {
    margin-top: 1em;
  }
`;

export const Section = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: calc(50% - 5px) calc(50% - 5px);
  grid-column-gap: 10px;
  padding: 1em 0 2em;
  opacity: 0;
  animation: ${slideFadeIn} 0.3s normal linear;
  animation-fill-mode: forwards;
  animation-delay: ${props => `${props.sectionNo * 0.2}s`};
  border-bottom: ${`1px solid ${theme.borderColor}`};
`;

export const SplitFieldset = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 5px) calc(50% - 5px);
  grid-column-gap: 10px;
`;
