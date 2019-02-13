import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  position: relative;
`;

export const Capacity = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border: 2px solid ${theme.colorBlack};
  border-radius: 50%;

  &:before {
    position: absolute;
    content: "";
    width: 38px;
    height: 1px;
    top: calc(50% - 1px);
    left: calc(50% - 19px);
    background-color: ${theme.colorBlack};
  }

  &:after {
    position: absolute;
    content: "";
    width: 1px;
    height: 38px;
    top: calc(50% - 19px);
    left: calc(50% - 1px);
    background-color: ${theme.colorBlack};
  }
`;

export const CapacityContent = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  top: calc(50% - 12px);
  left: calc(50% - 12px);
  border: 1px solid ${theme.colorBlack};
  border-radius: 50%;
  background-color: ${theme.colorWhite};
  font-size: ${(props) => { return props.capacity > 99 ? '0.7rem' : '0.8rem'; }};
  z-index: 1;
`;

export const FiringMechanism = styled.div`
  width: ${props => `${props.type === 'spring' ? 32 : 38}px`};
  height: ${props => `${props.type === 'spring' ? 32 : 38}px`};
  background: ${props => `url(/assets/images/${props.type.toLowerCase()}_icon.png) center center no-repeat`};
  background-size: contain;
`;

export const TooltipContainer = styled.div`
  position: absolute;
  display: ${(props) => { return props.active ? 'block' : 'none'; }};
  top: -5px;
  left: 35px;
  z-index: 1;
`;
