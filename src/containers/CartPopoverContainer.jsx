import React from 'react';
import { connect } from 'react-redux';
import CartPopover from 'components/CartPopover';
import { hideCartPopover } from 'actions/nav';

const CartPopoverContainer = (props) => {
  return <CartPopover {...props} />;
};

const mapStateToProps = (state) => {
  const { cart, nav, products } = state;
  const { contents, subtotal } = cart;
  const { cartShown, cartHighlight } = nav;
  const { listing } = products;
  return {
    active: cartShown,
    isEmpty: contents.length === 0,
    contents,
    highlight: cartHighlight,
    products: listing.reduce((a, p) => {
      return {
        ...a,
        [p.id]: p,
      };
    }, {}),
    subtotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideCart: () => dispatch(hideCartPopover()),
    onOutsideClick: () => dispatch(hideCartPopover()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartPopoverContainer);
