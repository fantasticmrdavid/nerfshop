import styled from 'styled-components';
import theme from 'styles/theme';

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
  z-index: 1;
  display: flex;
  padding: 1em 2em;
  background-color: ${theme.colorWhite};
  box-shadow: ${theme.dropShadow};
`;

export const Logo = styled.div`
  position: relative;
  font-size: 2rem;
  text-transform: lowercase;
`;

export const Spacer = styled.div`
  position: relative;
  height: 70px;
  width: 100%;
`;
