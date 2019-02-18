import {
  ADDED_PRODUCT_TO_CART,
  CART_PRODUCT_QTY_UPDATED,
  MARKED_PRODUCT_FOR_REMOVAL,
  REMOVED_PRODUCT_FROM_CART,
  SUBTOTAL_UPDATED,
} from 'Constants';

export const updateCartSubtotal = () => (dispatch, getState) => {
  const { listing: products } = getState().products;
  return dispatch({ type: SUBTOTAL_UPDATED, products });
};

export const addProductToCart = product => (dispatch) => {
  dispatch({
    type: ADDED_PRODUCT_TO_CART,
    product,
  });

  dispatch(updateCartSubtotal());
};

export const removeProductFromCart = product => (dispatch) => {
  dispatch({
    type: MARKED_PRODUCT_FOR_REMOVAL,
    product,
  });

  setTimeout(() => {
    dispatch({
      type: REMOVED_PRODUCT_FROM_CART,
      product,
    });
    dispatch(updateCartSubtotal());
  }, 300);
};

export const updateCartQty = (product, qty) => (dispatch) => {
  dispatch({
    type: CART_PRODUCT_QTY_UPDATED,
    product,
    qty,
  });

  dispatch(updateCartSubtotal());
};
