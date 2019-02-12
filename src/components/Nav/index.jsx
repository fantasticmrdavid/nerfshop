import React, { Fragment } from 'react';
import * as styles from './styles';

export default () => {
  const {
    Logo,
    Nav,
    Spacer,
  } = styles;

  return (
    <Fragment>
      <Spacer />
      <Nav>
        <Logo>RivalShop</Logo>
      </Nav>
    </Fragment>
  );
};
