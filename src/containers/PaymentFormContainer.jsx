import React from 'react';
import { connect } from 'react-redux';
import PaymentForm from 'components/PaymentForm';
import { updateContactDetails } from 'actions/forms';
import { actionPayment } from 'actions/payment';
import { arrayToObject } from 'helpers/array';

const PaymentFormContainer = props => <PaymentForm {...props} />;

const mapStateToProps = (state) => {
  const { cart, forms, products } = state;
  const { contactDetails } = forms;
  const { listing } = products;
  return {
    cart,
    contactDetails,
    products: arrayToObject(listing, 'id'),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (data) => {
      const contactData = {
        email: data.email,
      };
      dispatch(updateContactDetails(contactData));
      dispatch(actionPayment(data));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaymentFormContainer);
