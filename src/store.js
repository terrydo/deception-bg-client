import { createStore, combineReducers } from 'redux';
import { SET_SOCKET, SET_TOKEN } from './constants';
import { produce } from 'immer';
import socket from './socket';

import RoomListReducer from './components/RoomList/reducer';

const initialState = {
  socket,
  token: null,
}

function rootReducer(state = initialState, action) {
  return produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case SET_SOCKET:
        console.log('wtf');
        break;
      case SET_TOKEN:
        console.log('Setting token', action.payload);
        draft.token = action.payload;
        break;
    }
  })
}

const store = createStore(combineReducers(
  {
    global: rootReducer,
    roomList: RoomListReducer,
  }
));

export default store;