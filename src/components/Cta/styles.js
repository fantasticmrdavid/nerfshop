import styled from 'styled-components';
import theme from 'styles/theme';

export const Button = styled.div`
  position: relative;
  text-align: center;
  padding: 1em 2em;
  font-weight: 500;
  color: ${(props) => { return props.primary ? theme.colorWhite : theme.colorCharcoal; }};
  background-color: ${(props) => { return props.primary ? theme.colorCharcoal : 'transparent'; }};
  transition: 0.3s;
  flex: 1;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => { return props.primary ? theme.colorBlack : theme.colorGrey; }};
  }
`;
