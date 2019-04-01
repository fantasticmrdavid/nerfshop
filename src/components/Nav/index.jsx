import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartPopoverContainer from 'containers/CartPopoverContainer';
import * as styles from './styles';

const Nav = ({
  cartCount,
  cartShown,
  hideCart,
  showCart,
  showDrawer,
}) => {
  const {
    CartCount,
    CartIcon,
    Container,
    DesktopItem,
    Item,
    LeftSection,
    Logo,
    MobileNavIcon,
    RightSection,
    Spacer,
  } = styles;

  return (
    <Fragment>
      <Spacer />
      <Container>
        <LeftSection>
          <MobileNavIcon onClick={showDrawer}>
            <FontAwesomeIcon icon={faBars} />
          </MobileNavIcon>
        </LeftSection>
        <Link href="/" to="/">
          <Logo>RivalShop</Logo>
        </Link>
        <RightSection>
          <DesktopItem>
            <Link href="/blasters" to="/blasters">blasters</Link>
          </DesktopItem>
          <DesktopItem>
            <Link href="/accessories" to="/accessories">accessories</Link>
          </DesktopItem>
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
  showDrawer: PropTypes.func.isRequired,
};

export default Nav;
