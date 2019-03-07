import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cart from './cart';
import forms from './forms';
import nav from './nav';
import orders from './orders';
import products from './products';

const persistConfig = {
  cart: {
    key: 'cart',
    storage,
  },
  forms: {
    key: 'forms',
    storage,
  },
  orders: {
    key: 'orders',
    storage,
  },
};

const reducers = history => combineReducers({
  cart: persistReducer(persistConfig.cart, cart),
  forms: persistReducer(persistConfig.forms, forms),
  nav,
  orders: persistReducer(persistConfig.orders, orders),
  products,
  router: connectRouter(history),
});

export default reducers;
