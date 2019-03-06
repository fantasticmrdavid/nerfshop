import React from 'react';
import { connect } from 'react-redux';
import ShippingForm from 'components/ShippingForm';
import { updateBillingDetails, updateContactDetails, updateShippingDetails } from 'actions/forms';

const ShippingFormContainer = props => <ShippingForm {...props} />;

const mapStateToProps = (state) => {
  const { forms } = state;
  const { contactDetails, shipping, billing } = forms;
  return {
    contactDetails,
    billing,
    shipping,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (data) => {
      dispatch(updateContactDetails(data));
      dispatch(updateBillingDetails(data));
      dispatch(updateShippingDetails(data));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShippingFormContainer);
