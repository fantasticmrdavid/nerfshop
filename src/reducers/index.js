import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cart from './cart';
import nav from './nav';
import products from './products';

const persistConfig = {
  cart: {
    key: 'cart',
    storage,
  },
};

const reducers = history => combineReducers({
  cart: persistReducer(persistConfig.cart, cart),
  nav,
  products,
  router: connectRouter(history),
});

export default reducers;
