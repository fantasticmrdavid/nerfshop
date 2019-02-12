import {
  PRODUCT_LISTING_UPDATED,
  PRODUCT_SELECTED,
} from 'Constants';
import { createReducer } from 'helpers/reducers';

const initialState = {
  listing: [],
  selected: {},
};

const reducers = {
  [PRODUCT_LISTING_UPDATED]: (state, action) => {
    return {
      ...state,
      listing: action.products,
    };
  },
  [PRODUCT_SELECTED]: (state, action) => {
    return {
      ...state,
      selected: action.product,
    };
  },
};

export default createReducer(initialState, reducers);
