import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import persistConfig from './config/persist';
import rootReducer from './ducks';
import rootSaga from './rootSaga';

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  if (process.env.NODE_ENV !== 'production') {
    middleware.unshift(reduxImmutableStateInvariant());
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, applyMiddleware(...middleware));
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};
