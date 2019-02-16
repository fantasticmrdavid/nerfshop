import {
  ADDED_PRODUCT_TO_CART,
  CART_PRODUCT_QTY_UPDATED,
  REMOVED_PRODUCT_FROM_CART,
} from 'Constants';

export const addProductToCart = product => (dispatch) => {
  return dispatch({
    type: ADDED_PRODUCT_TO_CART,
    product,
  });
};

export const updateCartQty = (product, qty) => (dispatch) => {
  return dispatch({
    type: CART_PRODUCT_QTY_UPDATED,
    product,
    qty,
  });
};

export const removeProductFromCart = product => (dispatch) => {
  return dispatch({
    type: REMOVED_PRODUCT_FROM_CART,
    product,
  });
};
