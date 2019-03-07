import {
  ORDER_CREATED,
  ORDER_FETCHED,
} from 'Constants';

export const createOrder = params => (dispatch) => {
  return dispatch({
    type: ORDER_CREATED,
    params,
  });
};

export const fetchOrder = id => (dispatch) => {
  return dispatch({
    type: ORDER_FETCHED,
    id,
  });
};
