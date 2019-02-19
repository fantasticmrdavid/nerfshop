import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductCard from 'components/ProductCard';
import { removeProductFromCart, updateCartQty } from 'actions/cart';

const ProductCardContainer = (props) => {
  const { id } = props;
  if (!id) return null;
  return <ProductCard {...props} />;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { qty } = ownProps;
  return {
    incrementQty: () => dispatch(updateCartQty(ownProps, qty + 1)),
    decrementQty: () => {
      if (qty - 1 === 0) return dispatch(removeProductFromCart(ownProps));
      return dispatch(updateCartQty(ownProps, qty - 1));
    },
  };
};

ProductCardContainer.propTypes = {
  id: PropTypes.string,
};

export default connect(
  null,
  mapDispatchToProps,
)(ProductCardContainer);
