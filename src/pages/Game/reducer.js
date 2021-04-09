import { produce } from 'immer';
import { SET_GAME_ID } from './constants';

const initialState = {
  players: [],
  gameId: null,
};

export default function gameReducer(state = initialState, action) {
  return produce(state, (draft) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case SET_GAME_ID:
        draft.gameId = action.payload;
        break;
    }
  });
}
