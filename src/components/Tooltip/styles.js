import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  position: relative;
  width: auto;
  padding: 1em;
  border: 1px solid ${theme.inputBorderColor};
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: ${theme.dropShadow};
  white-space: nowrap;
`;
