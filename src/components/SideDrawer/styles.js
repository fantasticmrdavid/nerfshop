import styled from 'styled-components';
import theme from 'styles/theme';
import { media } from 'styles/utils';

export const Drawer = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  min-width: 300px;
  top: 0px;
  left: ${(props) => {
    if (props.direction === 'right') return undefined;
    return props.active ? '0px' : '-600px';
  }};
  right: ${(props) => {
    if (props.direction !== 'right') return undefined;
    return props.active ? '0px' : '-600px';
  }};
  z-index: 2;
  display: flex;
  padding: 1em 2em;
  background-color: rgba(255, 255, 255, 0.95);
  opacity: ${props => (props.active ? 1 : 0)};
  border: 1px solid ${theme.borderColor};
  transition: 0.2s;

  ${media.tablet`
    width: 60%;
  `};

  ${media.desktop`
    width: 30%;
  `};
`;
