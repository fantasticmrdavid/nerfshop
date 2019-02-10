import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  position: relative;
  width: 300px;
  height: 250px;
`;

export const Content = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 30%;
  padding: 1em;
  color: ${theme.colorWhite};
  background-color: rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
`;

export const Cta = styled.div`
`;

export const Description = styled.div`
`;

export const Image = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: ${props => `url(${props.src})`};
  background-size: cover;
`;

export const Name = styled.div`
`;

export const Price = styled.div`
`;
