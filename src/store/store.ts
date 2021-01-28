import { RootStateOrAny } from 'react-redux';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { listReducer } from './listReducer';

const persistConfig = {
  key: 'primary',
  storage,
};

const persistedReducer = persistReducer<RootStateOrAny, any>(persistConfig, listReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
