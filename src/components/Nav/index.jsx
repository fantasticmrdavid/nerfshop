import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartPopoverContainer from 'containers/CartPopoverContainer';
import * as styles from './styles';

const Nav = ({
  cartCount,
  cartShown,
  hideCart,
  showCart,
}) => {
  const {
    CartCount,
    CartIcon,
    Container,
    Logo,
    Item,
    RightSection,
    Spacer,
  } = styles;

  return (
    <Fragment>
      <Spacer />
      <Container>
        <Link href="/" to="/">
          <Logo>RivalShop</Logo>
        </Link>
        <RightSection>
          <Item>
            <Link href="/blasters" to="/blasters">blasters</Link>
          </Item>
          <Item>
            <Link href="/accessories" to="/accessories">accessories</Link>
          </Item>
          <Item>
            <CartIcon focused={cartShown} onClick={cartShown ? hideCart : showCart}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </CartIcon>
            <CartCount count={cartCount} onClick={cartShown ? hideCart : showCart}>{cartCount}</CartCount>
            <CartPopoverContainer />
          </Item>
        </RightSection>
      </Container>
    </Fragment>
  );
};

Nav.propTypes = {
  cartCount: PropTypes.number,
  cartShown: PropTypes.bool,
  hideCart: PropTypes.func.isRequired,
  showCart: PropTypes.func.isRequired,
};

export default Nav;
