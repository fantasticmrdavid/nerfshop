import {
  HIDE_NAV_CART_POPOVER,
  SHOW_NAV_CART_POPOVER,
} from 'Constants';
import { createReducer } from 'helpers/reducers';

const initialState = {
  cartShown: false,
  cartHighlight: {},
};

const reducers = {
  [HIDE_NAV_CART_POPOVER]: (state) => {
    return {
      ...state,
      cartShown: false,
      cartHighlight: {},
    };
  },
  [SHOW_NAV_CART_POPOVER]: (state, action) => {
    const { options = {} } = action;
    const { highlightType, id } = options;
    return {
      ...state,
      cartShown: true,
      cartHighlight: {
        id,
        type: highlightType,
      },
    };
  },
};

export default createReducer(initialState, reducers);
