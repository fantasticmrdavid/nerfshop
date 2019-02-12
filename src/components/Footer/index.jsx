import React from 'react';
import * as styles from './styles';

export default () => {
  const {
    Container,
  } = styles;

  return (
    <Container>
      Copyright {(new Date()).getFullYear()} RivalShop
    </Container>
  );
};
