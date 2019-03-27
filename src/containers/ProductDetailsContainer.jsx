import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductDetails from 'components/ProductDetails';
import { addProductToCart } from 'actions/cart';
import { hideCartPopover, showCartPopover } from 'actions/nav';
import { deselectProduct } from 'actions/products';
import { CART_POPOVER_AUTOHIDE_DURATION } from 'Constants';

const ProductDetailsContainer = (props) => {
  return <ProductDetails {...props} />;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { history, slug } = ownProps;
  return {
    addToCart: () => {
      const { id } = ownProps;
      dispatch(addProductToCart(ownProps));
      dispatch(showCartPopover({ highlightType: 'added', id }));
      dispatch(deselectProduct());
      setTimeout(() => { dispatch(hideCartPopover()); }, CART_POPOVER_AUTOHIDE_DURATION);
    },
    onClose: () => {
      history.push(window.location.pathname.replace(`/${slug}`, ''));
      dispatch(deselectProduct());
    },
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(ProductDetailsContainer),
);
