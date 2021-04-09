import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { SET_SOCKET, SET_TOKEN } from './constants';
import { produce } from 'immer';
import socket from './socket';

const initialState = {
  socket,
  token: null,
};

const persistConfig = {
  key: 'root',
  storage,
};

export function rootReducer(state = initialState, action) {
  return produce(state, (draft) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case SET_SOCKET:
        console.log('Socket set!');
        break;
      case SET_TOKEN:
        console.log('Setting token', action.payload);
        draft.token = action.payload;
        break;
    }
  });
}

export const persistedReducer = persistReducer(persistConfig, rootReducer);
