import {
  NAV_CART_POPOVER_HIDDEN,
  NAV_CART_POPOVER_SHOWN,
  NAV_DRAWER_HIDDEN,
  NAV_DRAWER_SHOWN,
} from 'Constants';

export const hideCartPopover = () => dispatch => dispatch({ type: NAV_CART_POPOVER_HIDDEN });
export const showCartPopover = options => dispatch => dispatch({ type: NAV_CART_POPOVER_SHOWN, options });
export const hideNavDrawer = () => dispatch => dispatch({ type: NAV_DRAWER_HIDDEN });
export const showNavDrawer = () => dispatch => dispatch({ type: NAV_DRAWER_SHOWN });
