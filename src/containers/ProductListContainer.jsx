import React from 'react';
import { connect } from 'react-redux';
import ProductList from 'components/ProductList';

const ProductListContainer = (props) => {
  return <ProductList {...props} />;
};

const mapStateToProps = (state) => {
  const { products } = state;
  const { listing } = products;
  return {
    products: listing,
  };
};

export default connect(mapStateToProps)(ProductListContainer);
