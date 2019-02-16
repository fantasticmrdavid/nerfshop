import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartPopoverContainer from 'containers/CartPopoverContainer';
import * as styles from './styles';

const Nav = ({ cartShown, hideCart, showCart }) => {
  const {
    CartIcon,
    Container,
    Logo,
    RightSection,
    Spacer,
  } = styles;

  return (
    <Fragment>
      <Spacer />
      <Container>
        <Logo>RivalShop</Logo>
        <RightSection>
          <CartIcon onClick={cartShown ? hideCart : showCart}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <CartPopoverContainer />
          </CartIcon>
        </RightSection>
      </Container>
    </Fragment>
  );
};

Nav.propTypes = {
  cartShown: PropTypes.bool,
  hideCart: PropTypes.func.isRequired,
  showCart: PropTypes.func.isRequired,
};

export default Nav;
