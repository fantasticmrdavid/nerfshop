import styled from 'styled-components';
import theme from 'styles/theme';

export const Automatic = styled.div`
  width: 38px;
  height: 38px;
  background: url(/assets/images/automatic_icon.png) center center no-repeat;
  background-size: contain;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Capacity = styled.div`
  position: relative;
  width: 33px;
  height: 33px;
  border: 2px solid ${theme.colorBlack};
  border-radius: 50%;
  box-sizing: content-box;

  &:before {
    position: absolute;
    content: "";
    width: 40px;
    height: 1px;
    top: calc(50% - 1px);
    left: calc(50% - 20px);
    background-color: ${theme.colorBlack};
  }

  &:after {
    position: absolute;
    content: "";
    width: 1px;
    height: 40px;
    top: calc(50% - 20px);
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
  font-size: ${props => (props.capacity > 99 ? '0.7rem' : '0.8rem')};
  z-index: 1;
  box-sizing: content-box;
`;

export const FiringMechanism = styled.div`
  width: ${props => `${props.type === 'spring' ? 32 : 38}px`};
  height: ${props => `${props.type === 'spring' ? 32 : 38}px`};
  background: ${props => `url(/assets/images/${props.type.toLowerCase()}_icon.png) center center no-repeat`};
  background-size: contain;
`;

export const Label = styled.div`
  margin-left: 0.5em;
`;

export const SemiAuto = styled.div`
  width: 38px;
  height: 38px;
  background: url(/assets/images/semi-automatic_icon.png) center center no-repeat;
  background-size: contain;
`;

export const SlamFire = styled.div`
  width: 38px;
  height: 38px;
  background: url(/assets/images/slamfire_icon.png) center center no-repeat;
  background-size: contain;
`;

export const TooltipContainer = styled.div`
  position: absolute;
  display: ${props => (props.active ? 'block' : 'none')};
  top: -5px;
  left: 35px;
  z-index: 1;
`;
