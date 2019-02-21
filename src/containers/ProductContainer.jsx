import React from 'react';
import { path } from 'ramda';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Product from 'components/Product';
import { addProductToCart } from 'actions/cart';
import { hideCartPopover, showCartPopover } from 'actions/nav';
import { selectProduct } from 'actions/products';

import { CART_POPOVER_AUTOHIDE_DURATION } from 'Constants';

const ProductContainer = (props) => {
  return <Product {...props} />;
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  const { products } = state;
  const { selected } = products;
  const isSelected = path(['id'], selected) === id;
  return {
    blurred: !!path(['id'], selected) && !isSelected,
    selected: isSelected,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { history, slug } = ownProps;
  return {
    onSelect: () => {
      dispatch(selectProduct(ownProps));
      history.push(`/${slug}`);
    },
    addToCart: () => {
      const { id } = ownProps;
      dispatch(addProductToCart(ownProps));
      dispatch(showCartPopover({ highlightType: 'added', id }));
      setTimeout(() => { dispatch(hideCartPopover()); }, CART_POPOVER_AUTOHIDE_DURATION);
    },
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ProductContainer),
);
