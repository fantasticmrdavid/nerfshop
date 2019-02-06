import { combineReducers } from 'redux';
import { RESET_APP } from 'Constants';
import products from './products';

const appReducers = combineReducers({
  products,
});

const reducers = (state, action) => {
  return appReducers(action.type === RESET_APP ? undefined : state, action);
};

export default reducers;
