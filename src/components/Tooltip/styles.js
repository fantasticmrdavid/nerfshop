import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  position: relative;
  width: 120px;
  padding: 1em;
  border: 1px solid ${theme.inputBorderColor};
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: ${theme.dropShadow};
`;
