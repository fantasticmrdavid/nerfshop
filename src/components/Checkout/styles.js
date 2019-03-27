import styled from 'styled-components';
import { slideFadeIn } from 'styles/animations';
import { media } from 'styles/utils';

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 100%;

  ${media.tablet`
    margin-top: 2em;
    grid-template-columns: 40% 60%;
  `};
`;

export const Address = styled.div`
  line-height: 1.35;
  font-size: 1rem;
`;

export const AddressLine = styled.div`
`;

export const CheckoutSection = styled.section`
  width: 100%;
  align-self: center;
  flex: 1;
  max-width: 750px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1em;

  ${media.desktop`
    padding: 0;
  `};
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
  grid-template-columns: 100%;

  ${media.tablet`
    grid-template-columns: calc(50% - 5px) calc(50% - 5px);
    grid-column-gap: 10px;
  `};
`;

export const Subheading = styled.h2`
  position: relative;
  font-size: 1.2rem;
  margin-bottom: 1em;
  opacity: 0;
  animation: ${slideFadeIn} 0.3s normal linear;
  animation-fill-mode: forwards;
`;
