import styled from 'styled-components';
import theme from 'styles/theme';

export const Popover = styled.div`
  position: absolute;
  width: 350px;
  top: 67px;
  right: 0px;
  transition: 0.3s;
  z-index: 11;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: ${theme.dropShadow};
`;

export const List = styled.ul`
`;

export const Item = styled.li`
`;
