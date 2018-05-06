import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import reducers from 'src/reducers';
import { persistStore, persistReducer } from 'redux-persist';
// $FlowFixMe
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

function configureStore() {
  const persistedReducer = persistReducer(persistConfig, reducers);
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const storeEnhancers = [middlewareEnhancer];
  const composedEnhancer = composeWithDevTools(...storeEnhancers);
  const persistedState = {};
  const store = createStore(persistedReducer, persistedState, composedEnhancer);
  const persistor = persistStore(store);
  return { store, persistor };
}

export default configureStore();
