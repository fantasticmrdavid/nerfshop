import styled from 'styled-components';
import theme from 'styles/theme';

export const CartCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.count > 0 ? '20px' : '0px')};
  height: 20px;
  border-radius: 50%;
  background-color: ${theme.colorRivalYellow};
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
  overflow: hidden;
`;

export const CartIcon = styled.div`
  cursor: pointer;
  color: ${props => (props.focused ? theme.colorRivalYellow : undefined)};
  transition: 0.3s;
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.25rem;
  width: 50%;
`;

export const Spacer = styled.div`
  position: relative;
  height: 70px;
  width: 100%;
`;
