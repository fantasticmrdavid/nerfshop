import styled from 'styled-components';
import theme from 'styles/theme';

export const Drawer = styled.aside`
  position: fixed;
  width: 30%;
  height: 100%;
  min-width: 300px;
  top: 0px;
  right: ${props => (props.active ? '0px' : '-600px')};
  z-index: 2;
  display: flex;
  padding: 1em 2em;
  background-color: rgba(255, 255, 255, 0.95);
  opacity: ${props => (props.active ? 1 : 0)};
  border: 1px solid ${theme.borderColor};
  transition: 0.2s;
`;
