import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 2em;
  color: ${theme.colorGrey};
  background-color: ${theme.colorCharcoal};
`;
