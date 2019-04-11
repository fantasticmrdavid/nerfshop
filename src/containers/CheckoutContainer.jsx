import React from 'react';
import { connect } from 'react-redux';
import Checkout from 'components/Checkout';
import { arrayToObject } from 'helpers/array';

const CheckoutContainer = (props) => {
  return <Checkout {...props} />;
};

const mapStateToProps = (state) => {
  const {
    cart,
    forms,
    products,
  } = state;
  const { listing } = products;
  const { contactDetails, shipping, billing } = forms;
  return {
    billing,
    contactDetails,
    cart,
    products: arrayToObject(listing, 'id'),
    ready: listing.length > 0,
    shipping,
  };
};

export default connect(
  mapStateToProps,
)(CheckoutContainer);
