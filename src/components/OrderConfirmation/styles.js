import styled from 'styled-components';
import { slideFadeIn } from 'styles/animations';

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 2em;
`;

export const Address = styled.div`
  line-height: 1.35;
  font-size: 1rem;
`;

export const AddressLine = styled.div`
`;

export const BoldCopy = styled.span`
  font-weight: 500;
`;

export const CheckoutSection = styled.section`
  width: 750px;
  align-self: center;
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
  font-size: 2rem;
  margin: 1em 0 0.25em;
`;

export const HeadingContainer = styled.div`
  margin-top: 2em;

  &:first-of-type {
    margin-top: 1em;
  }
`;

export const Info = styled.div`
  margin: 1em 0;
`;

export const InfoLabel = styled.span`
  font-weight: 500;
  margin-right: 0.5em;
`;

export const Section = styled.section`
  position: relative;
  padding: 1em 0 2em;
  opacity: 0;
  animation: ${slideFadeIn} 0.3s normal linear;
  animation-fill-mode: forwards;
  animation-delay: ${props => `${props.sectionNo * 0.2}s`};
`;

export const SectionHeading = styled.h3`
  font-weight: 500;
  font-size: 1.1rem;
  margin-bottom: 0.5em;
  grid-column-start: 1;
  grid-column-end: span 2;
`;

export const SplitSection = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 5px) calc(50% - 5px);
  grid-column-gap: 10px;
`;

export const Subheading = styled.h2`
  position: relative;
  font-size: 1.2rem;
  margin-bottom: 1em;
  opacity: 0;
  animation: ${slideFadeIn} 0.3s normal linear;
  animation-fill-mode: forwards;
`;
