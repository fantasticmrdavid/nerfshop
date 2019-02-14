import React from 'react';
import { path } from 'ramda';
import { connect } from 'react-redux';
import ProductDrawer from 'components/ProductDrawer';

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

export default connect(
  mapStateToProps,
)(ProductDrawerContainer);
