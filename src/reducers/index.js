import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import products from './products';

const reducers = history => combineReducers({
  products,
  router: connectRouter(history),
});

export default reducers;
