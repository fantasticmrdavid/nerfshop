import React from 'react';
import { path } from 'ramda';
import { connect } from 'react-redux';
import Product from 'components/Product';
import { selectProduct } from 'actions/products';

const ProductContainer = (props) => {
  return <Product {...props} />;
};

const mapStateToProps = (state, ownProps) => {
  const { products } = state;
  const { selected } = products;
  return {
    expanded: path(['id'], selected) === ownProps.id,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSelect: () => dispatch(selectProduct(ownProps)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductContainer);
