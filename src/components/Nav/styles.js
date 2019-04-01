import styled from 'styled-components';
import theme from 'styles/theme';
import { media } from 'styles/utils';

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
  display: grid;
  grid-template-columns: auto auto 45px;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: ${theme.dropShadow};

  ${media.tablet`
    display: flex;
    padding: 1em 2em;
  `};
`;

export const DesktopItem = styled.div`
  display: none;
  align-items: center;

  ${media.tablet`
    display: flex;
  `};
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
`;

export const LeftSection = styled.div`
  font-size: 1.35rem;
  ${media.tablet`
    display: none;
  `};
`;

export const Logo = styled.div`
  position: relative;
  font-size: 2rem;
  text-transform: lowercase;
`;

export const MobileNavIcon = styled.div`
  cursor: pointer;
  color: ${props => (props.focused ? theme.colorRivalYellow : undefined)};
  transition: 0.3s;
`;

export const RightSection = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  justify-content: flex-end;
  grid-column-gap: 25px;
  font-size: 1.35rem;

  ${media.tablet`
    grid-template-columns: auto auto 45px;
    width: 50%;
    font-size: 1.1rem;
  `}
`;

export const Spacer = styled.div`
  position: relative;
  height: 70px;
  width: 100%;
`;
