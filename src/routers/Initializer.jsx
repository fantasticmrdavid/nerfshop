import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from 'actions/products';

class ProductRoutes extends Component {
  constructor(props) {
    super(props);
    const {
      loadProducts,
      shouldLoadProducts,
    } = props;
    if (shouldLoadProducts) loadProducts();
  }

  render() {
    return null;
  }
}

ProductRoutes.propTypes = {
  loadProducts: PropTypes.func.isRequired,
  shouldLoadProducts: PropTypes.bool,
};

const mapStateToProps = (state) => {
  const { products } = state;
  const { listing } = products;
  return {
    shouldLoadProducts: listing.length === 0,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductRoutes);
