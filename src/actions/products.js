import {
  PRODUCT_LISTING_UPDATED,
  PRODUCT_DESELECTED,
  PRODUCT_SELECTED,
} from 'Constants';
import staticProducts from 'data/products';

export const fetchProductsStatic = () => (dispatch) => {
  return dispatch({
    type: PRODUCT_LISTING_UPDATED,
    products: staticProducts,
  });
};

export const deselectProduct = () => (dispatch) => {
  return dispatch({ type: PRODUCT_DESELECTED });
};

export const selectProduct = product => (dispatch) => {
  return dispatch({
    type: PRODUCT_SELECTED,
    product,
  });
};
