import {
  ADDED_PRODUCT_TO_CART,
  CART_PRODUCT_QTY_UPDATED,
  MARKED_PRODUCT_FOR_REMOVAL,
  REMOVED_PRODUCT_FROM_CART,
} from 'Constants';

export const addProductToCart = product => (dispatch) => {
  return dispatch({
    type: ADDED_PRODUCT_TO_CART,
    product,
  });
};

export const removeProductFromCart = product => (dispatch) => {
  dispatch({
    type: MARKED_PRODUCT_FOR_REMOVAL,
    product,
  });
  return setTimeout(() => dispatch({
    type: REMOVED_PRODUCT_FROM_CART,
    product,
  }), 1000);
};

export const updateCartQty = (product, qty) => (dispatch) => {
  return dispatch({
    type: CART_PRODUCT_QTY_UPDATED,
    product,
    qty,
  });
};
