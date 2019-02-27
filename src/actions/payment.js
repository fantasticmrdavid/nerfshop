import {
  PAYPAL_PAYMENT_SENT,
} from 'Constants';

export const actionPayment = () => (dispatch) => {
  return dispatch({
    type: PAYPAL_PAYMENT_SENT,
  });
};
