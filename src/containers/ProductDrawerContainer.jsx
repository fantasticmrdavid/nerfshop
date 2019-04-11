import React from 'react';
import PropTypes from 'prop-types';
import { path } from 'ramda';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductDrawer from 'components/ProductDrawer';
import { deselectProduct } from 'actions/products';

const ProductDrawerContainer = props => <ProductDrawer {...props} />;

const mapStateToProps = (state) => {
  const { products } = state;
  const { listing, selected } = products;
  const activeId = path(['id'], selected);

  return {
    active: !!activeId,
    product: listing.find(p => p.id === activeId),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { history } = ownProps;
  return {
    onOutsideClick: (slug) => {
      dispatch(deselectProduct());
      if (!!slug) history.push(window.location.pathname.replace(`/${slug}`, ''));
    },
  };
};

ProductDrawerContainer.propTypes = {
  active: PropTypes.bool,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ProductDrawerContainer),
);
