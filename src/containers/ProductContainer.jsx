import React from 'react';
import { path } from 'ramda';
import { connect } from 'react-redux';
import Product from 'components/Product';
import { addProductToCart } from 'actions/cart';
import { hideCartPopover, showCartPopover } from 'actions/nav';
import { selectProduct } from 'actions/products';

import { CART_POPOVER_AUTOHIDE_DURATION } from 'Constants';

const ProductContainer = (props) => {
  return <Product {...props} />;
};

const mapStateToProps = (state, ownProps) => {
  const { products } = state;
  const { selected } = products;
  const isSelected = path(['id'], selected) === ownProps.id;
  return {
    blurred: !!path(['id'], selected) && !isSelected,
    selected: isSelected,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSelect: () => dispatch(selectProduct(ownProps)),
    addToCart: () => {
      dispatch(addProductToCart(ownProps));
      dispatch(showCartPopover());
      setTimeout(() => { dispatch(hideCartPopover()); }, CART_POPOVER_AUTOHIDE_DURATION);
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductContainer);
