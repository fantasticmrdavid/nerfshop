import React from 'react';
import { connect } from 'react-redux';
import ProductDetails from 'components/ProductDetails';
import { deselectProduct } from 'actions/products';

const ProductDetailsContainer = (props) => {
  return <ProductDetails {...props} />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClose: () => dispatch(deselectProduct()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(ProductDetailsContainer);
