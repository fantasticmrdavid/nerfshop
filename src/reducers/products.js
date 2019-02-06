import { PRODUCT_LISTING_UPDATED } from 'Constants';
import { createReducer } from 'helpers/reducers';

const initialState = {
  listing: [],
};

const reducers = {
  [PRODUCT_LISTING_UPDATED]: (state, action) => {
    return {
      ...state,
      listing: action.listing,
    };
  },
};

export default createReducer(initialState, reducers);
