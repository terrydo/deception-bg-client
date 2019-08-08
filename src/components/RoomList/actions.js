import { GET_ROOM_LIST } from './constants';

export const getRoomList = token => {
    return {
        type: GET_ROOM_LIST,
        payload: {
            token,
        }
    }
}
