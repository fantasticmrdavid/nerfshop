import {
  BILLING_FORM_UPDATED,
  CONTACT_DETAILS_UPDATED,
  SHIPPING_FORM_UPDATED,
} from 'Constants';
import { createReducer } from 'helpers/reducers';

const initialState = {
  contactDetails: {
    email: null,
  },
  billing: {},
  shipping: {},
};

const reducers = {
  [BILLING_FORM_UPDATED]: (state, action) => {
    const { data } = action;
    const {
      billingSameAsShipping,
      billing_firstname,
      billing_surname,
      billing_address1,
      billing_address2,
      billing_city,
      billing_state,
      billing_postcode,
    } = data;
    return {
      ...state,
      billing: {
        billingSameAsShipping,
        firstname: billing_firstname,
        surname: billing_surname,
        address1: billing_address1,
        address2: billing_address2,
        city: billing_city,
        state: billing_state,
        postcode: billing_postcode,
      },
    };
  },
  [CONTACT_DETAILS_UPDATED]: (state, action) => {
    const { data } = action;
    const { email } = data;
    return {
      ...state,
      contactDetails: {
        email,
      },
    };
  },
  [SHIPPING_FORM_UPDATED]: (state, action) => {
    const { data } = action;
    const {
      shipping_firstname,
      shipping_surname,
      shipping_address1,
      shipping_address2,
      shipping_city,
      shipping_state,
      shipping_postcode,
    } = data;
    return {
      ...state,
      shipping: {
        firstname: shipping_firstname,
        surname: shipping_surname,
        address1: shipping_address1,
        address2: shipping_address2,
        city: shipping_city,
        state: shipping_state,
        postcode: shipping_postcode,
      },
    };
  },
};

export default createReducer(initialState, reducers);
