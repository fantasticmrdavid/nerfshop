import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import cart from './cart';
import nav from './nav';
import products from './products';

const reducers = history => combineReducers({
  cart,
  nav,
  products,
  router: connectRouter(history),
});

export default reducers;
