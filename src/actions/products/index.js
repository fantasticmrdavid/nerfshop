import { PRODUCT_LISTING_UPDATED } from 'Constants';
import staticProducts from './data';

export const fetchProductsStatic = () => (dispatch) => {
  return dispatch({
    type: PRODUCT_LISTING_UPDATED,
    products: staticProducts,
  });
};
