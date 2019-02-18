import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { highlightPulse } from 'styles/animations';
import theme from 'styles/theme';

export const Popover = styled.div`
  position: absolute;
  max-height: ${props => (props.active ? '1000px' : '0px')};
  width: ${props => (!props.isEmpty ? '370px' : 'auto')};
  top: 67px;
  right: 0px;
  transition: 0.3s;
  z-index: 11;
  color: ${theme.colorFont};
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: ${theme.dropShadow};
  font-size: 1rem;
  overflow: hidden;
`;

export const Item = styled.li`
  background-color: ${props => (props.deleted ? transparentize(0.7, theme.colorRed) : undefined)};
  animation: ${props => (props.highlightType === 'added' ? css`${highlightPulse(transparentize(0.7, theme.colorBlue))} 1.5s linear` : 'none')};
  animation-fill-mode: forwards;
  font-weight: ${props => (props.highlightType === 'added' ? 500 : 300)};
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
