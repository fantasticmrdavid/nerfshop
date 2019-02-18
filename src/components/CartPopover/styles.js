import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { highlightPulse } from 'styles/animations';
import theme from 'styles/theme';

export const Popover = styled.div`
  position: absolute;
  max-height: ${(props) => { return props.active ? '1000px' : '0px'; }};
  width: ${(props) => { return !props.isEmpty ? '350px' : 'auto'; }};
  top: 67px;
  right: 0px;
  transition: 0.3s;
  z-index: 11;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: ${theme.dropShadow};
  font-size: 1rem;
  overflow: hidden;
`;

export const Item = styled.li`
  animation: ${props => (props.highlightType === 'added' ? css`${highlightPulse(transparentize(0.7, theme.colorBlue))} 1.5s linear` : 'none')};
  animation-fill-mode: forwards;
`;

export const List = styled.ul`
`;

export const Message = styled.div`
  padding: 1em;
`;
