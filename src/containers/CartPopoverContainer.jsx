import React from 'react';
import { connect } from 'react-redux';
import CartPopover from 'components/CartPopover';
import { hideCartPopover } from 'actions/nav';

const CartPopoverContainer = (props) => {
  return <CartPopover {...props} />;
};

const mapStateToProps = (state) => {
  const { cart, nav, products } = state;
  const { contents } = cart;
  const { listing } = products;
  return {
    active: nav.cartShown,
    isEmpty: cart.contents.length === 0,
    contents,
    products: listing.reduce((a, p) => {
      return {
        ...a,
        [p.id]: p,
      };
    }, {}),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideCart: () => dispatch(hideCartPopover()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartPopoverContainer);
