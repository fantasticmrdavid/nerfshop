import React from 'react';
import { path } from 'ramda';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductDrawer from 'components/ProductDrawer';
import { deselectProduct } from 'actions/products';

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

const mapDispatchToProps = (dispatch, ownProps) => {
  const { history } = ownProps;
  return {
    onOutsideClick: () => {
      dispatch(deselectProduct());
      history.push('/');
    },
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ProductDrawerContainer),
);
