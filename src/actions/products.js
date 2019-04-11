import {
  PRODUCT_LISTING_UPDATED,
  PRODUCT_DESELECTED,
  PRODUCT_SELECTED,
} from 'Constants';
import { localQuery } from 'helpers/api';

export const fetchProducts = () => (dispatch) => {
  return localQuery(`{
    search(type: "blaster") {
      product_id
      name
      slug
      type
      series
      price
      description
      images
      color
      capacity
      firing_mechanism
      priming
      loading_mechanism
      slamfire
    }
  }`)
    .then(res => dispatch({
      type: PRODUCT_LISTING_UPDATED,
      products: res.search,
    }));
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
