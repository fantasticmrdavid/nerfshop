import React from 'react';
import { connect } from 'react-redux';
import ProductDetails from 'components/ProductDetails';
import { addProductToCart } from 'actions/cart';
import { deselectProduct } from 'actions/products';

const ProductDetailsContainer = (props) => {
  return <ProductDetails {...props} />;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: () => dispatch(addProductToCart(ownProps)),
    onClose: () => dispatch(deselectProduct()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(ProductDetailsContainer);
