import {
  HIDE_NAV_CART_POPOVER,
  SHOW_NAV_CART_POPOVER,
} from 'Constants';
import { createReducer } from 'helpers/reducers';

const initialState = {
  cartShown: false,
};

const reducers = {
  [HIDE_NAV_CART_POPOVER]: (state) => {
    return {
      ...state,
      cartShown: false,
    };
  },
  [SHOW_NAV_CART_POPOVER]: (state) => {
    return {
      ...state,
      cartShown: true,
    };
  },
};

export default createReducer(initialState, reducers);
