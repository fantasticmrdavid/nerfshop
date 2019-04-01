import styled from 'styled-components';
import theme from 'styles/theme';

export const BottomSection = styled.div`
  display: flex;
  font-size: 1.2rem;
`;

export const CartCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.count > 0 ? '35px' : '0px')};
  height: 35px;
  margin-left: 0.25em;
  border-radius: 50%;
  background-color: ${theme.colorRivalYellow};
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
  overflow: hidden;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 0.75em;
  right: 1em;
  cursor: pointer;
  font-size: 1.5rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const IconLabel = styled.div`
  display: flex;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 0.25em 0;
`;

export const List = styled.nav`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  line-height: 1.5;
`;

export const TopSection = styled.div`
`;
