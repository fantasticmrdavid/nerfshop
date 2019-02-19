import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'connected-react-router';
import reducers from 'reducers';

const { NODE_ENV } = process.env;
const history = createHistory();
const routerHistoryMiddleware = routerMiddleware(history);

const composeEnhancersClient = NODE_ENV === 'development' && !!window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const middleware = applyMiddleware(
  routerHistoryMiddleware,
  thunk,
);

const createStoreWithMiddleware = composeEnhancersClient(
  middleware,
)(createStore);

// Create store with reducers and initial state
const store = createStoreWithMiddleware(reducers(history));
const persistor = persistStore(store);

export { store, history, persistor };
