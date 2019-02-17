import styled from 'styled-components';
import theme from 'styles/theme';

export const CartIcon = styled.div`
  cursor: pointer;
`;

export const Container = styled.nav`
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: ${theme.dropShadow};
`;

export const Logo = styled.div`
  position: relative;
  font-size: 2rem;
  text-transform: lowercase;
`;

export const RightSection = styled.div`
  font-size: 1.25rem;
`;

export const Spacer = styled.div`
  position: relative;
  height: 70px;
  width: 100%;
`;
