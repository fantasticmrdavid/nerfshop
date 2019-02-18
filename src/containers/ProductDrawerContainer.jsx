import React from 'react';
import { path } from 'ramda';
import { connect } from 'react-redux';
import ProductDrawer from 'components/ProductDrawer';
import { deselectProduct } from 'actions/products';

const ProductDrawerContainer = (props) => {
  return <ProductDrawer {...props} />;
};

const mapStateToProps = (state) => {
  const { products } = state;
  const { selected } = products;
  return {
    active: !!path(['id'], selected),
    product: selected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOutsideClick: () => dispatch(deselectProduct()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDrawerContainer);
