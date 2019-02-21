import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

export const Content = styled.main`
  min-height: calc(100vh - 185px);
  width: 100%;
  max-width: ${theme.maxWidthDesktop};
  padding-bottom: 3em;
`;
