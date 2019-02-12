import styled from 'styled-components';
import theme from 'styles/theme';

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
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

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 275px;
`;

export const Content = styled.div`
  position: relative;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 30%;
  padding: 0 1em;
  box-sizing: border-box;
`;

export const Description = styled.div`
`;

export const Features = styled.div`
  display: grid;
  grid-template-columns: 38px 38px;
  grid-column-gap: 2px;
  justify-content: flex-end;
  align-items: center;
`;

export const FiringMechanism = styled.div`
  width: ${props => `${props.type === 'spring' ? 32 : 38}px`};
  height: ${props => `${props.type === 'spring' ? 32 : 38}px`};
  background: ${props => `url(/assets/images/${props.type}_icon.png) center center no-repeat`};
  background-size: contain;
`;

export const Image = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background-image: ${props => `url(${props.src})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const LargePriceText = styled.span`
  position: relative;
  top: -3px;
  font-size: 1.5rem;
`;

export const Name = styled.div`
  font-size: 1.25rem;
`;

export const Price = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
