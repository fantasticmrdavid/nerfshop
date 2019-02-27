import {
  BILLING_FORM_UPDATED,
  CONTACT_DETAILS_UPDATED,
  SHIPPING_FORM_UPDATED,
} from 'Constants';

export const updateBillingDetails = data => (dispatch) => {
  return dispatch({
    type: BILLING_FORM_UPDATED,
    data,
  });
};

export const updateShippingDetails = data => (dispatch) => {
  return dispatch({
    type: SHIPPING_FORM_UPDATED,
    data,
  });
};

export const updateContactDetails = data => (dispatch) => {
  return dispatch({
    type: CONTACT_DETAILS_UPDATED,
    data,
  });
};
