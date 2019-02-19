import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductList from 'components/ProductList';
import { fetchProductsStatic } from 'actions/products';

class ProductListContainer extends Component {
  constructor(props) {
    super(props);

    const { loadProducts, shouldLoadProducts } = props;

    if (shouldLoadProducts) loadProducts();
  }

  render() {
    const { shouldLoadProducts } = this.props;
    if (shouldLoadProducts) return null;
    return <ProductList {...this.props} />;
  }
}

ProductListContainer.propTypes = {
  loadProducts: PropTypes.func.isRequired,
  shouldLoadProducts: PropTypes.bool,
};

const mapStateToProps = (state) => {
  const { products } = state;
  const { listing } = products;
  const shouldLoadProducts = listing.length === 0;
  return {
    products: listing,
    shouldLoadProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadProducts: () => dispatch(fetchProductsStatic()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductListContainer);
