import React from 'react';
import { connect } from 'react-redux';
import ProductDetails from 'components/ProductDetails';
import { addProductToCart } from 'actions/cart';
import { hideCartPopover, showCartPopover } from 'actions/nav';
import { deselectProduct } from 'actions/products';
import { CART_POPOVER_AUTOHIDE_DURATION } from 'Constants';

const ProductDetailsContainer = (props) => {
  return <ProductDetails {...props} />;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: () => {
      dispatch(addProductToCart(ownProps));
      dispatch(showCartPopover());
      dispatch(deselectProduct());
      setTimeout(() => { dispatch(hideCartPopover()); }, CART_POPOVER_AUTOHIDE_DURATION);
    },
    onClose: () => dispatch(deselectProduct()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(ProductDetailsContainer);
