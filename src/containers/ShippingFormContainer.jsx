import React from 'react';
import { connect } from 'react-redux';
import ShippingForm from 'components/ShippingForm';
import { updateBillingDetails, updateShippingDetails } from 'actions/forms';

const ShippingFormContainer = props => <ShippingForm {...props} />;

const mapStateToProps = (state) => {
  const { forms } = state;
  const { shipping, billing } = forms;
  return {
    billing,
    shipping,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (data) => {
      dispatch(updateBillingDetails(data));
      dispatch(updateShippingDetails(data));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShippingFormContainer);
