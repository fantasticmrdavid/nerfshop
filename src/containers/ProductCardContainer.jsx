import React from 'react';
import { connect } from 'react-redux';
import ProductCard from 'components/ProductCard';
import { removeProductFromCart, updateCartQty } from 'actions/cart';

const ProductCardContainer = (props) => {
  return <ProductCard {...props} />;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { qty } = ownProps;
  return {
    incrementQty: () => dispatch(updateCartQty(ownProps, qty + 1)),
    decrementQty: () => {
      if (qty - 1 === 0) return dispatch(removeProductFromCart(ownProps));
      return dispatch(updateCartQty(ownProps, qty - 1));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(ProductCardContainer);
