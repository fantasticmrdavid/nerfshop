import {
  NAV_CART_POPOVER_HIDDEN,
  NAV_CART_POPOVER_SHOWN,
  NAV_DRAWER_SHOWN,
  NAV_DRAWER_HIDDEN,
} from 'Constants';
import { createReducer } from 'helpers/reducers';

const initialState = {
  cartShown: false,
  cartHighlight: {},
  drawerActive: false,
};

const reducers = {
  [NAV_CART_POPOVER_HIDDEN]: (state) => {
    return {
      ...state,
      cartShown: false,
      cartHighlight: {},
    };
  },
  [NAV_CART_POPOVER_SHOWN]: (state, action) => {
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
  [NAV_DRAWER_HIDDEN]: (state) => {
    return {
      ...state,
      drawerActive: false,
    };
  },
  [NAV_DRAWER_SHOWN]: (state) => {
    return {
      ...state,
      drawerActive: true,
    };
  },
};

export default createReducer(initialState, reducers);
