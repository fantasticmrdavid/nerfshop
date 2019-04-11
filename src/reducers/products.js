import {
  PRODUCT_LISTING_UPDATED,
  PRODUCT_DESELECTED,
  PRODUCT_SELECTED,
} from 'Constants';
import { createReducer } from 'helpers/reducers';
import { camelizeKeys } from 'helpers/array';

const initialState = {
  listing: [],
  selected: {},
};

const reducers = {
  [PRODUCT_LISTING_UPDATED]: (state, action) => {
    return {
      ...state,
      listing: action.products.map((p) => {
        return {
          ...camelizeKeys(p),
          id: p.product_id,
          productId: undefined,
        };
      }),
    };
  },
  [PRODUCT_SELECTED]: (state, action) => {
    return {
      ...state,
      selected: action.product,
    };
  },
  [PRODUCT_DESELECTED]: (state) => {
    return {
      ...state,
      selected: {},
    };
  },
};

export default createReducer(initialState, reducers);
