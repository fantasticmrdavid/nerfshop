import React from 'react';
import { path } from 'ramda';
import { connect } from 'react-redux';
import Product from 'components/Product';
import { addProductToCart } from 'actions/cart';
import { selectProduct } from 'actions/products';

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
    addToCart: () => dispatch(addProductToCart(ownProps)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductContainer);
