import {
  HIDE_NAV_CART_POPOVER,
  SHOW_NAV_CART_POPOVER,
} from 'Constants';

export const hideCartPopover = () => dispatch => dispatch({ type: HIDE_NAV_CART_POPOVER });
export const showCartPopover = () => dispatch => dispatch({ type: SHOW_NAV_CART_POPOVER });
