import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Checkout from 'components/Checkout';
import { fetchProductsStatic } from 'actions/products';
import { arrayToObject } from 'helpers/array';

class CheckoutContainer extends Component {
  constructor(props) {
    super(props);
    const { loadProducts, shouldLoadProducts } = props;
    if (shouldLoadProducts) loadProducts();
  }

  render() {
    const { shouldLoadProducts } = this.props;
    if (shouldLoadProducts) return null;
    return <Checkout {...this.props} />;
  }
}

CheckoutContainer.propTypes = {
  loadProducts: PropTypes.func.isRequired,
  shouldLoadProducts: PropTypes.bool,
};

const mapStateToProps = (state) => {
  const {
    cart,
    forms,
    products,
  } = state;
  const { listing } = products;
  const shouldLoadProducts = listing.length === 0;
  const { contactDetails, shipping, billing } = forms;
  return {
    billing,
    contactDetails,
    cart,
    products: arrayToObject(listing, 'id'),
    shouldLoadProducts,
    shipping,
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
)(CheckoutContainer);
