import React from 'react';
import { connect } from 'react-redux';
import Nav from 'components/Nav';
import { hideCartPopover, showCartPopover } from 'actions/nav';

const NavContainer = (props) => {
  return <Nav {...props} />;
};

const mapStateToProps = (state) => {
  const { cart, nav } = state;
  const { cartShown } = nav;
  return {
    cartCount: cart.contents.length > 0 ? cart.contents.reduce((a, p) => { return a + p.qty; }, 0) : 0,
    cartShown,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideCart: () => dispatch(hideCartPopover()),
    showCart: () => dispatch(showCartPopover()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavContainer);
