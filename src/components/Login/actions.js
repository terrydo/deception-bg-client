import { SET_TOKEN } from '../../constants';

export function setToken(token) {
  return {
    type: SET_TOKEN,
    payload: token,
  };
}
