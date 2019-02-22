import styled from 'styled-components';
import { transparentize } from 'polished';
import { slideFadeIn } from 'styles/animations';
import theme from 'styles/theme';

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2em;
`;

export const CheckboxFieldset = styled.div`
  display: flex;
`;

export const CheckoutSection = styled.section`
  width: 750px;
  align-self: center;
`;

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
  padding-bottom: 1em;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FieldLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const FieldInput = styled.input`
  padding: 0.5em;
  width: 100%;
`;

export const FieldSelect = styled.select`
  padding: 0.5em;
  width: 100%;
`;

export const Fieldset = styled.div`
  margin: 0.5em 0;
`;

export const FormHeading = styled.h3`
  font-weight: 500;
  font-size: 1.1rem;
  margin-bottom: 0.5em;
  grid-column-start: 1;
  grid-column-end: span 2;
`;

export const FormSection = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: calc(50% - 5px) calc(50% - 5px);
  grid-column-gap: 10px;
  padding: 2em 0;
  opacity: 0;
  animation: ${slideFadeIn} 0.3s normal linear;
  animation-fill-mode: forwards;
  animation-delay: ${props => `${props.sectionNo * 0.25}s`};
  border-bottom: ${props => (props.sectionNo === 1 ? `1px solid ${theme.borderColor}` : undefined)};
`;

export const FullSpanFieldset = styled.div`
  grid-column-start: 1;
  grid-column-end: span 2;
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

export const Message = styled.div`
  padding: 1em;
`;

export const SmallText = styled.span`
  font-size: 0.75rem;
`;

export const SplitFieldset = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 5px) calc(50% - 5px);
  grid-column-gap: 10px;
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
