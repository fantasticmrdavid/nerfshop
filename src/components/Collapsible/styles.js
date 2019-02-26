import styled from 'styled-components';

export const Container = styled.div`
  max-height: ${props => (props.active ? '1000px' : '0px')};
  transition: 0.3s;
  overflow: hidden;
`;
