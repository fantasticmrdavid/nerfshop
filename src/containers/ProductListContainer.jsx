import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductList from 'components/ProductList';
import { fetchProductsStatic, selectProduct } from 'actions/products';

class ProductListContainer extends Component {
  constructor(props) {
    super(props);
    const {
      loadProducts,
      preselectProduct,
      shouldLoadProducts,
      shouldSelectProduct,
    } = props;
    if (shouldLoadProducts) loadProducts();
    if (shouldSelectProduct) preselectProduct();
  }

  render() {
    const { shouldLoadProducts } = this.props;
    if (shouldLoadProducts) return null;
    return <ProductList {...this.props} />;
  }
}

ProductListContainer.propTypes = {
  loadProducts: PropTypes.func.isRequired,
  preselectProduct: PropTypes.func.isRequired,
  shouldLoadProducts: PropTypes.bool,
  shouldSelectProduct: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => {
  const { category, selected } = ownProps;
  const { products } = state;
  const { listing } = products;
  const shouldLoadProducts = listing.length === 0;
  const shouldSelectProduct = !!selected;
  return {
    products: !!category ? listing.filter(p => p.type === category) : listing,
    selected,
    shouldLoadProducts,
    shouldSelectProduct,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { selected } = ownProps;
  return {
    loadProducts: () => dispatch(fetchProductsStatic()),
    preselectProduct: () => dispatch(selectProduct(selected)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductListContainer);
