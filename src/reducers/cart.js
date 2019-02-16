import {
  ADDED_PRODUCT_TO_CART,
  CART_PRODUCT_QTY_UPDATED,
  REMOVED_PRODUCT_FROM_CART,
} from 'Constants';
import { createReducer } from 'helpers/reducers';

const initialState = {
  contents: [],
};

const reducers = {
  [ADDED_PRODUCT_TO_CART]: (state, action) => {
    const { contents } = state;
    const { product } = action;
    let alreadyInCart = false;
    const newContents = contents.map((p) => {
      if (p.id === product.id) {
        alreadyInCart = true;
        return {
          ...p,
          qty: p.qty + 1,
        };
      }
      return p;
    });

    return {
      ...state,
      contents: alreadyInCart ? newContents : [...newContents, { id: product.id, qty: 1 }],
    };
  },
  [CART_PRODUCT_QTY_UPDATED]: (state, action) => {
    const { contents } = state;
    const { product } = action;
    return {
      ...state,
      contents: contents.map((p) => {
        return p.id === product.id ? { ...p, qty: product.qty } : p;
      }),
    };
  },
  [REMOVED_PRODUCT_FROM_CART]: (state, action) => {
    const { contents } = state;
    const { product } = action;
    return {
      ...state,
      contents: contents.filter(p => p.id !== product.id),
    };
  },
};

export default createReducer(initialState, reducers);
