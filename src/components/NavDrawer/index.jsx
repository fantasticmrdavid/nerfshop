import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Cta from 'components/Cta';
import SideDrawer from 'components/SideDrawer';
import * as styles from './styles';

const NavDrawer = (props) => {
  const {
    BottomSection,
    CartCount,
    CloseButton,
    Container,
    IconLabel,
    Item,
    List,
    TopSection,
  } = styles;
  const {
    active,
    cartCount,
    closeDrawer,
    onOutsideClick,
  } = props;

  return (
    <SideDrawer id="NavDrawer" active={active} onOutsideClick={() => onOutsideClick()}>
      <Container>
        <TopSection>
          <CloseButton onClick={closeDrawer}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
          <List>
            <Item onClick={closeDrawer}>
              <Link href="/" to="/">home</Link>
            </Item>
            <Item onClick={closeDrawer}>
              <Link href="/blasters" to="/blasters">blasters</Link>
            </Item>
            <Item onClick={closeDrawer}>
              <Link href="/accessories" to="/accessories">accessories</Link>
            </Item>
            <Item onClick={closeDrawer}>
              <Link href="/checkout" to="/checkout">
                <IconLabel>
                  checkout
                  <CartCount count={cartCount}>{cartCount}</CartCount>
                </IconLabel>
              </Link>
            </Item>
          </List>
        </TopSection>
        <BottomSection>
          <Cta onClick={closeDrawer}>Close</Cta>
        </BottomSection>
      </Container>
    </SideDrawer>
  );
};

NavDrawer.propTypes = {
  active: PropTypes.bool,
  cartCount: PropTypes.number,
  closeDrawer: PropTypes.func.isRequired,
  onOutsideClick: PropTypes.func.isRequired,
};

export default NavDrawer;
