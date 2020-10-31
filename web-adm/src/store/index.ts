import { createStore, Store } from 'redux';
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ApplicationState } from './types';

import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store: Store<ApplicationState> = createStore(persistedReducer);
const persistor: Persistor = persistStore(store);

export { store, persistor };