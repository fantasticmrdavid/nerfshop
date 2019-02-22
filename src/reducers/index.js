import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as formReducer } from 'redux-form';
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
  form: formReducer,
  nav,
  products,
  router: connectRouter(history),
});

export default reducers;
