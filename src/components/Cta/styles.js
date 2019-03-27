import styled from 'styled-components';
import theme from 'styles/theme';

export const Button = styled.div`
  position: relative;
  text-align: center;
  padding: 1em 2em;
  font-weight: 500;
  color: ${props => (props.primary ? theme.colorWhite : theme.colorCharcoal)};
  background-color: ${(props) => {
    if (props.focused) return theme.colorGrey;
    return props.primary ? theme.colorCharcoal : 'transparent';
  }};
  transition: 0.3s;
  flex: 1;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.primary ? theme.colorRivalYellow : theme.colorGrey)};
    color: ${props => (props.primary ? theme.colorBlack : undefined)};
  }
`;
