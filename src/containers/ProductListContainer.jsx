import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductList from 'components/ProductList';
import { selectProduct } from 'actions/products';

class ProductListContainer extends Component {
  constructor(props) {
    super(props);
    const {
      preselectProduct,
      shouldSelectProduct,
    } = props;
    if (shouldSelectProduct) preselectProduct();
  }

  render() {
    return <ProductList {...this.props} />;
  }
}

ProductListContainer.propTypes = {
  preselectProduct: PropTypes.func.isRequired,
  shouldSelectProduct: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => {
  const { category, selected } = ownProps;
  const { products } = state;
  const { listing } = products;
  return {
    products: !!category ? listing.filter(p => p.type === category) : listing,
    selected,
    shouldSelectProduct: !!selected,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { selected } = ownProps;
  return {
    preselectProduct: () => dispatch(selectProduct(selected)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductListContainer);
